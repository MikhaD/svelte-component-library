<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
    import NumberInput from "../../components/NumberInput.svelte";

	export let Hst: Hst;

	let value = 0;
	let min = 0;
	let max = 100;
	let increment = 1;
</script>

<Hst.Story
	title="Components/NumberInput"
	icon="iconoir:input-field"
	layout={{ type: "grid" }}
>
	<NumberInput bind:value {min} {max} {increment}></NumberInput>
	<svelte:fragment slot="controls">
		<Hst.Number title="Min" bind:value={min} />
		<Hst.Number title="Max" bind:value={max} />
		<Hst.Number title="Increment" bind:value={increment} />
	</svelte:fragment>
</Hst.Story>