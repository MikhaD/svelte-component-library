const __resolved__virtual_storySource_srcStoriesColorpickerStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import ColorPicker from "../components/ColorPicker";\n\n	export let Hst: Hst;\n\n	let colorType: ColorType = "hex";\n	let value = "#000000";\n<\/script>\n\n<Hst.Story title="Components/Color Picker" icon="ph:eyedropper-fill">\n	<ColorPicker bind:colorType bind:value />\n	<svelte:fragment slot="controls">\n		<Hst.Select\n			title="Color Type"\n			options={["hex", "rgb", "hsl", "hwb"]}\n			bind:value={colorType}\n		/>\n		<Hst.Text title="Value" bind:value />\n	</svelte:fragment>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesColorpickerStorySvelte as default
};
