import { type Component, type Snippet } from 'svelte';
type BaseActionItem = {
    label: string;
    labelIcon: Snippet | Component;
} & ({
    onclick: () => void;
    open?: never;
} | {
    open: string;
    onclick?: never;
});
type $$ComponentProps = {
    label: 'manageAccount' | 'signOut';
} | BaseActionItem;
declare const UserButtonAction: Component<$$ComponentProps, {}, "">;
type UserButtonAction = ReturnType<typeof UserButtonAction>;
export default UserButtonAction;
