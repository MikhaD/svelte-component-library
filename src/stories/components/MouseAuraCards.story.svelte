<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import MAC from "../../components/MouseAuraCards.svelte/";

	export let Hst: Hst;
</script>

<Hst.Story title="Components/Mouse Aura Cards" icon="clarity:view-cards-line">
	<MAC.Container>
		<MAC.Card>
			<h3>test title</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea
				totam eveniet corporis porro deleniti architecto dolorem sapiente!
			</p>
		</MAC.Card>
		<MAC.Card>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea
			totam!
		</MAC.Card>
		<MAC.Card>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea
			totam eveniet corporis porro deleniti architecto dolorem sapiente!
		</MAC.Card>
		<MAC.Card>
			<h3>test title 2</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam unde ea
				totam!
			</p>
		</MAC.Card>
		<MAC.Card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</MAC.Card>
	</MAC.Container>
</Hst.Story>
