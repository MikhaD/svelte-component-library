<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import ColorInput from "../../components/ColorInput.svelte";

	export let Hst: Hst;

	let color = "#000";
	let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentcolor">
	<path d="M10 1L19 19L1 19z" stroke-width="2" stroke-linejoin="round" />
	<path d="M10 8v5" stroke-width="2" stroke-linecap="round" />
	<circle cx="10" cy="16" r="1" fill="currentcolor" stroke="none" />
</svg>
	`;
</script>

<Hst.Story title="SVGs/Warning" icon="material-symbols:warning-outline-rounded" {source}>
	<svg viewBox="0 0 20 20" fill="none" stroke={color}>
		<path d="M10 1L19 19L1 19z" stroke-width="2" stroke-linejoin="round" />
		<path d="M10 8v5" stroke-width="2" stroke-linecap="round" />
		<circle cx="10" cy="16" r="1" fill={color} stroke="none" />
	</svg>
	<svelte:fragment slot="controls">
		<ColorInput title="Color" bind:value={color} />
	</svelte:fragment>
</Hst.Story>
