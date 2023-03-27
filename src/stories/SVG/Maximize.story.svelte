<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import ColorInput from "../../components/ColorInput.svelte";

	export let Hst: Hst;

	let color = "#000";
	let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentcolor">
	<style>
		path {
			transition: transform 0.25s ease-in-out;
		}
		svg:hover .tl { transform: translate(-10px, -10px) }
		svg:hover .tr { transform: translate(10px, -10px) }
		svg:hover .bl { transform: translate(-10px, 10px) }
		svg:hover .br { transform: translate(10px, 10px) }
	</style>
	<path class="tl" d="M10,10h30v10h-20v20h-10z" />
	<path class="tr" d="M60,10 h30v30h-10v-20h-20z" />
	<path class="bl" d="M10,60v30h30v-10h-20v-20z" />
	<path class="br" d="M80,60h10v30h-30v-10h20z" />
</svg>
`;
</script>

<Hst.Story title="SVGs/Maximize" icon="tabler:maximize" {source}>
	<svg viewBox="0 0 100 100" fill={color}>
		<style>
			path {
				transition: transform 0.25s ease-in-out;
			}

			svg:hover .tl {
				transform: translate(-10px, -10px);
			}

			svg:hover .tr {
				transform: translate(10px, -10px);
			}

			svg:hover .bl {
				transform: translate(-10px, 10px);
			}

			svg:hover .br {
				transform: translate(10px, 10px);
			}
		</style>
		<path class="tl" d="M10,10h30v10h-20v20h-10z" />
		<path class="tr" d="M60,10 h30v30h-10v-20h-20z" />
		<path class="bl" d="M10,60v30h30v-10h-20v-20z" />
		<path class="br" d="M80,60h10v30h-30v-10h20z" />
	</svg>
	<svelte:fragment slot="controls">
		<ColorInput title="Color" bind:value={color} />
	</svelte:fragment>
</Hst.Story>
