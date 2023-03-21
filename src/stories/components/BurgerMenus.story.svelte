<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Circle from "../../components/Burger Menus/Circle.svelte";
	import Cross from "../../components/Burger Menus/Cross.svelte";
	import FoldIn from "../../components/Burger Menus/FoldIn.svelte";
	import Merge from "../../components/Burger Menus/Merge.svelte";

	export let Hst: Hst;

	let open = false;
</script>

<Hst.Story title="Components/Burger Menus" icon="material-symbols:menu" layout={{ type: "grid" }}>
	<Hst.Variant title="Circle" icon="material-symbols:menu">
		<Circle bind:open />
	</Hst.Variant>
	<Hst.Variant title="Cross" icon="material-symbols:menu">
		<Cross bind:open />
	</Hst.Variant>
	<Hst.Variant title="Fold In" icon="material-symbols:menu">
		<FoldIn bind:open />
	</Hst.Variant>
	<Hst.Variant title="Merge" icon="material-symbols:menu">
		<Merge bind:open />
	</Hst.Variant>

	<svelte:fragment slot="controls">
		<Hst.Checkbox title="Open" bind:value={open} />
	</svelte:fragment>
</Hst.Story>
