<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;

	let source = `
<svg viewBox="0 0 10 10" stroke-width="2" stroke="#000" stroke-linecap="round">
	<path d="M1 1L9 9M1 9L9 1" />
</svg>
	`;
</script>

<Hst.Story title="SVGs/Close" icon="lucide:image" {source}>
	<svg viewBox="0 0 10 10" stroke-width="2" stroke="#000" stroke-linecap="round">
		<path d="M1 1L9 9M1 9L9 1" />
	</svg>
</Hst.Story>
