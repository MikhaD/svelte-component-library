const __resolved__virtual_storySource_srcStoriesComponentsLoadingAnimationsLoadinganimationStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import Range from "../../../lib/Range.svelte";\n	import DNA from "../../../loading-animations/DNA.svelte";\n	import DualBalls from "../../../loading-animations/DualBalls.svelte";\n	import Grow from "../../../loading-animations/Grow.svelte";\n	import Heart from "../../../loading-animations/Heart.svelte";\n	import Hourglass from "../../../loading-animations/Hourglass.svelte";\n	import Oscillate from "../../../loading-animations/Oscillate.svelte";\n	import Pie from "../../../loading-animations/Pie.svelte";\n	import Shrink from "../../../loading-animations/Shrink.svelte";\n	import Slide from "../../../loading-animations/Slide.svelte";\n	import Spin from "../../../loading-animations/Spin.svelte";\n	import SpinCircles from "../../../loading-animations/SpinCircles.svelte";\n	import SpinGlass from "../../../loading-animations/SpinGlass.svelte";\n\n	export let Hst: Hst;\n\n	let grow_speed = 2;\n	let grow_reverse = false;\n\n	let shrink_speed = 2;\n	let shrink_reverse = false;\n\n	let spin_speed = 3;\n	let spin_scale = 0.25;\n	let spin_border_width = 0;\n\n	let oscillate_speed = 2;\n	let oscillate_count = 5;\n	let oscillate_width = 50;\n	let oscillate_bar_width = 6;\n\n	let slide_speed = 4;\n	let slide_reverse = false;\n\n	let spinCircles_speed = 1;\n\n	let spinGlass_speed = 1;\n	let spinGlass_rotations = 3;\n	let spinGlass_reverse = false;\n\n	let dualBalls_speed = 1;\n	let dualBalls_reverse = false;\n\n	let dna_count = 10;\n	let dna_r = 4;\n	let dna_r2 = 2;\n	let dna_height = 36;\n	let dna_speed = 1;\n\n	let pie_count = 8;\n	let pie_speed = 1;\n	let pie_scale = 0.5;\n\n	let heart_speed = 1.5;\n\n	let hourglass_speed = 1;\n<\/script>\n\n<Hst.Story title="Loading Animations" icon="mingcute:loading-fill" layout={{ type: "grid" }}>\n	<Hst.Variant title="Hourglass" icon="ic:round-hourglass-bottom">\n		<Hourglass bind:speed={hourglass_speed} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={hourglass_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="Heart" icon="material-symbols:favorite">\n		<Heart bind:speed={heart_speed} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={heart_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="Pie" icon="game-icons:swirled-shell">\n		<Pie bind:count={pie_count} bind:speed={pie_speed} bind:scale={pie_scale} />\n		<svelte:fragment slot="controls">\n			<Hst.Slider title="Count" min={2} max={50} bind:value={pie_count} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={pie_speed} />\n			<Range title="Scale" min={0.1} max={0.9} step={0.1} bind:value={pie_scale} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="DNA" icon="tabler:dna">\n		<DNA\n			bind:count={dna_count}\n			bind:r={dna_r}\n			bind:r2={dna_r2}\n			bind:height={dna_height}\n			bind:speed={dna_speed}\n		/>\n		<svelte:fragment slot="controls">\n			<Hst.Slider title="Count" min={1} max={50} bind:value={dna_count} />\n			<Hst.Slider title="Height" min={0} max={100} bind:value={dna_height} />\n			<Hst.Slider title="Radius from" min={1} max={10} bind:value={dna_r} />\n			<Hst.Slider title="Radius to" min={1} max={10} bind:value={dna_r2} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dna_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="DualBalls" icon="ic:baseline-circle">\n		<DualBalls bind:speed={dualBalls_speed} bind:reverse={dualBalls_reverse} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={dualBalls_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={dualBalls_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="Spin Glass" icon="ph:hourglass-fill">\n		<SpinGlass\n			bind:rotations={spinGlass_rotations}\n			bind:speed={spinGlass_speed}\n			bind:reverse={spinGlass_reverse}\n		/>\n		<svelte:fragment slot="controls">\n			<Hst.Slider title="Rotations" min={1} max={10} bind:value={spinGlass_rotations} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={spinGlass_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={spinGlass_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="Spin Circles" icon="ic:baseline-circle">\n		<SpinCircles bind:speed={spinCircles_speed} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={spinCircles_speed} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="Oscillate" icon="cil:audio-spectrum">\n		<Oscillate\n			bind:speed={oscillate_speed}\n			bind:count={oscillate_count}\n			bind:width={oscillate_width}\n			bind:bar_width={oscillate_bar_width}\n		/>\n		<svelte:fragment slot="controls">\n			<Range title="Count" min={1} max={21} step={2} bind:value={oscillate_count} />\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={oscillate_speed} />\n			<Hst.Slider title="Width" min={1} max={100} bind:value={oscillate_width} />\n			<Hst.Slider title="Bar Width" min={2} max={12} bind:value={oscillate_bar_width} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="Slide" icon="teenyicons:layers-subtract-outline">\n		<Slide bind:speed={slide_speed} bind:reverse={slide_reverse} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={slide_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={slide_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="Grow" icon="gg:extension">\n		<Grow bind:speed={grow_speed} bind:reverse={grow_reverse} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={grow_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={grow_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="Shrink" icon="gg:extension">\n		<Shrink bind:speed={shrink_speed} bind:reverse={shrink_reverse} />\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={shrink_speed} />\n			<Hst.Checkbox title="Reverse" bind:value={shrink_reverse} />\n		</svelte:fragment>\n	</Hst.Variant>\n	<Hst.Variant title="Spin" icon="mdi:square-circle">\n		<Spin\n			bind:scale={spin_scale}\n			bind:speed={spin_speed}\n			bind:border_width={spin_border_width}\n		/>\n		<svelte:fragment slot="controls">\n			<Range title="Speed" min={0.1} max={10} step={0.1} bind:value={spin_speed} />\n			<Range title="Scale" min={0.1} max={1} step={0.1} bind:value={spin_scale} />\n			<Hst.Slider title="Border Width" min={0} max={10} bind:value={spin_border_width} />\n		</svelte:fragment>\n	</Hst.Variant>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesComponentsLoadingAnimationsLoadinganimationStorySvelte as default
};
