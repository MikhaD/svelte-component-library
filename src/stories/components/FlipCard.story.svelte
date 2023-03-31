<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import FlipCard from "../../components/FlipCard.svelte";

	export let Hst: Hst;

	let flipped = false;
	let axis: "x" | "y" = "x";
</script>

<Hst.Story
	title="Components/Flip Card"
	icon="mdi:card-text-outline"
	layout={{ type: "single", iframe: false }}
>
	<div>
		<FlipCard bind:flipped bind:axis>
			<svelte:fragment slot="front">
				<h1>Front Side</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rerum modi
					reiciendis debitis est dignissimos aspernatur dicta qui officia? Sequi!
				</p>
			</svelte:fragment>
			<svelte:fragment slot="back">
				<h1>Back Side</h1>
				<p>Some more text that is different to the front text.</p>
			</svelte:fragment>
		</FlipCard>
	</div>
	<svelte:fragment slot="controls">
		<Hst.Checkbox title="Flipped" bind:value={flipped} />
		<Hst.ButtonGroup
			title="Flip Axis"
			options={[
				{ label: "X", value: "x" },
				{ label: "Y", value: "y" },
			]}
			bind:value={axis}
		/>
	</svelte:fragment>
</Hst.Story>

<style lang="scss">
	div {
		padding: 20px;
		:global(section) {
			background-color: rgb(var(--_histoire-color-gray-800, 30 30 30));
			color: currentcolor;
			padding: 1rem;
			border-radius: 5px;
		}
	}
</style>
