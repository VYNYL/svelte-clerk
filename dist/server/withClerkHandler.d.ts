import { type Handle } from '@sveltejs/kit';
import { type AuthenticateRequestOptions } from '@clerk/backend/internal';
export type ClerkSvelteKitMiddlewareOptions = AuthenticateRequestOptions & {
    debug?: boolean;
};
export declare function withClerkHandler(middlewareOptions?: ClerkSvelteKitMiddlewareOptions): Handle;
