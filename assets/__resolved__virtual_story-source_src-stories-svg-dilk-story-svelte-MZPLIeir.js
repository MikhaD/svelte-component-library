const __resolved__virtual_storySource_srcStoriesSvgDilkStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import ColorInput from "../../components/ColorInput.svelte";\n\n	export let Hst: Hst;\n\n	let color = "#000";\n<\/script>\n\n<Hst.Story title="SVGs/Dilk" icon="lucide:image">\n	<svg viewBox="0 0 6 6" fill={color}>\n		<path d="M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z" />\n	</svg>\n	<svelte:fragment slot="controls">\n		<ColorInput title="Color" bind:value={color} />\n	</svelte:fragment>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesSvgDilkStorySvelte as default
};
