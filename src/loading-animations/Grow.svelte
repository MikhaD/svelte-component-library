<script lang="ts">
	/**
	 * The duration of the animation in seconds.
	 * @default 2
	 */
	export let duration = 2;
	/**
	 * Whether the animation should play in reverse.
	 * @default false
	 */
	export let reverse = false;
</script>

<svg viewBox="0 0 100 100" style:--duration="{duration}s" class:reverse>
	<path class="a" d="M50,0 l50,0 l0,50 l-50,0z" />
	<path class="b" d="M0,0 l50,0 l0,50 l-50,0z" />
	<path class="c" d="M50,50 l50,0 l0,50 l-50,0z" />
	<path class="d" d="M0,50 l50,0 l0,50 l-50,0z" />
</svg>

<style>
	path {
		fill: currentcolor;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		animation-duration: var(--duration);
	}
	.a {
		animation-name: a;
	}
	.b {
		animation-name: b;
	}
	.c {
		animation-name: c;
	}
	.d {
		animation-name: d;
		transform-origin: bottom left;
	}
	.reverse path {
		animation-direction: reverse;
	}

	@keyframes a {
		0% {
			transform: translateY(0px);
		}
		20%,
		100% {
			transform: translateY(-100px);
		}
	}
	@keyframes b {
		0%,
		20% {
			transform: translateY(0px);
		}
		40%,
		100% {
			transform: translateY(-100px);
		}
	}
	@keyframes c {
		0%,
		40% {
			transform: translateY(0px);
		}
		60%,
		100% {
			transform: translateY(-100px);
		}
	}
	@keyframes d {
		0%,
		60% {
			transform: scale(1);
		}
		80%,
		100% {
			transform: scale(2);
		}
	}
</style>
