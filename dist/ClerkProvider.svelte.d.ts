import ClerkProvider from './client/ClerkProvider.svelte';
import type { ClerkProviderProps } from './types.js';
type $$ComponentProps = Omit<ClerkProviderProps, 'publishableKey'> & {
    publishableKey?: string;
};
declare const ClerkProvider: import("svelte").Component<$$ComponentProps, {}, "">;
type ClerkProvider = ReturnType<typeof ClerkProvider>;
export default ClerkProvider;
