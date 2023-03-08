<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import BurgerMenu from "../../components/Burger Menus/FoldIn.svelte";

	export let Hst: Hst;

	let open = false;
	let size = 50;
</script>

<Hst.Story title="Components/Burger Menus/Fold in" icon="material-symbols:menu">
	<div style:--size="{size}vw">
		<BurgerMenu bind:open />
	</div>

	<svelte:fragment slot="controls">
		<Hst.Checkbox title="Open" bind:value={open} />
		<Hst.Slider title="Size %" bind:value={size} min={1} max={100} />
	</svelte:fragment>
</Hst.Story>

<style>
	div {
		width: var(--size);
	}
</style>
