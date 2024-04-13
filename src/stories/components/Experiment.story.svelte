<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Experiment from "../../components/Experiment.svelte";

	export let Hst: Hst;
</script>

<Hst.Story
	title="Components/.Experiment"
	icon="tabler:test-pipe"
	layout={{ type: "single", iframe: false }}
>
	<Experiment />
</Hst.Story>
