import { env } from '$env/dynamic/public';
import { isTruthy } from '@clerk/shared/underscore';

export function getEnvVariable(
	name: `PUBLIC_${string}`,
	defaultValue?: string
): string | undefined {
	return name in env ? env[name] : defaultValue;
}

export function getStaticPublicEnvVariables() {
	return {
		publishableKey: getEnvVariable('PUBLIC_CLERK_PUBLISHABLE_KEY'),
		domain: getEnvVariable('PUBLIC_CLERK_DOMAIN'),
		isSatellite: getEnvVariable('PUBLIC_CLERK_IS_SATELLITE'),
		proxyUrl: getEnvVariable('PUBLIC_CLERK_PROXY_URL'),
		signInUrl: getEnvVariable('PUBLIC_CLERK_SIGN_IN_URL'),
		signUpUrl: getEnvVariable('PUBLIC_CLERK_SIGN_UP_URL'),
		clerkJSUrl: getEnvVariable('PUBLIC_CLERK_JS_URL'),
		clerkJSVersion: getEnvVariable('PUBLIC_CLERK_JS_VERSION'),
		signInForceRedirectUrl: getEnvVariable('PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL'),
		signUpForceRedirectUrl: getEnvVariable('PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL'),
		signInFallbackRedirectUrl: getEnvVariable('PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL'),
		signUpFallbackRedirectUrl: getEnvVariable('PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL'),
		telemetryDisabled: isTruthy(getEnvVariable('PUBLIC_CLERK_TELEMETRY_DISABLED')),
		telemetryDebug: isTruthy(getEnvVariable('PUBLIC_CLERK_TELEMETRY_DEBUG'))
	};
}
