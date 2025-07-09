<script lang="ts">
	import { useClerkContext } from '../../context.js';
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();

	const ctx = useClerkContext();
</script>

{#if ctx.auth.userId}
	{@render children()}
{/if}
