<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;

	let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill-rule="evenodd">
	<path d="M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z" />
</svg>
	`;
</script>

<Hst.Story title="SVGs/Command" icon="lucide:image" {source}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill-rule="evenodd">
		<path
			d="M8 6v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zM6 6v-2a2 2 0 1 0-2 2zm7 0h2a2 2 0 1 0-2-2zm0 7v2a2 2 0 1 0 2-2zm-7 0h-2a2 2 0 1 0 2 2zm2-5h3v3h-3z"
		/>
	</svg>
</Hst.Story>
