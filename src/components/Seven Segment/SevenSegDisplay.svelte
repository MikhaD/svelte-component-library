<script context="module" lang="ts">
	const key: { [key: string]: number[] } = {
		"0": [0, 0, 0, 0, 0, 0, 1],
		"1": [1, 0, 0, 1, 1, 1, 1],
		"2": [0, 0, 1, 0, 0, 1, 0],
		"3": [0, 0, 0, 0, 1, 1, 0],
		"4": [1, 0, 0, 1, 1, 0, 0],
		"5": [0, 1, 0, 0, 1, 0, 0],
		"6": [0, 1, 0, 0, 0, 0, 0],
		"7": [0, 0, 0, 1, 1, 1, 1],
		"8": [0, 0, 0, 0, 0, 0, 0],
		"9": [0, 0, 0, 0, 1, 0, 0],
	};
</script>

<script lang="ts">
	import Seg from "./Seg.svelte";

	export let value: number;
	let str = "";
	let point = -1;

	$: {
		point = String(value).indexOf(".");
		str = String(value).replace(".", "");
	}
</script>

{#each str as v, i}
	<!-- @ts-ignore -->
	<Seg value={key[v]} point={i === point - 1} />
{/each}
