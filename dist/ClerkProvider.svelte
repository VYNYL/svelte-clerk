<script lang="ts">
	import ClerkProvider from './client/ClerkProvider.svelte';
	import { mergeWithPublicEnvVariables } from './utils/mergeWithPublicEnvVariables.js';
	import type { ClerkProviderProps } from './types.js';
	import { page } from '$app/state';
	import type { LoadClerkJsScriptOptions } from '@clerk/shared';

	const {
		children,
		...props
	}: Omit<ClerkProviderProps, 'publishableKey'> & {
		publishableKey?: string;
	} = $props();

	const mergedProps = $derived({
		...props,
		...mergeWithPublicEnvVariables(props)
	} as LoadClerkJsScriptOptions);
</script>

<ClerkProvider initialState={page?.data?.initialState} {...mergedProps}>
	{@render children()}
</ClerkProvider>
