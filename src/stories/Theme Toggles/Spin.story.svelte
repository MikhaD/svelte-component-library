<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import ThemeToggle from "../../components/Theme Toggles/Spin.svelte";
	export let Hst: Hst;

	let light = false;
	let size = 50;
</script>

<Hst.Story title="Components/Theme Toggles/Spin" icon="material-symbols:light-mode">
	<div style:--size="{size}vw">
		<ThemeToggle bind:light />
	</div>

	<svelte:fragment slot="controls">
		<Hst.Checkbox title="Light Mode" bind:value={light} />
		<Hst.Slider title="Size %" bind:value={size} min={1} max={100} />
	</svelte:fragment>
</Hst.Story>

<style>
	div {
		width: var(--size);
	}
</style>
