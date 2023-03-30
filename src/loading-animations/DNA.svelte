<script lang="ts">
	/**
	 * The number of circles in each row.
	 *
	 * Min: 1
	 * @default 10
	 */
	export let count = 10;
	/**
	 * The starting radius of the circles in the top row, and the destination radius of the the
	 * circles in the bottom row.
	 * @default 4
	 */
	export let r = 4;
	/**
	 * The starting radius of the circles in the bottom row, and the destination radius of the the
	 * circles in the top row.
	 * @default r / 1.75
	 */
	export let r2 = r / 1.75;
	/**
	 * The gap between the top and bottom rows.
	 * @default 36
	 */
	export let height = 36;
	/**
	 * The speed of the animation in seconds.
	 * @default 1
	 */
	export let speed = 1;
	$: count = Math.max(1, count);
	$: delay = speed / 5;
</script>

<svg
	viewBox="0 0 100 100"
	style:--r="{r}px"
	style:--r2="{r2}px"
	style:--top="{(100 - height) / 2}px"
	style:--bottom="{100 - (100 - height) / 2}px"
	style:--speed="{speed}s"
>
	{#key count}
		{#each new Array(count) as _, i}
			{@const gap = 100 - (100 / (count + 1)) * (i + 1)}
			<circle cx={gap} class="top" style="animation-delay: {delay * i}s" />
			<circle cx={gap} class="bottom" style="animation-delay: {delay * i}s" />
		{/each}
	{/key}
</svg>

<style lang="scss">
	.top {
		r: var(--r);
		cy: var(--top);
		fill: var(--accent-00, teal);
		animation: sink var(--speed) ease-in-out alternate infinite;
	}
	.bottom {
		r: var(--r2);
		cy: var(--bottom);
		fill: currentcolor;
		animation: rise var(--speed) ease-in-out alternate infinite;
	}
	@keyframes sink {
		to {
			r: var(--r2);
			cy: var(--bottom);
			filter: hue-rotate(50deg);
		}
	}
	@keyframes rise {
		to {
			r: var(--r);
			cy: var(--top);
			filter: hue-rotate(50deg);
		}
	}
	// If I was doing this without JS, I'd use this (top & bottom class circles should alternate):

	// $count: 10;
	// @for $i from 1 through $count {
	// 	$cx: 100 - (100 / ($count + 1)) * $i;
	// 	circle:nth-of-type(#{$i * 2}) {
	// 		cx: #{$cx}px;
	// 		animation-delay: #{$i * 0.1}s;
	// 	}
	// 	circle:nth-of-type(#{$i * 2 - 1}) {
	// 		cx: #{$cx}px;
	// 		animation-delay: #{$i * 0.1}s;
	// 	}
	// }
</style>
