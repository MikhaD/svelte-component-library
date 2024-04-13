<script lang="ts">
	/**
	 * The number of slices in the pie.
	 *
	 * Min: 2
	 * @default 8
	 */
	export let count = 8;
	$: count = Math.max(2, count);
	/**
	 * The speed of the animation in seconds.
	 * @default 1
	 */
	export let speed = 1;
	/**
	 * The value to scale each slice down by.
	 *
	 * Min: 0.1, Max: 0.9
	 * @default 0.5
	 */
	export let scale = 0.5;
	$: scale = Math.min(Math.max(0.1, scale), 0.9);
	/**
	 * Whether the animation should play in reverse.
	 * @default false
	 */
	export let reverse = false;

	$: x = Math.sin((2 * Math.PI) / count) * 50;
	$: y = 50 - Math.cos((2 * Math.PI) / count) * 50;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" style:--scale={scale} class:reverse>
	{#key count}
		{#each Array(count) as _, i}
			{@const rotation = (360 / count) * i}
			<path
				d="M50 0a50 50 0 01 {x} {y}L50 50"
				style:rotate="{rotation}deg"
				style:filter="hue-rotate({rotation}deg)"
				style="animation-delay: -{speed - (speed / count) * i}s"
			/>
		{/each}
	{/key}
</svg>

<style lang="scss">
	path {
		fill: var(--accent-00, teal);
		transform-origin: center;
		animation: snap var(--speed) infinite linear;
	}
	.reverse path {
		animation-direction: reverse;
	}
	@keyframes snap {
		to {
			scale: var(--scale);
		}
	}
</style>
