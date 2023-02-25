<script lang="ts">
	import Test from "../lib/Glitch.svelte";
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;

	let text = "Hello World";
	let iteration_factor = 1;
</script>

<Hst.Story title="Glitch Text" icon="bx:text">
	<Test {text} {iteration_factor} />
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={text} title="Text" />
		<Hst.Number bind:value={iteration_factor} title="Iteration Factor" />
	</svelte:fragment>
</Hst.Story>
