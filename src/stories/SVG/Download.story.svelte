<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import ColorInput from "../../components/ColorInput.svelte";

	export let Hst: Hst;

	let color = "#000";
</script>

<Hst.Story title="SVGs/Download" icon="tabler:cloud-download">
	<svg viewBox="0 0 100 100" fill="none">
		<path
			d="M71 73h9a19 19 0 10-11-36a25.7 25.7 0 10-50 11h-2.5a1 1 0 100 25h8.5"
			stroke={color}
			stroke-width="8"
		/>
		<path d="M48 89l-20-20h13v-27h14v27h13z" fill={color} />
	</svg>
	<svelte:fragment slot="controls">
		<ColorInput title="Color" bind:value={color} />
	</svelte:fragment>
</Hst.Story>
