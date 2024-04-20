<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";

	import * as Loading from "../../../loading-animations";

	export let Hst: Hst;

	let spin_duration = 3;
	let spin_scale = 0.25;
	let spin_border_width = 0;

	let shrink_duration = 2;
	let shrink_reverse = false;

	let grow_duration = 2;
	let grow_reverse = false;

	let slide_duration = 4;
	let slide_reverse = false;

	let oscillate_duration = 2;
	let oscillate_count = 5;
	let oscillate_width = 50;
	let oscillate_bar_width = 6;

	let spinCircles_count = 2;
	let spinCircles_merge = 0.9;
	let spinCircles_r = 10;
	let spinCircles_r2 = 15;
	let spinCircles_duration = 1;
	let spinCircles_reverse = false;

	let spinGlass_duration = 1;
	let spinGlass_rotations = 3;
	let spinGlass_reverse = false;

	let dualBalls_duration = 1;
	let dualBalls_reverse = false;

	let dna_count = 10;
	let dna_r = 4;
	let dna_r2 = 2;
	let dna_height = 36;
	let dna_duration = 1;

	let pie_count = 8;
	let pie_duration = 1;
	let pie_scale = 0.5;
	let pie_reverse = false;

	let heart_duration = 1.5;

	let heartOutline_duration = 2;
	let heartOutline_reverse = false;

	let hourglass_duration = 1;

	let rotateOne_duration = 1;
	let rotateOne_count = 10;
	let rotateOne_width = 10;
	let rotateOne_length = 25;
	let rotateOne_offset = 25;
	let rotateOne_round = false;

	let rotateTwo_duration = 1;
	let rotateTwo_count = 10;
	let rotateTwo_radius = 10;
	let rotateTwo_offset = 35;

	let clock_duration = 1;

	let blockWave_duration = 2;
	let blockWave_count = 4;

	let blockShuffle_duration = 2;
	let blockShuffle_count = 3;
	let blockShuffle_br = 10;

	let dotSlide_duration = 0.5;
	let dotSlide_r = 15;
	let dotSlide_reverse = false;

	let dotSpin_count = 2;
	let dotSpin_duration = 1;
	let dotSpin_reverse = false;
	let dotSpin_r = 15;
</script>

