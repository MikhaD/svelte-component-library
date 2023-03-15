<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Morph from "../../components/Pause/Morph.svelte";

	export let Hst: Hst;

	let paused = false;
	let size = 50;
</script>

<Hst.Story title="Components/Pause/Merge" icon="material-symbols:pause-outline">
	<div style:--size="{size}vw">
		<Morph bind:paused />
	</div>

	<svelte:fragment slot="controls">
		<Hst.Checkbox title="Paused" bind:value={paused} />
		<Hst.Slider title="Size %" bind:value={size} min={1} max={100} />
	</svelte:fragment>
</Hst.Story>

<style>
	div {
		width: var(--size);
	}
</style>
