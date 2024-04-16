const __resolved__virtual_storySource_srcStoriesComponentsBrightnessiconStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import BrightnessIcon from "../../components/BrightnessIcon.svelte";\n\n	export let Hst: Hst;\n\n	let value = 1;\n	let rays = 8;\n<\/script>\n\n<Hst.Story\n	title="Components/Brightness Icon"\n	icon="zondicons:brightness-up"\n	layout={{ type: "single", iframe: false }}\n>\n	<BrightnessIcon bind:value bind:rays />\n	<svelte:fragment slot="controls">\n		<Hst.Slider title="Rays" min={1} max={16} bind:value={rays} />\n		<Hst.Slider title="Brightness" min={0} max={100} bind:value />\n	</svelte:fragment>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesComponentsBrightnessiconStorySvelte as default
};
