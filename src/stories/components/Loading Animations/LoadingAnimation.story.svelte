<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Range from "../../../lib/Range.svelte";
	import DNA from "../../../loading-animations/DNA.svelte";
	import DualBalls from "../../../loading-animations/DualBalls.svelte";
	import Grow from "../../../loading-animations/Grow.svelte";
	import Heart from "../../../loading-animations/Heart.svelte";
	import Hourglass from "../../../loading-animations/Hourglass.svelte";
	import Oscillate from "../../../loading-animations/Oscillate.svelte";
	import Pie from "../../../loading-animations/Pie.svelte";
	import Shrink from "../../../loading-animations/Shrink.svelte";
	import Slide from "../../../loading-animations/Slide.svelte";
	import Spin from "../../../loading-animations/Spin.svelte";
	import SpinCircles from "../../../loading-animations/SpinCircles.svelte";
	import SpinGlass from "../../../loading-animations/SpinGlass.svelte";

	export let Hst: Hst;

	let grow_speed = 2;
	let grow_reverse = false;

	let shrink_speed = 2;
	let shrink_reverse = false;

	let spin_speed = 3;
	let spin_scale = 0.25;
	let spin_border_width = 0;

	let oscillate_speed = 2;
	let oscillate_count = 5;
	let oscillate_width = 50;
	let oscillate_bar_width = 6;

	let slide_speed = 4;
	let slide_reverse = false;

	let spinCircles_speed = 1;

	let spinGlass_speed = 1;
	let spinGlass_rotations = 3;
	let spinGlass_reverse = false;

	let dualBalls_speed = 1;
	let dualBalls_reverse = false;

	let dna_count = 10;
	let dna_r = 4;
	let dna_r2 = 2;
	let dna_height = 36;
	let dna_speed = 1;

	let pie_count = 8;
	let pie_speed = 1;
	let pie_scale = 0.5;

	let heart_speed = 1.5;

	let hourglass_speed = 1;
</script>

<Hst.Story title="Loading Animations" icon="mingcute:loading-fill" layout={{ type: "grid" }}>
	<Hst.Variant title="Hourglass" icon="ic:round-hourglass-bottom">
		<Hourglass bind:speed={hourglass_speed} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={hourglass_speed} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="Heart" icon="material-symbols:favorite">
		<Heart bind:speed={heart_speed} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={heart_speed} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="Pie" icon="game-icons:swirled-shell">
		<Pie bind:count={pie_count} bind:speed={pie_speed} bind:scale={pie_scale} />
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={2} max={50} bind:value={pie_count} />
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={pie_speed} />
			<Range title="Scale" min={0.1} max={0.9} step={0.1} bind:value={pie_scale} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="DNA" icon="tabler:dna">
		<DNA
			bind:count={dna_count}
			bind:r={dna_r}
			bind:r2={dna_r2}
			bind:height={dna_height}
			bind:speed={dna_speed}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={1} max={50} bind:value={dna_count} />
			<Hst.Slider title="Height" min={0} max={100} bind:value={dna_height} />
			<Hst.Slider title="Radius from" min={1} max={10} bind:value={dna_r} />
			<Hst.Slider title="Radius to" min={1} max={10} bind:value={dna_r2} />
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dna_speed} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="DualBalls" icon="ic:baseline-circle">
		<DualBalls bind:speed={dualBalls_speed} bind:reverse={dualBalls_reverse} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dualBalls_speed} />
			<Hst.Checkbox title="Reverse" bind:value={dualBalls_reverse} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="Spin Glass" icon="ph:hourglass-fill">
		<SpinGlass
			bind:rotations={spinGlass_rotations}
			bind:speed={spinGlass_speed}
			bind:reverse={spinGlass_reverse}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Rotations" min={1} max={10} bind:value={spinGlass_rotations} />
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={spinGlass_speed} />
			<Hst.Checkbox title="Reverse" bind:value={spinGlass_reverse} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="Spin Circles" icon="ic:baseline-circle">
		<SpinCircles bind:speed={spinCircles_speed} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={spinCircles_speed} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="Oscillate" icon="cil:audio-spectrum">
		<Oscillate
			bind:speed={oscillate_speed}
			bind:count={oscillate_count}
			bind:width={oscillate_width}
			bind:bar_width={oscillate_bar_width}
		/>
		<svelte:fragment slot="controls">
			<Range title="Count" min={1} max={21} step={2} bind:value={oscillate_count} />
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={oscillate_speed} />
			<Hst.Slider title="Width" min={1} max={100} bind:value={oscillate_width} />
			<Hst.Slider title="Bar Width" min={2} max={12} bind:value={oscillate_bar_width} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="Slide" icon="teenyicons:layers-subtract-outline">
		<Slide bind:speed={slide_speed} bind:reverse={slide_reverse} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={slide_speed} />
			<Hst.Checkbox title="Reverse" bind:value={slide_reverse} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="Grow" icon="gg:extension">
		<Grow bind:speed={grow_speed} bind:reverse={grow_reverse} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={grow_speed} />
			<Hst.Checkbox title="Reverse" bind:value={grow_reverse} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="Shrink" icon="gg:extension">
		<Shrink bind:speed={shrink_speed} bind:reverse={shrink_reverse} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={shrink_speed} />
			<Hst.Checkbox title="Reverse" bind:value={shrink_reverse} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="Spin" icon="mdi:square-circle">
		<Spin
			bind:scale={spin_scale}
			bind:speed={spin_speed}
			bind:border_width={spin_border_width}
		/>
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={spin_speed} />
			<Range title="Scale" min={0.1} max={1} step={0.1} bind:value={spin_scale} />
			<Hst.Slider title="Border Width" min={0} max={10} bind:value={spin_border_width} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
