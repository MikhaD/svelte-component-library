<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Spin from "../../components/Theme Toggles/Spin.svelte";
	import Rise from "../../components/Theme Toggles/Rise.svelte";
	export let Hst: Hst;

	let light = false;
</script>

<Hst.Story
	title="Components/Theme Toggles"
	icon="material-symbols:light-mode"
	layout={{ type: "grid" }}
>
	<Hst.Variant title="Spin" icon="material-symbols:light-mode">
		<Spin bind:light />
	</Hst.Variant>
	<Hst.Variant title="Rise" icon="material-symbols:light-mode">
		<Rise bind:light />
	</Hst.Variant>

	<svelte:fragment slot="controls">
		<Hst.Checkbox title="Light Mode" bind:value={light} />
	</svelte:fragment>
</Hst.Story>
