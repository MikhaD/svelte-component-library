const __resolved__virtual_storySource_srcStoriesSvgCloseStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import ColorInput from "../../components/ColorInput.svelte";\n\n	export let Hst: Hst;\n\n	let color = "#000";\n<\/script>\n\n<Hst.Story title="SVGs/Close" icon="ic:round-close">\n	<svg viewBox="0 0 10 10" stroke-width="2" stroke={color} stroke-linecap="round">\n		<path d="M1 1L9 9M1 9L9 1" />\n	</svg>\n	<svelte:fragment slot="controls">\n		<ColorInput title="Color" bind:value={color} />\n	</svelte:fragment>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesSvgCloseStorySvelte as default
};
