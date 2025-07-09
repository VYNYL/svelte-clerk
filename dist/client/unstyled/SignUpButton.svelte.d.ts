import type { ButtonProps, PropsWithChildren } from '../../types';
import type { SignUpButtonProps } from '@clerk/types';
type $$ComponentProps = PropsWithChildren<SignUpButtonProps, {
    signUp(): void;
}> & ButtonProps;
declare const SignUpButton: import("svelte").Component<$$ComponentProps, {}, "">;
type SignUpButton = ReturnType<typeof SignUpButton>;
export default SignUpButton;
