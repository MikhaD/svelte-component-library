<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Range from "../../../lib/Range.svelte";

	import Loading from "../../../loading-animations";

	export let Hst: Hst;

	let spin_speed = 3;
	let spin_scale = 0.25;
	let spin_border_width = 0;

	let shrink_speed = 2;
	let shrink_reverse = false;

	let grow_speed = 2;
	let grow_reverse = false;

	let slide_speed = 4;
	let slide_reverse = false;

	let oscillate_speed = 2;
	let oscillate_count = 5;
	let oscillate_width = 50;
	let oscillate_bar_width = 6;

	let spinCircles_count = 2;
	let spinCircles_merge = 0.9;
	let spinCircles_r = 10;
	let spinCircles_r2 = 15;
	let spinCircles_speed = 1;
	let spinCircles_reverse = false;

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
	let pie_reverse = false;

	let heart_speed = 1.5;

	let heartOutline_speed = 2;
	let heartOutline_reverse = false;

	let hourglass_speed = 1;

	let rotateOne_speed = 1;
	let rotateOne_count = 12;
	let rotateOne_width = 10;
	let rotateOne_length = 25;

	let clock_speed = 1;

	let blockWave_speed = 2;
	let blockWave_count = 4;

	let blockShuffle_speed = 2;
	let blockShuffle_count = 3;
	let blockShuffle_br = 10;

	let dotSlide_speed = 0.5;
	let dotSlide_r = 15;
	let dotSlide_reverse = false;

	let dotSpin_count = 2;
	let dotSpin_speed = 1;
	let dotSpin_reverse = false;
	let dotSpin_r = 15;
</script>

<Hst.Story title="Loading Animations" icon="mingcute:loading-fill" layout={{ type: "grid" }}>
	<Hst.Variant title="Dot Spin" icon="ion:more">
		<Loading.DotSpin
			bind:count={dotSpin_count}
			bind:speed={dotSpin_speed}
			bind:reverse={dotSpin_reverse}
			bind:r={dotSpin_r}
		/>
		<svelte:fragment slot="controls">
			<Range title="Count" min={2} max={12} step={2} bind:value={dotSpin_count} />
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dotSpin_speed} />
			<Range title="Radius" min={1} max={20} step={0.5} bind:value={dotSpin_r} />
			<Hst.Checkbox title="Reverse" bind:value={dotSpin_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Dot Slide" icon="ion:more">
		<Loading.DotSlide
			bind:speed={dotSlide_speed}
			bind:r={dotSlide_r}
			bind:reverse={dotSlide_reverse}
		/>
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dotSlide_speed} />
			<Range title="Radius" min={1} max={20} step={0.5} bind:value={dotSlide_r} />
			<Hst.Checkbox title="Reverse" bind:value={dotSlide_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Block Shuffle" icon="zondicons:view-tile">
		<Loading.BlockShuffle
			bind:speed={blockShuffle_speed}
			bind:count={blockShuffle_count}
			bind:border_radius={blockShuffle_br}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={1} max={3} bind:value={blockShuffle_count} />
			<Hst.Slider title="Border Radius %" min={0} max={50} bind:value={blockShuffle_br} />
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={blockShuffle_speed} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Block Wave" icon="fe:tiled">
		<Loading.BlockWave bind:speed={blockWave_speed} bind:count={blockWave_count} />
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={1} max={15} bind:value={blockWave_count} />
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={blockWave_speed} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Clock" icon="ic:baseline-access-time">
		<Loading.Clock bind:speed={clock_speed} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={clock_speed} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Rotate 1" icon="ph:circle-dashed-bold">
		<Loading.RotateOne
			bind:speed={rotateOne_speed}
			bind:count={rotateOne_count}
			bind:width={rotateOne_width}
			bind:length={rotateOne_length}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={1} max={25} bind:value={rotateOne_count} />
			<Hst.Slider title="Width" min={1} max={50} bind:value={rotateOne_width} />
			<Hst.Slider title="Length" min={1} max={50} bind:value={rotateOne_length} />
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={rotateOne_speed} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Hourglass" icon="ic:round-hourglass-bottom">
		<Loading.Hourglass bind:speed={hourglass_speed} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={hourglass_speed} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Heart Outline" icon="material-symbols:favorite">
		<Loading.HeartOutline bind:speed={heartOutline_speed} bind:reverse={heartOutline_reverse} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={heartOutline_speed} />
			<Hst.Checkbox title="Reverse" bind:value={heartOutline_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Heart" icon="material-symbols:favorite">
		<Loading.Heart bind:speed={heart_speed} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={heart_speed} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Pie" icon="game-icons:swirled-shell">
		<Loading.Pie
			bind:count={pie_count}
			bind:speed={pie_speed}
			bind:scale={pie_scale}
			bind:reverse={pie_reverse}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={2} max={50} bind:value={pie_count} />
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={pie_speed} />
			<Range title="Scale" min={0.1} max={0.9} step={0.1} bind:value={pie_scale} />
			<Hst.Checkbox title="Reverse" bind:value={pie_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="DNA" icon="tabler:dna">
		<Loading.DNA
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
		<Loading.DualBalls bind:speed={dualBalls_speed} bind:reverse={dualBalls_reverse} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dualBalls_speed} />
			<Hst.Checkbox title="Reverse" bind:value={dualBalls_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Spin Glass" icon="ph:hourglass-fill">
		<Loading.SpinGlass
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
		<Loading.SpinCircles
			bind:speed={spinCircles_speed}
			bind:count={spinCircles_count}
			bind:merge={spinCircles_merge}
			bind:r={spinCircles_r}
			bind:r2={spinCircles_r2}
			bind:reverse={spinCircles_reverse}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={1} max={15} bind:value={spinCircles_count} />
			<Hst.Slider title="Radius from" min={1} max={20} bind:value={spinCircles_r} />
			<Hst.Slider title="Radius to" min={1} max={20} bind:value={spinCircles_r2} />
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={spinCircles_speed} />
			<Range title="Merge Factor" min={0} max={1} step={0.1} bind:value={spinCircles_merge} />
			<Hst.Checkbox title="Reverse" bind:value={spinCircles_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Oscillate" icon="cil:audio-spectrum">
		<Loading.Oscillate
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
		<Loading.Slide bind:speed={slide_speed} bind:reverse={slide_reverse} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={slide_speed} />
			<Hst.Checkbox title="Reverse" bind:value={slide_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Grow" icon="gg:extension">
		<Loading.Grow bind:speed={grow_speed} bind:reverse={grow_reverse} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={grow_speed} />
			<Hst.Checkbox title="Reverse" bind:value={grow_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Shrink" icon="gg:extension">
		<Loading.Shrink bind:speed={shrink_speed} bind:reverse={shrink_reverse} />
		<svelte:fragment slot="controls">
			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={shrink_speed} />
			<Hst.Checkbox title="Reverse" bind:value={shrink_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Spin" icon="mdi:square-circle">
		<Loading.Spin
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
