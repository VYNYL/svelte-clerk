import { makeAuthObjectSerializable, stripPrivateDataFromObject } from '@clerk/backend/internal';
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
export function buildClerkProps(auth) {
    const initialState = makeAuthObjectSerializable(stripPrivateDataFromObject(auth));
    return {
        initialState: JSON.parse(JSON.stringify(initialState))
    };
}
