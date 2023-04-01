<script lang="ts">
	/**
	 * The speed of the animation in seconds.
	 * @default 2
	 */
	export let speed = 2;
	/**
	 * The number of blocks in each row.
	 *
	 * Min: 1
	 * @default 4
	 */
	export let count = 4;
	$: count = Math.max(1, count);
	$: frac = 100 / count;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s">
	{#key count}
		{#each Array(count) as _, i}
			{#each Array(count) as _, j}
				<rect
					x={i * frac}
					y={j * frac}
					width={frac}
					height={frac}
					style:--delay="{(speed / (count * 5)) * (i + j)}s"
					style="transform-origin: {i * frac + 50 / count}% {j * frac + 50 / count}%"
				/>
			{/each}
		{/each}
	{/key}
</svg>

<style lang="scss">
	rect {
		fill: currentcolor;
		stroke-width: 0.5;
		animation: scale var(--speed) var(--delay) ease-in-out infinite;
	}
	@keyframes scale {
		0% {
			scale: 1;
		}
		15% {
			scale: 0.5;
		}
		30%,
		100% {
			scale: 1;
		}
	}
</style>
