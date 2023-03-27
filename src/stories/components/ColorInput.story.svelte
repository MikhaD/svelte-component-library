<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import ColorInput from "../../components/ColorInput.svelte";

	export let Hst: Hst;

	let value = "#22D3EE";
	let title = "Color";
</script>

<Hst.Story title="Components/Color Input" icon="typcn:input-checked">
	<div>
		<ColorInput bind:value bind:title />
	</div>
	<svelte:fragment slot="controls">
		<Hst.Text title="Value" bind:value />
		<Hst.Text title="Title" bind:value={title} />
	</svelte:fragment>
</Hst.Story>

<style>
	div {
		height: 100vh;
	}
</style>
