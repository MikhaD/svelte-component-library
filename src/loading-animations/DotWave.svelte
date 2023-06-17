<script lang="ts">
	/**
	 * The number of spinning circles.
	 *
	 * Min: 1
	 * @default 1
	 */
	export let count = 1;
	$: count = Math.max(1, count);
	/**
	 * The speed of the animation in seconds.
	 * @default 1
	 */
	export let speed = 1;
	/**
	 * Whether the animation should play in reverse.
	 * @default false
	 */
	export let reverse = false;
	/**
	 * The radius of the dots.
	 * @default 15
	 */
	export let r = 15;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" class:reverse style:--r="{r}px">
	{#key count}
		{#each new Array(count) as _, i}
			<circle cx={((i + 1) * 100) / count - r} cy="50" />
		{/each}
	{/key}
</svg>

<style lang="scss">
	circle {
		r: var(--r);
		fill: currentcolor;
		transform-origin: center;
		// animation: spin var(--speed) infinite ease-out;
	}
	.reverse circle {
		animation-direction: reverse;
		animation-timing-function: ease-in;
	}
</style>
