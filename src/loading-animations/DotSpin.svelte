<script lang="ts">
	/**
	 * The number of spinning circles. Must be even.
	 *
	 * Min: 2
	 * @default 2
	 */
	export let count = 2;
	$: count = Math.max(2, count) - (count % 2);
	/**
	 * The duration of the animation in seconds.
	 * @default 1
	 */
	export let duration = 1;
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

<svg viewBox="0 0 100 100" style:--duration="{duration}s" class:reverse style:--r="{r}px">
	<circle cx="50" cy="50" />
	{#key count}
		{#each new Array(count) as _, i}
			<circle class="outer" cx="50" cy="50" style:--angle="{(i * 360) / count}deg" />
		{/each}
	{/key}
</svg>

<style lang="scss">
	circle {
		--offset: calc(50px - var(--r));
		r: var(--r);
		fill: currentcolor;
		transform-origin: center;
		transform: translate(
			calc(cos(var(--angle)) * var(--offset)),
			calc(sin(var(--angle)) * var(--offset))
		);
	}
	.outer {
		animation: spin var(--duration) infinite ease-out;
	}
	.reverse .outer {
		animation-direction: reverse;
		animation-timing-function: ease-in;
	}
	@keyframes spin {
		0%,
		30% {
			rotate: 0deg;
		}
		to {
			rotate: 180deg;
		}
	}
</style>