<Hst.Story title="Loading Animations" icon="mingcute:loading-fill" layout={{ type: "grid" }}>
	<Hst.Variant title="Pie" icon="game-icons:swirled-shell">
		<Loading.Pie
			bind:count={pie_count}
			bind:duration={pie_duration}
			bind:scale={pie_scale}
			bind:reverse={pie_reverse}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={2} max={50} bind:value={pie_count} />
			<Hst.Slider title="Duration" min={0.1} max={10} step={0.1} bind:value={pie_duration} />
			<Hst.Slider title="Scale" min={0.1} max={0.9} step={0.1} bind:value={pie_scale} />
			<Hst.Checkbox title="Reverse" bind:value={pie_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="DNA" icon="tabler:dna">
		<Loading.DNA
			bind:count={dna_count}
			bind:r={dna_r}
			bind:r2={dna_r2}
			bind:height={dna_height}
			bind:duration={dna_duration}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={1} max={50} bind:value={dna_count} />
			<Hst.Slider title="Height" min={0} max={100} bind:value={dna_height} />
			<Hst.Slider title="Radius from" min={1} max={10} bind:value={dna_r} />
			<Hst.Slider title="Radius to" min={1} max={10} bind:value={dna_r2} />
			<Hst.Slider title="Duration" min={0.1} max={10} step={0.1} bind:value={dna_duration} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Block Shuffle" icon="zondicons:view-tile">
		<Loading.BlockShuffle
			bind:duration={blockShuffle_duration}
			bind:count={blockShuffle_count}
			bind:border_radius={blockShuffle_br}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={1} max={3} bind:value={blockShuffle_count} />
			<Hst.Slider title="Border Radius %" min={0} max={50} bind:value={blockShuffle_br} />
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={blockShuffle_duration}
			/>
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Block Wave" icon="fe:tiled">
		<Loading.BlockWave bind:duration={blockWave_duration} bind:count={blockWave_count} />
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={1} max={15} bind:value={blockWave_count} />
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={blockWave_duration}
			/>
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Clock" icon="ic:baseline-access-time">
		<Loading.Clock bind:duration={clock_duration} />
		<svelte:fragment slot="controls">
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={clock_duration}
			/>
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Rotate 1" icon="ph:circle-dashed-bold">
		<Loading.RotateOne
			bind:duration={rotateOne_duration}
			bind:count={rotateOne_count}
			bind:width={rotateOne_width}
			bind:length={rotateOne_length}
			bind:round={rotateOne_round}
			bind:offset={rotateOne_offset}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={1} max={25} bind:value={rotateOne_count} />
			<Hst.Slider title="Width" min={1} max={50} bind:value={rotateOne_width} />
			<Hst.Slider title="Length" min={0} max={50} bind:value={rotateOne_length} />
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={rotateOne_duration}
			/>
			<Hst.Slider title="Offset" min={0} max={50} bind:value={rotateOne_offset} />
			<Hst.Checkbox title="Round" bind:value={rotateOne_round} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Rotate 2" icon="ph:circle-dashed-bold">
		<Loading.RotateTwo
			bind:duration={rotateTwo_duration}
			bind:count={rotateTwo_count}
			bind:radius={rotateTwo_radius}
			bind:offset={rotateTwo_offset}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={rotateTwo_duration}
			/>
			<Hst.Slider title="Count" min={1} max={25} bind:value={rotateTwo_count} />
			<Hst.Slider title="Radius" min={1} max={15} bind:value={rotateTwo_radius} />
			<Hst.Slider title="Offset" min={0} max={50} bind:value={rotateTwo_offset} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Hourglass" icon="ic:round-hourglass-bottom">
		<Loading.Hourglass bind:duration={hourglass_duration} />
		<svelte:fragment slot="controls">
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={hourglass_duration}
			/>
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Heart Outline" icon="material-symbols:favorite">
		<Loading.HeartOutline
			bind:duration={heartOutline_duration}
			bind:reverse={heartOutline_reverse}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={heartOutline_duration}
			/>
			<Hst.Checkbox title="Reverse" bind:value={heartOutline_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Heart" icon="material-symbols:favorite">
		<Loading.Heart bind:duration={heart_duration} />
		<svelte:fragment slot="controls">
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={heart_duration}
			/>
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="DualBalls" icon="ic:baseline-circle">
		<Loading.DualBalls bind:duration={dualBalls_duration} bind:reverse={dualBalls_reverse} />
		<svelte:fragment slot="controls">
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={dualBalls_duration}
			/>
			<Hst.Checkbox title="Reverse" bind:value={dualBalls_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Spin Glass" icon="ph:hourglass-fill">
		<Loading.SpinGlass
			bind:rotations={spinGlass_rotations}
			bind:duration={spinGlass_duration}
			bind:reverse={spinGlass_reverse}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Rotations" min={1} max={10} bind:value={spinGlass_rotations} />
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={spinGlass_duration}
			/>
			<Hst.Checkbox title="Reverse" bind:value={spinGlass_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Spin Circles" icon="ic:baseline-circle">
		<Loading.SpinCircles
			bind:duration={spinCircles_duration}
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
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={spinCircles_duration}
			/>
			<Hst.Slider
				title="Merge Factor"
				min={0}
				max={1}
				step={0.1}
				bind:value={spinCircles_merge}
			/>
			<Hst.Checkbox title="Reverse" bind:value={spinCircles_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Oscillate" icon="cil:audio-spectrum">
		<Loading.Oscillate
			bind:duration={oscillate_duration}
			bind:count={oscillate_count}
			bind:width={oscillate_width}
			bind:bar_width={oscillate_bar_width}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={1} max={21} step={2} bind:value={oscillate_count} />
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={oscillate_duration}
			/>
			<Hst.Slider title="Width" min={1} max={100} bind:value={oscillate_width} />
			<Hst.Slider title="Bar Width" min={2} max={12} bind:value={oscillate_bar_width} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Slide" icon="teenyicons:layers-subtract-outline">
		<Loading.Slide bind:duration={slide_duration} bind:reverse={slide_reverse} />
		<svelte:fragment slot="controls">
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={slide_duration}
			/>
			<Hst.Checkbox title="Reverse" bind:value={slide_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Grow" icon="gg:extension">
		<Loading.Grow bind:duration={grow_duration} bind:reverse={grow_reverse} />
		<svelte:fragment slot="controls">
			<Hst.Slider title="Duration" min={0.1} max={10} step={0.1} bind:value={grow_duration} />
			<Hst.Checkbox title="Reverse" bind:value={grow_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Shrink" icon="gg:extension">
		<Loading.Shrink bind:duration={shrink_duration} bind:reverse={shrink_reverse} />
		<svelte:fragment slot="controls">
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={shrink_duration}
			/>
			<Hst.Checkbox title="Reverse" bind:value={shrink_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Spin" icon="mdi:square-circle">
		<Loading.Spin
			bind:scale={spin_scale}
			bind:duration={spin_duration}
			bind:border_width={spin_border_width}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Duration" min={0.1} max={10} step={0.1} bind:value={spin_duration} />
			<Hst.Slider title="Scale" min={0.1} max={1} step={0.1} bind:value={spin_scale} />
			<Hst.Slider title="Border Width" min={0} max={10} bind:value={spin_border_width} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Dot Spin" icon="ion:more">
		<Loading.DotSpin
			bind:count={dotSpin_count}
			bind:duration={dotSpin_duration}
			bind:reverse={dotSpin_reverse}
			bind:r={dotSpin_r}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider title="Count" min={2} max={12} step={2} bind:value={dotSpin_count} />
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={dotSpin_duration}
			/>
			<Hst.Slider title="Radius" min={1} max={20} step={0.5} bind:value={dotSpin_r} />
			<Hst.Checkbox title="Reverse" bind:value={dotSpin_reverse} />
		</svelte:fragment>
	</Hst.Variant>

	<Hst.Variant title="Dot Slide" icon="ion:more">
		<Loading.DotSlide
			bind:duration={dotSlide_duration}
			bind:r={dotSlide_r}
			bind:reverse={dotSlide_reverse}
		/>
		<svelte:fragment slot="controls">
			<Hst.Slider
				title="Duration"
				min={0.1}
				max={10}
				step={0.1}
				bind:value={dotSlide_duration}
			/>
			<Hst.Slider title="Radius" min={1} max={20} step={0.5} bind:value={dotSlide_r} />
			<Hst.Checkbox title="Reverse" bind:value={dotSlide_reverse} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
