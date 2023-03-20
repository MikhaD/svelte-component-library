<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import ColorInput from "../../components/ColorInput.svelte";

	export let Hst: Hst;

	let value = "#000000";
</script>

<Hst.Story title="Components/Color Input" icon="typcn:input-checked">
	<div>
		<ColorInput bind:value />
	</div>
	<svelte:fragment slot="controls">
		<Hst.Text title="Value" bind:value />
	</svelte:fragment>
</Hst.Story>

<style>
	div {
		height: 90vh;
	}
</style>
