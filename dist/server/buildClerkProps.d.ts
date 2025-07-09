import type { AuthObject } from '@clerk/backend';
import type { InitialState } from '@clerk/types';
/**
 * To enable Clerk SSR support, include this object to the props
 * returned from your layout's `load` function. This will make the auth state available to
 * the Clerk components and hooks during SSR, the hydration phase and CSR.
 * @example
 * import { buildClerkProps } from 'svelte-clerk/server';
 *
 * export const load = ({ locals }) => {
 *
 *   return {
 *     ...buildClerkProps(locals.auth),
 *   };
 * };
 */
export declare function buildClerkProps(auth: AuthObject): {
    initialState: InitialState;
};
