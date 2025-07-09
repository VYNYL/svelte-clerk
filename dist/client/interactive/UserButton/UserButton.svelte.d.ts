import type { UserButtonProps } from '@clerk/types';
import { type Snippet } from 'svelte';
type $$ComponentProps = UserButtonProps & {
    children?: Snippet;
};
declare const UserButton: import("svelte").Component<$$ComponentProps, {}, "">;
type UserButton = ReturnType<typeof UserButton>;
export default UserButton;
