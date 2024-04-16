const __resolved__virtual_storySource_srcStoriesSvgDownloadStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import ColorInput from "../../components/ColorInput.svelte";\n\n	export let Hst: Hst;\n\n	let color = "#000";\n<\/script>\n\n<Hst.Story title="SVGs/Download" icon="tabler:cloud-download">\n	<svg viewBox="0 0 100 100" fill="none">\n		<path\n			d="M71 73h9a19 19 0 10-11-36a25.7 25.7 0 10-50 11h-2.5a1 1 0 100 25h8.5"\n			stroke={color}\n			stroke-width="8"\n		/>\n		<path d="M48 89l-20-20h13v-27h14v27h13z" fill={color} />\n	</svg>\n	<svelte:fragment slot="controls">\n		<ColorInput title="Color" bind:value={color} />\n	</svelte:fragment>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesSvgDownloadStorySvelte as default
};
