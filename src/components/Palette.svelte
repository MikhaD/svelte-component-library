<script lang="ts">
  export let colors = 8;
  export let saturation = 100;
  export let lightness = 50;

  function x(n: number) {
    return Math.sin((2 * Math.PI) / colors) * n;
  }

  function y(n: number) {
    return n - Math.cos((2 * Math.PI) / colors) * n;
  }
  // Sharp angle (doesnt work for 2)
  // `M50 0 l${x(50)} ${y(50)}L${50+x(25)} ${25+y(25)}L50 25z`
  $: path =
    colors > 1
      ? `M50 0 a50 50 0 01 ${x(50)} ${y(50)}L${50 + x(25)} ${25 + y(25)}A25 25 0 00 50 25`
      : "M50 0a50 50 0 01 0 100a50 50 0 01 0-100m0 25a25 25 0 01 0 50a25 25 0 01 0-50";

  let current_color = "";
  async function copyColor(
    event: MouseEvent & { currentTarget: SVGPathElement }
  ) {
    const rgb = getComputedStyle(event.currentTarget).fill;
    const hex =
      "#" +
      rgb
        .slice(4, -1)
        .split(", ")
        .map((d) => parseInt(d).toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();
    await navigator.clipboard.writeText(hex);
    current_color = hex;
    setTimeout(() => (current_color = ""), 1000);
  }
</script>

<div class="container">
  <svg viewBox="0 0 100 100">
    {#key colors}
      {#each Array(colors) as _, i}
        {@const rotation = (360 / colors) * i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <path
          d={path}
          style:rotate="{rotation}deg"
          style:fill="hsl({rotation}
          {saturation}
          {lightness})"
          on:click={copyColor}
        />
      {/each}
    {/key}
  </svg>
  {#if current_color !== ""}
    <div class="copied" style:--color={current_color}>
      {current_color} copied
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    position: relative;
  }
  .copied {
    position: absolute;
    inset: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
    background-color: var(--color);
    color: black;
    padding: 1rem 2rem;
    border-radius: 100rem;
  }
  path {
    transform-origin: center;
    fill-rule: evenodd;
    transition: scale ease 0.15s;
    &:hover {
      scale: 0.95;
      cursor: pointer;
    }
  }
</style>
