const __resolved__virtual_storySource_srcStoriesColorinputStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import ColorInput from "../components/ColorInput.svelte";\n\n	export let Hst: Hst;\n\n	let value = "#000000";\n<\/script>\n\n<Hst.Story title="Components/Color Input" icon="typcn:input-checked">\n	<div>\n		<ColorInput bind:value />\n	</div>\n	<svelte:fragment slot="controls">\n		<Hst.Text title="Value" bind:value />\n	</svelte:fragment>\n</Hst.Story>\n\n<style>\n	div {\n		height: 90vh;\n	}\n</style>\n';
export {
  __resolved__virtual_storySource_srcStoriesColorinputStorySvelte as default
};
