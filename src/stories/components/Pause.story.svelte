<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Morph from "../../components/Pause/Morph.svelte";

	export let Hst: Hst;

	let paused = false;
</script>

<Hst.Story title="Components/Pause" icon="material-symbols:pause-outline" layout={{ type: "grid" }}>
	<Hst.Variant title="Circle" icon="material-symbols:pause-outline">
		<Morph bind:paused />
	</Hst.Variant>

	<svelte:fragment slot="controls">
		<Hst.Checkbox title="Paused" bind:value={paused} />
	</svelte:fragment>
</Hst.Story>
