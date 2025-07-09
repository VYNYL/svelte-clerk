import type { User } from '@clerk/backend';
import type { SignedInAuthObject, SignedOutAuthObject } from '@clerk/backend/internal';
export declare function createCurrentUser(auth: SignedInAuthObject | SignedOutAuthObject): () => Promise<User | null>;
