<script lang="ts">
	/**
	 * The number of spinning circles.
	 *
	 * Min: 1
	 * @default 2
	 */
	export let count = 2;
	$: count = Math.max(1, count);
	/**
	 * The distance the circles travel towards the center. 1 is the full distance, 0 is no distance.
	 *
	 * Min: 0, Max: 1
	 * @default 1
	 */
	export let merge = 1;
	/**
	 * The starting radius of the circles (when they're on the outside).
	 */
	export let r = 10;
	/**
	 * The ending radius of the circles (when they're in the center).
	 */
	export let r2 = 10;
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
</script>

<svg
	viewBox="0 0 100 100"
	fill="currentcolor"
	style:--speed="{speed}s"
	style:--merge={merge}
	style:--r="{r}px"
	style:--r2="{r2}px"
	class:reverse
>
	<g>
		{#key count}
			{#each Array(count) as _, i}
				<circle cx="50" cy="50" style:--angle="{(i * 360) / count}deg" />
			{/each}
		{/key}
	</g>
</svg>

<style lang="scss">
	g {
		--offset: calc(50px - var(--r));
		transform-origin: center;
		animation: rotate var(--speed) linear infinite;
	}
	.reverse g {
		animation-direction: reverse;
	}
	circle {
		r: var(--r);
		transform-origin: center;
		transform: translate(
			calc(cos(var(--angle)) * var(--offset)),
			calc(sin(var(--angle)) * var(--offset))
		);
		animation: up-down calc(var(--speed) * 2) alternate infinite ease-in-out;
	}
	@keyframes up-down {
		to {
			transform: translate(
				calc(cos(var(--angle)) * calc((1 - var(--merge)) * var(--offset))),
				calc(sin(var(--angle)) * calc((1 - var(--merge)) * var(--offset)))
			);
			r: var(--r2);
		}
	}
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
