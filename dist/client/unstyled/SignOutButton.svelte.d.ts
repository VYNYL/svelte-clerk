import type { ButtonProps, PropsWithChildren } from '../../types';
import type { SignOutOptions } from '@clerk/types';
type $$ComponentProps = PropsWithChildren<SignOutOptions, {
    signOut(): void;
}> & ButtonProps;
declare const SignOutButton: import("svelte").Component<$$ComponentProps, {}, "">;
type SignOutButton = ReturnType<typeof SignOutButton>;
export default SignOutButton;
