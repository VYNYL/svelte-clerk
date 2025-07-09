import type { ProtectProps } from '@clerk/types';
import type { Snippet } from 'svelte';
type $$ComponentProps = ProtectProps & {
    children: Snippet;
    fallback?: Snippet;
};
declare const Protect: import("svelte").Component<$$ComponentProps, {}, "">;
type Protect = ReturnType<typeof Protect>;
export default Protect;
