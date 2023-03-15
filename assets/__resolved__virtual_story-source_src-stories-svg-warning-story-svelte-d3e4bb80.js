const __resolved__virtual_storySource_srcStoriesSvgWarningStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n\n	export let Hst: Hst;\n\n	let source = `\n<svg viewBox="0 0 10 10" stroke-width="2" stroke="#000" stroke-linecap="round">\n	<path d="M1 1L9 9M1 9L9 1" />\n</svg>\n	`;\n<\/script>\n\n<Hst.Story title="SVGs/Warning" icon="lucide:image" {source}>\n	<svg viewBox="0 0 20 20" fill="none" stroke="#000">\n		<path d="M10 1L19 19L1 19z" stroke-width="2" stroke-linejoin="round" />\n		<path d="M10 8v5" stroke-width="2" stroke-linecap="round" />\n		<circle cx="10" cy="16" r="1" fill="#000" stroke="none" />\n	</svg>\n</Hst.Story>\n';
export {
  __resolved__virtual_storySource_srcStoriesSvgWarningStorySvelte as default
};
