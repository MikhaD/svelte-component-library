<script lang="ts">
	/**
	 * The border radius % of the blocks. 0% is square, 50% is round.
	 *
	 * Min: 0, Max: 50
	 * @default 10
	 */
	export let border_radius = 10;
	/**
	 * The speed of the animation in seconds.
	 * @default 2
	 */
	export let speed = 2;
	/**
	 * The number of blocks.
	 *
	 * Min: 1, Max: 3
	 * @default 3
	 */
	export let count = 3;
	$: count = Math.min(3, Math.max(1, count));
	$: offset = count == 3 ? 0.665 : 0.38;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" style:--rx="{(border_radius / 100) * 45}px">
	{#key count}
		{#each Array(count) as _, i}
			<rect style="animation-delay: -{i * offset * speed}s" />
		{/each}
	{/key}
</svg>

<style lang="scss">
	rect {
		rx: var(--rx);
		width: 45px;
		height: 45px;
		fill: currentcolor;
		animation: slide var(--speed) linear infinite;
	}
	@keyframes slide {
		0%,
		12.5% {
			transform: translate(0, 0);
		}
		25%,
		37.5% {
			transform: translate(55%, 0);
		}
		50%,
		62.5% {
			transform: translate(55%, 55%);
		}
		75%,
		87.5% {
			transform: translate(0, 55%);
		}
	}
</style>
