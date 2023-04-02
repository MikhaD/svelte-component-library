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
	 *
	 * Min: 1
	 * @default 25
	 */
	export let length = 25;
	$: length = Math.max(1, length);
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" style:--width="{width}px">
	<g style="stroke-dasharray: {length} {50 - length}; stroke-dashoffset: {length}">
		{#key count}
			{#each Array(count) as _, i}
				<path
					d="M0 0V50"
					style:--angle="{(i * 360) / count}deg"
					style:--delay="{(speed / count) * i}s"
				/>
			{/each}
		{/key}
	</g>
</svg>

<style lang="scss">
	g {
		transform-origin: center;
	}
	path {
		stroke-width: var(--width);
		stroke: currentcolor;
		transform-origin: center;
		transform: rotate(var(--angle)) translate(50%, 50%);
		animation: fade var(--speed) var(--delay) linear infinite;
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
