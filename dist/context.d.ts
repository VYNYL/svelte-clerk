import type { SignedInSessionResource, ActClaim, ClientResource, OrganizationCustomPermissionKey, OrganizationCustomRoleKey, OrganizationResource, UserResource, SessionStatusClaim, JwtPayload } from '@clerk/types';
import type { HeadlessBrowserClerk, BrowserClerk } from './types.js';
export interface ClerkContext {
    clerk: HeadlessBrowserClerk | BrowserClerk | null;
    isLoaded: boolean;
    auth: {
        userId: string | null | undefined;
        sessionId: string | null | undefined;
        actor: ActClaim | null | undefined;
        sessionStatus: SessionStatusClaim | null | undefined;
        sessionClaims: JwtPayload | null | undefined;
        orgId: string | null | undefined;
        orgRole: OrganizationCustomRoleKey | null | undefined;
        orgSlug: string | null | undefined;
        orgPermissions: OrganizationCustomPermissionKey[] | null | undefined;
        factorVerificationAge: [number, number] | null;
    };
    client: ClientResource | null | undefined;
    session: SignedInSessionResource | null | undefined;
    user: UserResource | null | undefined;
    organization: OrganizationResource | null | undefined;
}
export declare const useClerkContext: () => ClerkContext;
export declare const setClerkContext: (context: ClerkContext) => void;
