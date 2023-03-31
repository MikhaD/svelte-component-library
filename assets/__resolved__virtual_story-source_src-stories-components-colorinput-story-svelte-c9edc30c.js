const __resolved__virtual_storySource_srcStoriesComponentsColorinputStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import ColorInput from "../../components/ColorInput.svelte";\n\n	export let Hst: Hst;\n\n	let value = "#22D3EE";\n	let title = "Color";\n<\/script>\n\n<Hst.Story\n	title="Components/Color Input"\n	icon="typcn:input-checked"\n	layout={{ type: "single", iframe: false }}\n>\n	<ColorInput bind:value bind:title />\n	<svelte:fragment slot="controls">\n		<Hst.Text title="Value" bind:value />\n		<Hst.Text title="Title" bind:value={title} />\n	</svelte:fragment>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesComponentsColorinputStorySvelte as default
};
