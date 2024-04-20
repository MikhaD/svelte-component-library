<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";

	import * as Menu from "../../components/Burger Menus";
	import { DIRECTION } from "../../components/Burger Menus/Cross.svelte";

	export let Hst: Hst;

	let circle_open = false;
	let circle_duration = 0.5;

	let cross_open = false;
	let cross_duration = 0.5;
	let str_cross_direction = String(DIRECTION.LEFT);
	$: cross_direction = Number(str_cross_direction);

	let foldIn_open = false;
	let foldIn_duration = 0.5;

	let merge_open = false;
	let merge_duration = 0.5;

	let mergeCross_open = false;
	let mergeCross_duration = 0.5;
</script>

<Hst.Story title="Components/Burger Menus" icon="material-symbols:menu" layout={{ type: "grid" }}>
	<Hst.Variant title="Circle" icon="material-symbols:menu">
		<Menu.Circle bind:open={circle_open} bind:duration={circle_duration} />
		<svelte:fragment slot="controls">
			<Hst.Slider title="Duration" min={0} max={2} step={0.1} bind:value={circle_duration} />
			<Hst.Checkbox title="Open" bind:value={circle_open} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Cross" icon="material-symbols:menu">
		<Menu.Cross
			bind:open={cross_open}
			bind:duration={cross_duration}
			bind:direction={cross_direction}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Duration" min={0} max={2} step={0.1} bind:value={cross_duration} />
			<Hst.Checkbox title="Open" bind:value={cross_open} />
			<Hst.ButtonGroup
				title="Direction"
				options={[
					{ label: "Left", value: String(DIRECTION.LEFT) },
					{ label: "Right", value: String(DIRECTION.RIGHT) },
					{ label: "Up", value: String(DIRECTION.UP) },
					{ label: "Down", value: String(DIRECTION.DOWN) },
				]}
				bind:value={str_cross_direction}
			/>
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Fold In" icon="material-symbols:menu">
		<Menu.FoldIn bind:open={foldIn_open} bind:duration={foldIn_duration} />
		<svelte:fragment slot="controls">
			<Hst.Slider title="Duration" min={0} max={2} step={0.1} bind:value={foldIn_duration} />
			<Hst.Checkbox title="Open" bind:value={foldIn_open} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Merge" icon="material-symbols:menu">
		<Menu.Merge bind:open={merge_open} bind:duration={merge_duration} />
		<svelte:fragment slot="controls">
			<Hst.Slider title="Duration" min={0} max={2} step={0.1} bind:value={merge_duration} />
			<Hst.Checkbox title="Open" bind:value={merge_open} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Merge Cross" icon="material-symbols:menu">
		<Menu.MergeCross bind:open={mergeCross_open} bind:duration={mergeCross_duration} />
		<svelte:fragment slot="controls">
			<Hst.Slider
				title="Duration"
				min={0}
				max={2}
				step={0.1}
				bind:value={mergeCross_duration}
			/>
			<Hst.Checkbox title="Open" bind:value={mergeCross_open} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
