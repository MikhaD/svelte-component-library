<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import BrightnessIcon from "../../components/BrightnessIcon.svelte";

	export let Hst: Hst;

	let value = 1;
	let rays = 8;
</script>

<Hst.Story
	title="Components/Brightness Icon"
	icon="zondicons:brightness-up"
	layout={{ type: "single", iframe: false }}
>
	<BrightnessIcon bind:value bind:rays />
	<svelte:fragment slot="controls">
		<Hst.Slider title="Rays" min={1} max={16} bind:value={rays} />
		<Hst.Slider title="Brightness" min={0} max={100} bind:value />
	</svelte:fragment>
</Hst.Story>
