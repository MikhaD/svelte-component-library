const __resolved__virtual_storySource_srcStoriesGlitchStorySvelte = '<script lang="ts">\n	import Test from "../components/Glitch.svelte";\n	import type { Hst } from "@histoire/plugin-svelte";\n\n	export let Hst: Hst;\n\n	let text = "Hello World";\n	let iteration_factor = 1;\n	let flash_duration = 30;\n<\/script>\n\n<Hst.Story title="components/Glitch Text" icon="bx:text">\n	<Test {text} {iteration_factor} {flash_duration} />\n	<svelte:fragment slot="controls">\n		<Hst.Text bind:value={text} title="Text" />\n		<Hst.Number bind:value={iteration_factor} title="Iteration Factor" />\n		<Hst.Number bind:value={flash_duration} title="Flash Duration" />\n	</svelte:fragment>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesGlitchStorySvelte as default
};
