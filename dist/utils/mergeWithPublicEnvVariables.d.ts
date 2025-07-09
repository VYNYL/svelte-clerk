import type { LoadClerkJsScriptOptions } from '@clerk/shared';
/**
 * Merges the public environment variables with the Clerk initialization options.
 *
 * This function takes a Clerk initialization options object and returns a new object
 * with the public environment variables merged into it. If a property is already
 * defined in the Clerk initialization options, it will not be overridden.
 */
export declare function mergeWithPublicEnvVariables(clerkInitOptions: Omit<LoadClerkJsScriptOptions, 'publishableKey'> & {
    publishableKey?: string;
}): Partial<LoadClerkJsScriptOptions>;
