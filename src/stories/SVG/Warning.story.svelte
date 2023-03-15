<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;

	let source = `
<svg viewBox="0 0 10 10" stroke-width="2" stroke="#000" stroke-linecap="round">
	<path d="M1 1L9 9M1 9L9 1" />
</svg>
	`;
</script>

<Hst.Story title="SVGs/Warning" icon="lucide:image" {source}>
	<svg viewBox="0 0 20 20" fill="none" stroke="#000">
		<path d="M10 1L19 19L1 19z" stroke-width="2" stroke-linejoin="round" />
		<path d="M10 8v5" stroke-width="2" stroke-linecap="round" />
		<circle cx="10" cy="16" r="1" fill="#000" stroke="none" />
	</svg>
</Hst.Story>
