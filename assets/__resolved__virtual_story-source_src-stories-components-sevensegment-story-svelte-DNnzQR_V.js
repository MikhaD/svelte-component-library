const __resolved__virtual_storySource_srcStoriesComponentsSevensegmentStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import Display from "../../components/Seven Segment/SevenSegDisplay.svelte";\n\n	export let Hst: Hst;\n\n	let value = 12345.6789;\n<\/script>\n\n<Hst.Story\n	title="Components/7 Segment"\n	icon="ri:number-8"\n	layout={{ type: "single", iframe: false }}\n>\n	<div>\n		<Display bind:value />\n	</div>\n	<svelte:fragment slot="controls">\n		<Hst.Number title="Value" bind:value />\n	</svelte:fragment>\n</Hst.Story>\n\n<style lang="scss">\n	div {\n		height: 4rem;\n		padding: 1rem;\n	}\n</style>\n';
export {
  __resolved__virtual_storySource_srcStoriesComponentsSevensegmentStorySvelte as default
};
