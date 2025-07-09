const isMountProps = (props) => {
    return 'mount' in props;
};
const isOpenProps = (props) => {
    return 'open' in props;
};
/**
 * Used to orchestrate mounting of Clerk components in a host Svelte application.
 * Components are rendered into a specific DOM node using mount/unmount methods provided by the Clerk class.
 */
export const clerkHostRenderer = (node, props) => {
    if (isMountProps(props)) {
        props.mount(node, props.props);
    }
    else if (isOpenProps(props)) {
        props.open(props.props);
    }
    return {
        update: ({ props: updatedProps }) => {
            if (isMountProps(props)) {
                props.updateProps({ node, props: updatedProps });
            }
        },
        destroy: () => {
            if (isMountProps(props)) {
                props.unmount(node);
            }
            else if (isOpenProps(props)) {
                props.close();
            }
        }
    };
};
