<script lang="ts">
	/**
	 * The duration of the animation in seconds.
	 * @default 2
	 */
	export let duration = 2;
	/**
	 * The number of bars. Must be odd.
	 *
	 * Min: 1
	 * @default 5
	 */
	export let count = 5;
	$: count = Math.max(1, count) + (1 - (count % 2));
	/**
	 * The width of area that the bars are within in the center of the SVG.
	 * @default 50
	 */
	export let width = 50;
	/**
	 * The width of the bars.
	 * @default 6
	 */
	export let bar_width = 6;
	// min of 1, must be odd
	$: gap = (100 - width) / 2;
	$: delays = (count - 1) / 2;
</script>

<svg viewBox="0 0 100 100" style:--duration="{duration}s" style:--bar-width="{bar_width}px">
	{#key count}
		{#each Array(delays) as _, i}
			<rect
				x={gap - bar_width / 2 + (width / (count - 1)) * i}
				style="animation-delay: {(duration / 2) * ((delays - i) / delays)}s"
			/>
		{/each}
		<rect x={50 - bar_width / 2} />
		{#each Array(delays) as _, i}
			<rect
				x={100 - gap - bar_width / 2 - (width / (count - 1)) * i}
				style="animation-delay: {(duration / 2) * ((delays - i) / delays)}s"
			/>
		{/each}
	{/key}
</svg>

<style>
	rect {
		rx: calc(var(--bar-width) / 2);
		width: var(--bar-width);
		height: 10px;
		fill: currentcolor;
		transform: translateY(45px);
		animation: oscillate var(--duration) ease-in-out infinite;
	}
	@keyframes oscillate {
		0%,
		100% {
			height: 10px;
			transform: translateY(45px);
		}
		50% {
			height: 80px;
			transform: translateY(10px);
		}
	}
</style>
