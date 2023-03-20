<script lang="ts">
	import Glitch from "../../../components/Glitch.svelte";
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;

	let text = "Hello World";
	let iteration_factor = 1;
	let flash_duration = 30;
</script>

<Hst.Story title="Components/Glitch Text" icon="bx:text">
	<Glitch {text} {iteration_factor} {flash_duration} />
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={text} title="Text" />
		<Hst.Slider bind:value={iteration_factor} title="Iteration Factor" min={1} max={10} />
		<Hst.Slider bind:value={flash_duration} title="Flash Duration" min={1} max={100} />
	</svelte:fragment>
</Hst.Story>
