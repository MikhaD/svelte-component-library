<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Morph from "../../components/Pause/Morph.svelte";
	import Rotate from "../../components/Pause/Rotate.svelte";

	export let Hst: Hst;

	let paused = false;
</script>

<Hst.Story title="Components/Pause" icon="material-symbols:pause-outline" layout={{ type: "grid" }}>
	<Hst.Variant title="Morph" icon="material-symbols:pause-outline">
		<Morph bind:paused />
	</Hst.Variant>
	<Hst.Variant title="Rotate" icon="material-symbols:pause-outline">
		<Rotate bind:paused />
	</Hst.Variant>
	<Hst.Variant title="Rotate Circle" icon="material-symbols:pause-circle">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div role="button" tabindex="0" class:paused on:click|self={() => (paused = !paused)}>
			<Rotate bind:paused />
		</div>
	</Hst.Variant>

	<svelte:fragment slot="controls">
		<Hst.Checkbox title="Paused" bind:value={paused} />
	</svelte:fragment>
</Hst.Story>

<style lang="scss">
	div {
		background-color: #b1180d;
		padding: 2.5rem;
		border-radius: 50%;
		transition: background-color 0.4s;
		cursor: pointer;
	}
	.paused {
		background-color: #178a00;
	}
</style>
