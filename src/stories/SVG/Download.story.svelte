<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";

	export let Hst: Hst;

	let source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
	<path
		d="M71 73h9a19 19 0 10-11-36a25.7 25.7 0 10-50 11h-2.5a1 1 0 100 25h8.5"
		stroke="#000"
		stroke-width="8"
	/>
	<path d="M48 89l-20-20h13v-27h14v27h13z" fill="#000" />
</svg>
	`;
</script>

<Hst.Story title="SVGs/Download" icon="tabler:cloud-download" {source}>
	<svg viewBox="0 0 100 100" fill="none">
		<path
			d="M71 73h9a19 19 0 10-11-36a25.7 25.7 0 10-50 11h-2.5a1 1 0 100 25h8.5"
			stroke="#000"
			stroke-width="8"
		/>
		<path d="M48 89l-20-20h13v-27h14v27h13z" fill="#000" />
	</svg>
</Hst.Story>
