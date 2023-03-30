<script lang="ts">
	export let speed = 2;
	export let reverse = false;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" class:reverse>
	<path class="a" d="M0,0 l100,0 l0,100 l-100,0z" />
	<path class="b" d="M50,-50 l50,0 l0,50 l-50,0z" />
	<path class="c" d="M0,-100 l50,0 l0,50 l-50,0z" />
	<path class="d" d="M50,-100 l50,0 l0,50 l-50,0z" />
</svg>

<style>
	path {
		fill: currentcolor;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		animation-duration: var(--speed);
	}
	.a {
		animation-name: a;
		transform-origin: bottom left;
	}
	.b {
		animation-name: b;
	}
	.c {
		animation-name: c;
	}
	.d {
		animation-name: d;
	}
	.reverse path {
		animation-direction: reverse;
	}

	@keyframes a {
		0% {
			transform: scale(1);
		}
		20%,
		100% {
			transform: scale(0.5);
		}
	}
	@keyframes b {
		0%,
		40% {
			transform: translateY(0px);
		}
		60%,
		100% {
			transform: translateY(100px);
		}
	}
	@keyframes c {
		0%,
		60% {
			transform: translateY(0px);
		}
		80%,
		100% {
			transform: translateY(100px);
		}
	}
	@keyframes d {
		0%,
		80% {
			transform: translateY(0px);
		}
		100% {
			transform: translateY(100px);
		}
	}
</style>
