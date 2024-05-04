const __resolved__virtual_storySource_srcStoriesComponentsStarfieldStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import Starfield from "../../components/Canvas/Starfield.svelte";\n	import Button from "../../lib/Button.svelte";\n\n	export let Hst: Hst;\n	let key = false;\n\n	let width = 500;\n	let height = 500;\n	let stars = 500;\n	let duration = 0.3;\n\n	function changed(...args: any[]) {\n		key = !key;\n	}\n\n	$: changed(width, height, stars);\n<\/script>\n\n<Hst.Story title="Canvas/Starfield" icon="ion:sparkles">\n	{#key key}\n		<Starfield bind:width bind:height bind:stars bind:duration />\n	{/key}\n	<svelte:fragment slot="controls">\n		<Button on:click={changed}>Reset</Button>\n		<Hst.Number title="Width" bind:value={width} />\n		<Hst.Number title="Height" bind:value={height} />\n		<Hst.Number title="Stars" bind:value={stars} step={100} />\n		<Hst.Number title="Duration" bind:value={duration} step={0.1} />\n	</svelte:fragment>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesComponentsStarfieldStorySvelte as default
};
