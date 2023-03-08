<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import ColorPicker from "../components/ColorPicker";

	export let Hst: Hst;

	let colorType: ColorType = "hex";
	let value = "#000000";
</script>

<Hst.Story title="Components/Color Picker" icon="ph:eyedropper-fill">
	<ColorPicker bind:colorType bind:value />
	<svelte:fragment slot="controls">
		<Hst.Select
			title="Color Type"
			options={["hex", "rgb", "hsl", "hwb"]}
			bind:value={colorType}
		/>
		<Hst.Text title="Value" bind:value />
	</svelte:fragment>
</Hst.Story>
