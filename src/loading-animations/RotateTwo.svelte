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
	 * The duration of the animation in seconds.
	 * @default 2
	 */
	export let duration = 2;
	/**
	 * The width of the bars.
	 *
	 * Min: 1
	 * @default 10
	 */
	export let radius = 4;
	/**
	 * The offset from the center.
	 * @default 25
	 */
	export let offset = 25;
</script>

<svg
	viewBox="0 0 100 100"
	style:--duration="{duration}s"
	style:--offset="{offset}px"
	style:--r="{radius}px"
>
	{#key count + radius + duration}
		{#each Array(count) as _, i}
			<circle
				cx="50"
				cy="50"
				style:--angle="{(i * 360) / count}deg"
				style:--delay="{(duration / count) * i}s"
			/>
		{/each}
	{/key}
</svg>

<style lang="scss">
	circle {
		fill: currentcolor;
		transform-origin: center;
		transform: rotate(var(--angle)) translateX(var(--offset));
		animation: fade var(--duration) var(--delay) linear infinite;
	}
	@keyframes fade {
		0% {
			r: var(--r);
		}
		75%,
		100% {
			r: 0;
		}
	}
</style>
