import type { ButtonProps, PropsWithChildren } from '../../types';
import type { SignInButtonProps } from '@clerk/types';
type $$ComponentProps = PropsWithChildren<SignInButtonProps, {
    signIn(): void;
}> & ButtonProps;
declare const SignInButton: import("svelte").Component<$$ComponentProps, {}, "">;
type SignInButton = ReturnType<typeof SignInButton>;
export default SignInButton;
