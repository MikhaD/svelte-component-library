<script lang="ts">
	export let paused = false;
</script>

<svg
	viewBox="0 0 64 64"
	class:paused
	tabindex="-1"
	on:click={() => (paused = !paused)}
	on:keypress={() => (paused = !paused)}
>
	<g>
		<path class="left" d="M6,0h16V64H6z" />
		<path class="right" d="M58,0H42V64h16z" />
	</g>
</svg>

<style lang="scss">
	svg {
		cursor: pointer;
		overflow: visible;
		outline: none;
		fill: currentcolor;
	}
	g {
		transform-origin: center;
		animation-fill-mode: forwards;
		animation-name: rotate-backwards;
	}
	@media (prefers-reduced-motion: no-preference) {
		path {
			transition: 0.4s;
		}
		g {
			animation-duration: 0.4s;
		}
	}
	svg.paused {
		g {
			animation-name: rotate-forwards;
		}
		.left {
			// d: path("M32,6h0v52h-32z");
			d: path("M32,0h0v52h-32z");
		}
		.right {
			// d: path("M32,6h0v52h32z");
			d: path("M32,0h0v52h32z");
		}
	}

	@keyframes rotate-forwards {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(90deg);
		}
	}
	@keyframes rotate-backwards {
		0% {
			transform: rotate(90deg);
		}
		100% {
			transform: rotate(180deg);
		}
	}
</style>
