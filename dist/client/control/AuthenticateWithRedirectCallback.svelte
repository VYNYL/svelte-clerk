<script lang="ts">
	import { useClerkContext } from '../../context.js';
	import type { HandleOAuthCallbackParams } from '@clerk/types';

	const props: HandleOAuthCallbackParams = $props();

	const ctx = useClerkContext();

	$effect(() => {
		if (!ctx.clerk) {
			return;
		}

		void ctx.clerk.handleRedirectCallback(props);
	});
</script>
