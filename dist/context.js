import { getContext, setContext } from 'svelte';
const _contextKey = '$$_clerk';
export const useClerkContext = () => {
    const client = getContext(_contextKey);
    if (!client) {
        throw new Error('No Clerk data was found in Svelte context. Did you forget to wrap your component with ClerkProvider?');
    }
    return client;
};
export const setClerkContext = (context) => {
    setContext(_contextKey, context);
};
