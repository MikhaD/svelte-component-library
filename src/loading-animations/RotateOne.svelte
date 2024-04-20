<script lang="ts">
	/**
	 * The number of bars.
	 *
	 * Min: 1
	 * @default 2
	 */
	export let count = 2;
	$: count = Math.max(1, count);
	/**
	 * The speed of the animation in seconds.
	 * @default 2
	 */
	export let speed = 2;
	/**
	 * The width of the bars.
	 *
	 * Min: 1
	 * @default 10
	 */
	export let width = 10;
	$: width = Math.max(1, width);
	/**
	 * The length of the bars.
	 * @default 25
	 */
	export let length = 25;
	/**
	 * Whether the line caps are rounded.
	 * @default false
	 */
	export let round = false;
	/**
	 * The offset from the center.
	 * @default 25
	 */
	export let offset = 25;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" style:--width="{width}px" class:round>
	{#key count + length + Number(round)}
		{#each Array(count) as _, i}
			<path
				d="M50 {50 + offset}v{length}"
				style:--angle="{(i * 360) / count}deg"
				style:--delay="{(speed / count) * i}s"
			/>
		{/each}
	{/key}
</svg>

<style lang="scss">
	path {
		stroke-width: var(--width);
		stroke: currentcolor;
		transform-origin: center;
		transform: rotate(var(--angle));
		animation: fade var(--speed) var(--delay) linear infinite;
	}
	.round {
		stroke-linecap: round;
	}
	@keyframes fade {
		0% {
			opacity: 1;
		}
		75%,
		100% {
			opacity: 0;
		}
	}
</style>
