<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import Palette from "../../components/Palette.svelte";

  export let Hst: Hst;

  let colors = 8;
  let saturation = 50;
  let lightness = 70;
</script>

<!-- svelte-ignore reactive-component -->
<Hst.Story
  title="Components/Palette"
  icon="ic:outline-palette"
>
  <Palette {colors} {saturation} {lightness}/>

  <svelte:fragment slot="controls">
	<Hst.Slider bind:value={colors} title="Colors" min={1} max={360} />
	<Hst.Slider bind:value={saturation} title="Saturation" min={0} max={100} />
	<Hst.Slider bind:value={lightness} title="Lightness" min={0} max={100} />
</svelte:fragment>
</Hst.Story>
