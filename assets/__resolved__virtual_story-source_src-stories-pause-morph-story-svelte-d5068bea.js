const __resolved__virtual_storySource_srcStoriesPauseMorphStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import Morph from "../../components/Pause/Morph.svelte";\n\n	export let Hst: Hst;\n\n	let paused = false;\n	let size = 50;\n<\/script>\n\n<Hst.Story title="Components/Pause/Merge" icon="material-symbols:pause-outline">\n	<div style:--size="{size}vw">\n		<Morph bind:paused />\n	</div>\n\n	<svelte:fragment slot="controls">\n		<Hst.Checkbox title="Paused" bind:value={paused} />\n		<Hst.Slider title="Size %" bind:value={size} min={1} max={100} />\n	</svelte:fragment>\n</Hst.Story>\n\n<style>\n	div {\n		width: var(--size);\n	}\n</style>\n';
export {
  __resolved__virtual_storySource_srcStoriesPauseMorphStorySvelte as default
};
