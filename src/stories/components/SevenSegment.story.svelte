<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Display from "../../components/Seven Segment/SevenSegDisplay.svelte";

	export let Hst: Hst;

	let value = 12345.6789;
</script>

<Hst.Story title="Components/7 Segment" icon="ri:number-8">
	<div>
		<Display bind:value />
	</div>
	<svelte:fragment slot="controls">
		<Hst.Number title="Value" bind:value />
	</svelte:fragment>
</Hst.Story>

<style lang="scss">
	div {
		height: 4rem;
		padding: 1rem;
	}
</style>
