<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;

	let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
	<path d="M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z" />
</svg>
	`;
</script>

<Hst.Story title="SVGs/Dilk" icon="lucide:image" {source}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
		<path d="M3 0H5V1H6V2H4V3H3V5H4V6H2V4H1V3H0V2H2V1H3z" />
	</svg>
</Hst.Story>
