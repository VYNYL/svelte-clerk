import type { InitialState } from '@clerk/types';
import type { ClerkProviderProps } from '../types.js';
type $$ComponentProps = ClerkProviderProps & {
    initialState?: InitialState;
};
declare const ClerkProvider: import("svelte").Component<$$ComponentProps, {}, "">;
type ClerkProvider = ReturnType<typeof ClerkProvider>;
export default ClerkProvider;
