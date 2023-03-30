<script lang="ts">
	/**
	 * The speed of the animation in seconds.
	 * @default 1
	 */
	export let speed = 1;
	/**
	 * The number of rotations per animation cycle.
	 *
	 * @default 3
	 */
	export let rotations = 3;
	/**
	 * Whether the animation should play in reverse.
	 * @default false
	 */
	export let reverse = false;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" style:--rotations={rotations} class:reverse>
	<path d="M50 0v100a50 50 0 0050-50H0a50 50 0 0150-50z" />
</svg>

<style lang="scss">
	path {
		fill: currentcolor;
		transform-origin: center;
		animation: spin var(--speed) ease-in-out infinite;
	}
	.reverse path {
		animation-direction: reverse;
	}
	@keyframes spin {
		0% {
			rotate: 45deg;
		}
		80%,
		100% {
			rotate: calc(45deg + var(--rotations) * 360deg);
		}
	}
</style>
