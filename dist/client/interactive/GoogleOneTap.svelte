<script lang="ts">
	import { clerkHostRenderer } from '../../action.js';
	import type { GoogleOneTapProps } from '@clerk/types';
	import ClerkLoaded from '../control/ClerkLoaded.svelte';

	const props: GoogleOneTapProps = $props();
</script>

<ClerkLoaded>
	{#snippet children(clerk)}
		<div
			use:clerkHostRenderer={{
				open: clerk.openGoogleOneTap,
				close: clerk.closeGoogleOneTap,
				props: $state.snapshot(props)
			}}
		></div>
	{/snippet}
</ClerkLoaded>
