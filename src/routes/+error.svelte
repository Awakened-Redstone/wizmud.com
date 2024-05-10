<script lang="ts">
	import { page } from '$app/stores';
	import type { PageError } from '$lib/shared'
	import errors from '$lib/error.yaml?raw'
	import yaml from 'js-yaml';

	const errorDoc = yaml.load(errors) as PageError

	function error() {
		return errorDoc[$page.status] ?? {
			art: $page.status,
			message: $page.error?.message ?? "Unknown error"
		}
	}
</script>

<main class="my-auto h-full text-center flex justify-center flex-col">
	<pre class="w-fit mx-auto text-left">{@html error().art}</pre>
	<p class="pt-6 whitespace-pre">{error().message}</p>
</main>
