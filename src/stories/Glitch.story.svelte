<script lang="ts">
	import Test from "../components/Glitch.svelte";
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;

	let text = "Hello World";
	let iteration_factor = 1;
	let flash_duration = 30;
</script>

<Hst.Story title="components/Glitch Text" icon="bx:text">
	<Test {text} {iteration_factor} {flash_duration} />
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={text} title="Text" />
		<Hst.Number bind:value={iteration_factor} title="Iteration Factor" />
		<Hst.Number bind:value={flash_duration} title="Flash Duration" />
	</svelte:fragment>
</Hst.Story>
