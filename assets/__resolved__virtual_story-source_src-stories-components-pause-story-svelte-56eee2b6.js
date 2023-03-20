const __resolved__virtual_storySource_srcStoriesComponentsPauseStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import Morph from "../../components/Pause/Morph.svelte";\n\n	export let Hst: Hst;\n\n	let paused = false;\n<\/script>\n\n<Hst.Story title="Components/Pause" icon="material-symbols:pause-outline" layout={{ type: "grid" }}>\n	<Hst.Variant title="Circle" icon="material-symbols:pause-outline">\n		<Morph bind:paused />\n	</Hst.Variant>\n\n	<svelte:fragment slot="controls">\n		<Hst.Checkbox title="Paused" bind:value={paused} />\n	</svelte:fragment>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesComponentsPauseStorySvelte as default
};
