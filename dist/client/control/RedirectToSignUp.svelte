<script lang="ts">
	import { useClerkContext } from '../../context.js';
	import type { SignUpRedirectOptions } from '@clerk/types';

	type RedirectToSignUpProps = SignUpRedirectOptions;
	const props: RedirectToSignUpProps = $props();

	const ctx = useClerkContext();

	$effect(() => {
		if (!ctx.clerk) {
			return;
		}

		void ctx.clerk.redirectToSignUp(props);
	});
</script>
