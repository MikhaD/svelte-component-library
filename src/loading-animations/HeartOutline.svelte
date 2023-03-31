<script lang="ts">
	/**
	 * The speed of the animation in seconds.
	 * @default 1
	 */
	export let speed = 2;
	/**
	 * Whether the animation should play in reverse.
	 * @default false
	 */
	export let reverse = false;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" class:reverse>
	<path d="M50 25C55 0 100 0 100 35C100 60 70 70 50 95" />
	<path d="M50 25C45 0 0 0 0 35C0 60 30 70 50 95z" />
</svg>

<style lang="scss">
	path {
		fill: none;
		scale: 0.7;
		stroke-width: 10;
		stroke: currentcolor;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-dasharray: 0 300;
		transform-origin: center;
		animation: form var(--speed) infinite ease-out;
	}
	.reverse path {
		animation-direction: reverse;
		animation-timing-function: ease-in;
	}
	@keyframes form {
		0% {
			stroke-dashoffset: 0;
		}
		20% {
			stroke-dashoffset: -155;
			stroke-dasharray: 0 300;
		}
		40% {
			stroke-dasharray: 155 300;
			stroke-dashoffset: 0;
			scale: 0.7;
		}
		45% {
			scale: 0.9;
		}
		50% {
			scale: 0.7;
		}
		55% {
			scale: 0.9;
		}
		60% {
			scale: 0.7;
		}
		75% {
			stroke-dasharray: 155 300;
			stroke-dashoffset: 0;
		}
	}
</style>
