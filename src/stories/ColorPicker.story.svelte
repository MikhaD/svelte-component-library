<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import ColorPicker from "../lib/ColorPicker.svelte";

	export let Hst: Hst;

	let h = 0;
	let w = 0;
	let b = 0;
	let max_w = 100;
	let alpha = 100;
</script>

<Hst.Story title="Components/Color Picker" icon="ph:eyedropper-fill">
	<ColorPicker bind:h bind:b bind:max_w bind:alpha />
	<svelte:fragment slot="controls">
		<Hst.Slider bind:value={h} title="Hue" min={0} max={360} />
		<!-- <Hst.Slider bind:value={w} title="Whiteness" min={0} max={100} /> -->
		<Hst.Slider bind:value={max_w} title="Max Whiteness" min={0} max={100} />
		<Hst.Slider bind:value={b} title="Blackness" min={0} max={100} />
		<Hst.Slider bind:value={alpha} title="Alpha" min={0} max={100} />
	</svelte:fragment>
</Hst.Story>
