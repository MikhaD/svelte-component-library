<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Experiment from "../../components/Experiment.svelte";

	export let Hst: Hst;

	let colorType: ColorType = "hex";
	let value = "#000000";
</script>

<Hst.Story
	title="Components/.Experiment"
	icon="tabler:test-pipe"
	layout={{ type: "single", iframe: false }}
>
	<Experiment />
</Hst.Story>
