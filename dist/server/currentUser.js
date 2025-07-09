import { clerkClient } from './clerkClient.js';
import { deprecated } from '@clerk/shared/deprecated';
export function createCurrentUser(auth) {
    return async () => {
        deprecated('currentUser()', 'Use `clerkClient.users.getUser(id)` instead.');
        if (!auth.userId) {
            return null;
        }
        const user = await clerkClient.users.getUser(auth.userId);
        return user;
    };
}
