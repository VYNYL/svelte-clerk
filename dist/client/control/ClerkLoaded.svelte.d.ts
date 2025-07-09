import type { Snippet } from 'svelte';
import type { LoadedClerk } from '@clerk/types';
type $$ComponentProps = {
    children: Snippet<[LoadedClerk]>;
};
declare const ClerkLoaded: import("svelte").Component<$$ComponentProps, {}, "">;
type ClerkLoaded = ReturnType<typeof ClerkLoaded>;
export default ClerkLoaded;
