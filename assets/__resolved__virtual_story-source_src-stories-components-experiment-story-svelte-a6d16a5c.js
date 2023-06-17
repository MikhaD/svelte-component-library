const __resolved__virtual_storySource_srcStoriesComponentsExperimentStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import Experiment from "../../components/Experiment.svelte";\n\n	export let Hst: Hst;\n\n	let colorType: ColorType = "hex";\n	let value = "#000000";\n<\/script>\n\n<Hst.Story\n	title="Components/.Experiment"\n	icon="tabler:test-pipe"\n	layout={{ type: "single", iframe: false }}\n>\n	<Experiment />\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesComponentsExperimentStorySvelte as default
};
