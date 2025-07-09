import { type Handle, type RequestEvent } from '@sveltejs/kit';
import { clerkClient } from './clerkClient.js';
import * as constants from './constants.js';
import {
	AuthStatus,
	createClerkRequest,
	TokenType,
	type AuthenticateRequestOptions
} from '@clerk/backend/internal';
import { parse, splitCookiesString } from 'set-cookie-parser';
import { createCurrentUser } from './currentUser.js';
import type { SignedInAuthObject, SignedOutAuthObject } from '@clerk/backend/internal';
import { handleNetlifyCacheInDevInstance } from '@clerk/shared/netlifyCacheHandler';
import type { PendingSessionOptions } from '@clerk/types';

export type ClerkSvelteKitMiddlewareOptions = AuthenticateRequestOptions & { debug?: boolean };

type SessionAuthObject = SignedInAuthObject | SignedOutAuthObject;

export function withClerkHandler(middlewareOptions?: ClerkSvelteKitMiddlewareOptions): Handle {
	return async ({ event, resolve }) => {
		const { debug = false, ...options } = middlewareOptions ?? {};

		try {
			console.log('[svelte-clerk] Starting authentication process');

			// Debug: Log request details
			if (debug) {
				console.log('[svelte-clerk] Request URL:', event.url.toString());
				console.log('[svelte-clerk] Request headers:', Object.fromEntries(event.request.headers.entries()));
				console.log('[svelte-clerk] Cookies:', event.cookies.getAll());
			}

			const clerkWebRequest = createClerkRequest(event.request);
			if (debug) {
				console.log('[svelte-clerk] Clerk request:', JSON.stringify(clerkWebRequest.toJSON(), null, 2));
			}

			// Debug: Validate environment variables
			const secretKey = options?.secretKey ?? constants.SECRET_KEY;
			const publishableKey = options?.publishableKey ?? constants.PUBLISHABLE_KEY;

			if (!secretKey || !publishableKey) {
				console.error('[svelte-clerk] Missing required keys:', {
					hasSecretKey: !!secretKey,
					hasPublishableKey: !!publishableKey
				});
				throw new Error('Missing Clerk keys');
			}

			if (debug) {
				console.log('[svelte-clerk] Using keys:', {
					secretKey: secretKey ? `${secretKey.slice(0, 10)}...` : 'missing',
					publishableKey: publishableKey ? `${publishableKey.slice(0, 10)}...` : 'missing'
				});
			}

			console.log('[svelte-clerk] Calling authenticateRequest...');
			const requestState = await clerkClient.authenticateRequest(clerkWebRequest, {
				...options,
				secretKey,
				publishableKey,
				acceptsToken: TokenType.SessionToken
			});

			// Debug: Log request state details
			console.log('[svelte-clerk] Request state:', {
				status: requestState.status,
				reason: requestState.reason,
				message: requestState.message,
				headers: Object.fromEntries(requestState.headers.entries())
			});

			const locationHeader = requestState.headers.get(constants.Headers.Location);
			if (locationHeader) {
				if (debug) {
					console.log('[svelte-clerk] Handshake redirect triggered to:', locationHeader);
				}
				handleNetlifyCacheInDevInstance({
					locationHeader,
					publishableKey: requestState.publishableKey,
					requestStateHeaders: requestState.headers
				});
				return new Response(null, { status: 307, headers: requestState.headers });
			}

			if (requestState.status === AuthStatus.Handshake) {
				console.error('[svelte-clerk] Handshake status without redirect - this should not happen');
				throw new Error('[svelte-clerk] Handshake status without redirect');
			}

			// Debug: Check auth status before creating auth function
			if (requestState.status !== AuthStatus.SignedIn) {
				console.log('[svelte-clerk] User not signed in:', {
					status: requestState.status,
					reason: requestState.reason,
					message: requestState.message
				});
			}

			const auth = (options?: PendingSessionOptions) => {
				const authResult = requestState.toAuth(options);

				// Debug: Log auth result
				if (debug) {
					console.log('[svelte-clerk] Auth result:', {
						userId: authResult.userId,
						sessionId: authResult.sessionId,
						orgId: authResult.orgId,
						orgRole: authResult.orgRole,
						orgSlug: authResult.orgSlug
					});
				}

				return authResult;
			};

			decorateLocals(event, auth);

			if (debug) {
				const authData = auth();
				console.log('[svelte-clerk] Final auth data:', JSON.stringify({
					userId: authData.userId,
					sessionId: authData.sessionId,
				}, null, 2));
			}

			decorateHeaders(event, requestState.headers);

			console.log('[svelte-clerk] Authentication process completed successfully');
			return resolve(event);

		} catch (error) {
			console.error('[svelte-clerk] Error in authentication handler:', {
				error: error instanceof Error ? error.message : error,
				stack: error instanceof Error ? error.stack : undefined,
				url: event.url.toString(),
				method: event.request.method
			});

			// You might want to handle this error differently based on your needs
			throw error;
		}
	};
}

function decorateHeaders(event: RequestEvent, headers: Headers) {
	type CookieSerializerOptions = Parameters<typeof event.cookies.set>[2];

	const setCookie = headers.get('set-cookie');
	// We separate cookie setting logic because SvelteKit
	// does not allow setting cookies with setHeaders.
	if (setCookie) {
		const splitCookies = splitCookiesString(setCookie);
		const parsedCookies = parse(splitCookies);
		parsedCookies.forEach((parsedCookie) => {
			const { name, value, ...options } = parsedCookie;
			event.cookies.set(name, value, options as CookieSerializerOptions & { path: string });
		});
		headers.delete('set-cookie');
	}
	event.setHeaders(Object.fromEntries(headers));
}

function decorateLocals(
	event: RequestEvent,
	auth: (options?: PendingSessionOptions) => SessionAuthObject
) {
	event.locals.auth = auth;
	event.locals.currentUser = createCurrentUser(auth());
}
