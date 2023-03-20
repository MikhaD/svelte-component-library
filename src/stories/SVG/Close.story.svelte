<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;

	let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke-width="2" stroke="#000" stroke-linecap="round">
	<path d="M1 1L9 9M1 9L9 1" />
</svg>
	`;
</script>

<Hst.Story title="SVGs/Close" icon="ic:round-close" {source}>
	<svg viewBox="0 0 10 10" stroke-width="2" stroke="#000" stroke-linecap="round">
		<path d="M1 1L9 9M1 9L9 1" />
	</svg>
</Hst.Story>
