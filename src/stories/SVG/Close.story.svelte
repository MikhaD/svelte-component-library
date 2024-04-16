<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import ColorInput from "../../components/ColorInput.svelte";

	export let Hst: Hst;

	let color = "#000";
</script>

<Hst.Story title="SVGs/Close" icon="ic:round-close">
	<svg viewBox="0 0 10 10" stroke-width="2" stroke={color} stroke-linecap="round">
		<path d="M1 1L9 9M1 9L9 1" />
	</svg>
	<svelte:fragment slot="controls">
		<ColorInput title="Color" bind:value={color} />
	</svelte:fragment>
</Hst.Story>
