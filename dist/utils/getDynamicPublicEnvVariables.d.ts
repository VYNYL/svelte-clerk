export declare function getEnvVariable(name: `PUBLIC_${string}`, defaultValue?: string): string | undefined;
export declare function getDynamicPublicEnvVariables(): {
    publishableKey: string | undefined;
    domain: string | undefined;
    isSatellite: string | undefined;
    proxyUrl: string | undefined;
    signInUrl: string | undefined;
    signUpUrl: string | undefined;
    clerkJSUrl: string | undefined;
    clerkJSVersion: string | undefined;
    signInForceRedirectUrl: string | undefined;
    signUpForceRedirectUrl: string | undefined;
    signInFallbackRedirectUrl: string | undefined;
    signUpFallbackRedirectUrl: string | undefined;
    telemetryDisabled: boolean;
    telemetryDebug: boolean;
};
