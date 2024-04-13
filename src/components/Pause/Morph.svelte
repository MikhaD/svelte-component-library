<script lang="ts">
	export let paused = false;
</script>

<svg
	viewBox="0 0 64 64"
	role="button"
	class:paused
	tabindex="-1"
	on:click={() => (paused = !paused)}
	on:keypress={() => (paused = !paused)}
>
	<path class="left" d="M6,0L22,0V64L6,64z" />
	<path class="right" d="M42,0L58,0V64L42,64z" />
</svg>

<style lang="scss">
	svg {
		cursor: pointer;
		outline: none;
		fill: currentcolor;
	}
	@media (prefers-reduced-motion: no-preference) {
		path {
			transition: 0.4s;
		}
	}

	svg.paused {
		.left {
			d: path("M6,0L32,16V48L6,64z");
		}
		.right {
			d: path("M32,16L58,32V32L32,48z");
		}
	}
</style>
