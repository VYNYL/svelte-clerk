declare const UserButton: import("svelte").Component<import("@clerk/types").UserButtonProps & {
    children?: import("svelte").Snippet;
}, {}, ""> & {
    MenuItems: import("svelte").Component<{
        children: import("svelte").Snippet;
    }, {}, "">;
    Action: import("svelte").Component<({
        label: string;
        labelIcon: import("svelte").Snippet | import("svelte").Component;
    } & ({
        onclick: () => void;
        open?: never;
    } | {
        open: string;
        onclick?: never;
    })) | {
        label: "manageAccount" | "signOut";
    }, {}, "">;
    Link: import("svelte").Component<{
        label: string;
        href: string;
        labelIcon: import("svelte").Component | import("svelte").Snippet;
    }, {}, "">;
    UserProfilePage: import("svelte").Component<{
        children: import("svelte").Snippet;
        labelIcon: import("svelte").Snippet | import("svelte").Component;
        label: string;
        url: string;
    }, {}, "">;
};
export default UserButton;
