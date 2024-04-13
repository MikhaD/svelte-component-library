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
		d: path("M8 18L50 18L92 18M8 50H92M8 82L50 82L92 82");
		stroke: currentcolor;
		stroke-width: 16;
		&.open {
			d: path("M8 8L50 50L92 8M50 50h0M8 92L50 50L92 92");
		}
	}
	@media (prefers-reduced-motion: no-preference) {
		path {
			transition: var(--speed);
		}
	}
</style>
