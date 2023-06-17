const __resolved__virtual_storySource_srcStoriesComponentsLoadingAnimationsLoadinganimationStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import Range from "../../../lib/Range.svelte";\n\n	import Loading from "../../../loading-animations";\n\n	export let Hst: Hst;\n\n	let spin_speed = 3;\n	let spin_scale = 0.25;\n	let spin_border_width = 0;\n\n	let shrink_speed = 2;\n	let shrink_reverse = false;\n\n	let grow_speed = 2;\n	let grow_reverse = false;\n\n	let slide_speed = 4;\n	let slide_reverse = false;\n\n	let oscillate_speed = 2;\n	let oscillate_count = 5;\n	let oscillate_width = 50;\n	let oscillate_bar_width = 6;\n\n	let spinCircles_count = 2;\n	let spinCircles_merge = 0.9;\n	let spinCircles_r = 10;\n	let spinCircles_r2 = 15;\n	let spinCircles_speed = 1;\n	let spinCircles_reverse = false;\n\n	let spinGlass_speed = 1;\n	let spinGlass_rotations = 3;\n	let spinGlass_reverse = false;\n\n	let dualBalls_speed = 1;\n	let dualBalls_reverse = false;\n\n	let dna_count = 10;\n	let dna_r = 4;\n	let dna_r2 = 2;\n	let dna_height = 36;\n	let dna_speed = 1;\n\n	let pie_count = 8;\n	let pie_speed = 1;\n	let pie_scale = 0.5;\n	let pie_reverse = false;\n\n	let heart_speed = 1.5;\n\n	let heartOutline_speed = 2;\n	let heartOutline_reverse = false;\n\n	let hourglass_speed = 1;\n\n	let rotateOne_speed = 1;\n	let rotateOne_count = 12;\n	let rotateOne_width = 10;\n	let rotateOne_length = 25;\n\n	let clock_speed = 1;\n\n	let blockWave_speed = 2;\n	let blockWave_count = 4;\n\n	let blockShuffle_speed = 2;\n	let blockShuffle_count = 3;\n	let blockShuffle_br = 10;\n\n	let dotSlide_speed = 0.5;\n	let dotSlide_r = 15;\n	let dotSlide_reverse = false;\n\n	let dotSpin_count = 2;\n	let dotSpin_speed = 1;\n	let dotSpin_reverse = false;\n	let dotSpin_r = 15;\n\n	let dotWave_count = 2;\n	let dotWave_speed = 1;\n	let dotWave_r = 15;\n	let dotWave_reverse = true;\n<\/script>\n\n<Hst.Story title="Loading Animations" icon="mingcute:loading-fill" layout={{ type: "grid" }}>\n	<Hst.Variant title="Dot Spin" icon="ion:more">\n		<Loading.DotWave\n			bind:reverse={dotWave_reverse}\n			bind:count={dotWave_count}\n			bind:speed={dotWave_speed}\n			bind:r={dotWave_r}\n		/>\n		<svelte:fragment slot="controls">\n			<Range title="Count" min={2} max={12} step={2} bind:value={dotWave_count} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dotWave_speed} />\n			<Range title="Radius" min={1} max={20} step={0.5} bind:value={dotWave_r} />\n			<Hst.Checkbox title="Reverse" bind:value={dotWave_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Dot Spin" icon="ion:more">\n		<Loading.DotSpin\n			bind:count={dotSpin_count}\n			bind:speed={dotSpin_speed}\n			bind:reverse={dotSpin_reverse}\n			bind:r={dotSpin_r}\n		/>\n		<svelte:fragment slot="controls">\n			<Range title="Count" min={2} max={12} step={2} bind:value={dotSpin_count} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dotSpin_speed} />\n			<Range title="Radius" min={1} max={20} step={0.5} bind:value={dotSpin_r} />\n			<Hst.Checkbox title="Reverse" bind:value={dotSpin_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Dot Slide" icon="ion:more">\n		<Loading.DotSlide\n			bind:speed={dotSlide_speed}\n			bind:r={dotSlide_r}\n			bind:reverse={dotSlide_reverse}\n		/>\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dotSlide_speed} />\n			<Range title="Radius" min={1} max={20} step={0.5} bind:value={dotSlide_r} />\n			<Hst.Checkbox title="Reverse" bind:value={dotSlide_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Block Shuffle" icon="zondicons:view-tile">\n		<Loading.BlockShuffle\n			bind:speed={blockShuffle_speed}\n			bind:count={blockShuffle_count}\n			bind:border_radius={blockShuffle_br}\n		/>\n		<svelte:fragment slot="controls">\n			<Hst.Slider title="Count" min={1} max={3} bind:value={blockShuffle_count} />\n			<Hst.Slider title="Border Radius %" min={0} max={50} bind:value={blockShuffle_br} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={blockShuffle_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Block Wave" icon="fe:tiled">\n		<Loading.BlockWave bind:speed={blockWave_speed} bind:count={blockWave_count} />\n		<svelte:fragment slot="controls">\n			<Hst.Slider title="Count" min={1} max={15} bind:value={blockWave_count} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={blockWave_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Clock" icon="ic:baseline-access-time">\n		<Loading.Clock bind:speed={clock_speed} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={clock_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Rotate 1" icon="ph:circle-dashed-bold">\n		<Loading.RotateOne\n			bind:speed={rotateOne_speed}\n			bind:count={rotateOne_count}\n			bind:width={rotateOne_width}\n			bind:length={rotateOne_length}\n		/>\n		<svelte:fragment slot="controls">\n			<Hst.Slider title="Count" min={1} max={25} bind:value={rotateOne_count} />\n			<Hst.Slider title="Width" min={1} max={50} bind:value={rotateOne_width} />\n			<Hst.Slider title="Length" min={1} max={50} bind:value={rotateOne_length} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={rotateOne_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Hourglass" icon="ic:round-hourglass-bottom">\n		<Loading.Hourglass bind:speed={hourglass_speed} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={hourglass_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Heart Outline" icon="material-symbols:favorite">\n		<Loading.HeartOutline bind:speed={heartOutline_speed} bind:reverse={heartOutline_reverse} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={heartOutline_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={heartOutline_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Heart" icon="material-symbols:favorite">\n		<Loading.Heart bind:speed={heart_speed} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={heart_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Pie" icon="game-icons:swirled-shell">\n		<Loading.Pie\n			bind:count={pie_count}\n			bind:speed={pie_speed}\n			bind:scale={pie_scale}\n			bind:reverse={pie_reverse}\n		/>\n		<svelte:fragment slot="controls">\n			<Hst.Slider title="Count" min={2} max={50} bind:value={pie_count} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={pie_speed} />\n			<Range title="Scale" min={0.1} max={0.9} step={0.1} bind:value={pie_scale} />\n			<Hst.Checkbox title="Reverse" bind:value={pie_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="DNA" icon="tabler:dna">\n		<Loading.DNA\n			bind:count={dna_count}\n			bind:r={dna_r}\n			bind:r2={dna_r2}\n			bind:height={dna_height}\n			bind:speed={dna_speed}\n		/>\n		<svelte:fragment slot="controls">\n			<Hst.Slider title="Count" min={1} max={50} bind:value={dna_count} />\n			<Hst.Slider title="Height" min={0} max={100} bind:value={dna_height} />\n			<Hst.Slider title="Radius from" min={1} max={10} bind:value={dna_r} />\n			<Hst.Slider title="Radius to" min={1} max={10} bind:value={dna_r2} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dna_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="DualBalls" icon="ic:baseline-circle">\n		<Loading.DualBalls bind:speed={dualBalls_speed} bind:reverse={dualBalls_reverse} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dualBalls_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={dualBalls_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Spin Glass" icon="ph:hourglass-fill">\n		<Loading.SpinGlass\n			bind:rotations={spinGlass_rotations}\n			bind:speed={spinGlass_speed}\n			bind:reverse={spinGlass_reverse}\n		/>\n		<svelte:fragment slot="controls">\n			<Hst.Slider title="Rotations" min={1} max={10} bind:value={spinGlass_rotations} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={spinGlass_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={spinGlass_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Spin Circles" icon="ic:baseline-circle">\n		<Loading.SpinCircles\n			bind:speed={spinCircles_speed}\n			bind:count={spinCircles_count}\n			bind:merge={spinCircles_merge}\n			bind:r={spinCircles_r}\n			bind:r2={spinCircles_r2}\n			bind:reverse={spinCircles_reverse}\n		/>\n		<svelte:fragment slot="controls">\n			<Hst.Slider title="Count" min={1} max={15} bind:value={spinCircles_count} />\n			<Hst.Slider title="Radius from" min={1} max={20} bind:value={spinCircles_r} />\n			<Hst.Slider title="Radius to" min={1} max={20} bind:value={spinCircles_r2} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={spinCircles_speed} />\n			<Range title="Merge Factor" min={0} max={1} step={0.1} bind:value={spinCircles_merge} />\n			<Hst.Checkbox title="Reverse" bind:value={spinCircles_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Oscillate" icon="cil:audio-spectrum">\n		<Loading.Oscillate\n			bind:speed={oscillate_speed}\n			bind:count={oscillate_count}\n			bind:width={oscillate_width}\n			bind:bar_width={oscillate_bar_width}\n		/>\n		<svelte:fragment slot="controls">\n			<Range title="Count" min={1} max={21} step={2} bind:value={oscillate_count} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={oscillate_speed} />\n			<Hst.Slider title="Width" min={1} max={100} bind:value={oscillate_width} />\n			<Hst.Slider title="Bar Width" min={2} max={12} bind:value={oscillate_bar_width} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Slide" icon="teenyicons:layers-subtract-outline">\n		<Loading.Slide bind:speed={slide_speed} bind:reverse={slide_reverse} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={slide_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={slide_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Grow" icon="gg:extension">\n		<Loading.Grow bind:speed={grow_speed} bind:reverse={grow_reverse} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={grow_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={grow_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Shrink" icon="gg:extension">\n		<Loading.Shrink bind:speed={shrink_speed} bind:reverse={shrink_reverse} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={shrink_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={shrink_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n\n	<Hst.Variant title="Spin" icon="mdi:square-circle">\n		<Loading.Spin\n			bind:scale={spin_scale}\n			bind:speed={spin_speed}\n			bind:border_width={spin_border_width}\n		/>\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={spin_speed} />\n			<Range title="Scale" min={0.1} max={1} step={0.1} bind:value={spin_scale} />\n			<Hst.Slider title="Border Width" min={0} max={10} bind:value={spin_border_width} />\n		</svelte:fragment>\n	</Hst.Variant>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesComponentsLoadingAnimationsLoadinganimationStorySvelte as default
};
