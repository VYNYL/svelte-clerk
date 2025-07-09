<script lang="ts">
	import { clerkHostRenderer } from '../../action.js';
	import type { WaitlistProps } from '@clerk/types';
	import ClerkLoaded from '../control/ClerkLoaded.svelte';

	const props: WaitlistProps = $props();
</script>

<ClerkLoaded>
	{#snippet children(clerk)}
		<div
			use:clerkHostRenderer={{
				mount: clerk.mountWaitlist,
				unmount: clerk.unmountWaitlist,
				updateProps: (clerk as any).__unstable__updateProps,
				props: $state.snapshot(props)
			}}
		></div>
	{/snippet}
</ClerkLoaded>
