<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;

	let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="#000">
	<path d="M10 1L19 19L1 19z" stroke-width="2" stroke-linejoin="round" />
	<path d="M10 8v5" stroke-width="2" stroke-linecap="round" />
	<circle cx="10" cy="16" r="1" fill="#000" stroke="none" />
</svg>
	`;
</script>

<Hst.Story title="SVGs/Warning" icon="material-symbols:warning-outline-rounded" {source}>
	<svg viewBox="0 0 20 20" fill="none" stroke="#000">
		<path d="M10 1L19 19L1 19z" stroke-width="2" stroke-linejoin="round" />
		<path d="M10 8v5" stroke-width="2" stroke-linecap="round" />
		<circle cx="10" cy="16" r="1" fill="#000" stroke="none" />
	</svg>
</Hst.Story>
