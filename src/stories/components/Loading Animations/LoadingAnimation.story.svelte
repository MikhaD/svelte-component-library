<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import DualBalls from "../../../loading-animations/DualBalls.svelte";
	import Grow from "../../../loading-animations/Grow.svelte";
	import Oscillate from "../../../loading-animations/Oscillate.svelte";
	import Shrink from "../../../loading-animations/Shrink.svelte";
	import Slide from "../../../loading-animations/Slide.svelte";
	import SlideChase from "../../../loading-animations/SlideChase.svelte";
	import Spin from "../../../loading-animations/Spin.svelte";
	import SpinCircles from "../../../loading-animations/SpinCircles.svelte";
	import SpinGlass from "../../../loading-animations/SpinGlass.svelte";

	export let Hst: Hst;
</script>

<Hst.Story title="Loading Animations" icon="mingcute:loading-fill" layout={{ type: "grid" }}>
	<Hst.Variant title="Grow" icon="mingcute:loading-fill">
		<Grow />
	</Hst.Variant>
	<Hst.Variant title="Shrink" icon="mingcute:loading-fill">
		<Shrink />
	</Hst.Variant>
	<Hst.Variant title="Spin" icon="mingcute:loading-fill">
		<Spin />
	</Hst.Variant>
	<Hst.Variant title="Oscillate" icon="mingcute:loading-fill">
		<Oscillate />
	</Hst.Variant>
	<Hst.Variant title="Slide" icon="mingcute:loading-fill">
		<Slide />
	</Hst.Variant>
	<Hst.Variant title="Slide Chase" icon="mingcute:loading-fill">
		<SlideChase />
	</Hst.Variant>
	<Hst.Variant title="Spin Circles" icon="mingcute:loading-fill">
		<SpinCircles />
	</Hst.Variant>
	<Hst.Variant title="Spin Glass" icon="mingcute:loading-fill">
		<SpinGlass />
	</Hst.Variant>
	<Hst.Variant title="Spin Glass" icon="mingcute:loading-fill">
		<DualBalls />
	</Hst.Variant>
</Hst.Story>
