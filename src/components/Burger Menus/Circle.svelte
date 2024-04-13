<script lang="ts">
	export let open = false;
	export let speed = 0.5;
</script>

<svg
	role="button"
	tabindex="-1"
	viewBox="0 0 100 100"
	on:click={() => (open = !open)}
	on:keypress={() => (open = !open)}
	style:--speed="{speed}s"
>
	<path class:open />
</svg>

<style lang="scss">
	svg {
		cursor: pointer;
		fill: none;
		outline: transparent;
	}
	path {
		stroke-linecap: round;
		stroke-linejoin: round;
		d: path("M8 18l84 0M8 50c1 0 83 0 84 0c-1 0-83 0-84 0M8 82l84 0");
		stroke: currentcolor;
		stroke-width: 16;
		&.open {
			d: path("M20 20l60 60M8 50c3-56 81-56 84 0c-3 56-81 56-84 0M20 80l60-60");
		}
	}
	@media (prefers-reduced-motion: no-preference) {
		path {
			transition: var(--speed);
		}
	}
</style>
