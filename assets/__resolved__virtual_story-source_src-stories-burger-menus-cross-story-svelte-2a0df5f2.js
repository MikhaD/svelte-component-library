const __resolved__virtual_storySource_srcStoriesBurgerMenusCrossStorySvelte = '<script lang="ts">\n	import type { Hst } from "@histoire/plugin-svelte";\n	import BurgerMenu from "../../components/Burger Menus/Cross.svelte";\n\n	export let Hst: Hst;\n\n	let open = false;\n	let size = 50;\n<\/script>\n\n<Hst.Story title="Components/Burger Menus/Cross" icon="material-symbols:menu">\n	<div style:--size="{size}vw">\n		<BurgerMenu bind:open />\n	</div>\n\n	<svelte:fragment slot="controls">\n		<Hst.Checkbox title="Open" bind:value={open} />\n		<Hst.Slider title="Size %" bind:value={size} min={1} max={100} />\n	</svelte:fragment>\n</Hst.Story>\n\n<style>\n	div {\n		width: var(--size);\n	}\n</style>\n';
export {
  __resolved__virtual_storySource_srcStoriesBurgerMenusCrossStorySvelte as default
};
