import type { Action } from 'svelte/action';
type AnyObject = any;
interface MountProps {
    mount: (node: HTMLDivElement, props: AnyObject) => void;
    unmount: (node: HTMLDivElement) => void;
    updateProps: (props: AnyObject) => void;
    props?: AnyObject;
}
interface OpenProps {
    open: (props: AnyObject) => void;
    close: () => void;
    props?: AnyObject;
}
/**
 * Used to orchestrate mounting of Clerk components in a host Svelte application.
 * Components are rendered into a specific DOM node using mount/unmount methods provided by the Clerk class.
 */
export declare const clerkHostRenderer: Action<HTMLDivElement, MountProps | OpenProps>;
export {};
