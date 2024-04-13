<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Starfield from "../../components/Canvas/Starfield.svelte";
	import Button from "../../lib/Button.svelte";

	export let Hst: Hst;
	let key = false;

	let width = 500;
	let height = 500;
	let stars = 500;
	let speed = 0.3;

	function changed(...args: any[]) {
		key = !key;
	}

	$: changed(width, height, stars);
</script>

<Hst.Story title="Canvas/Starfield" icon="ion:sparkles">
	{#key key}
		<Starfield bind:width bind:height bind:stars bind:speed />
	{/key}
	<svelte:fragment slot="controls">
		<Button on:click={changed}>Reset</Button>
		<Hst.Number title="Width" bind:value={width} />
		<Hst.Number title="Height" bind:value={height} />
		<Hst.Number title="Stars" bind:value={stars} step={100} />
		<Hst.Number title="Speed" bind:value={speed} step={0.1} />
	</svelte:fragment>
</Hst.Story>
