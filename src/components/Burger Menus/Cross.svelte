<script lang="ts">
	export let open = false;
</script>

<svg
	tabindex="-1"
	viewBox="0 0 100 100"
	on:click={() => (open = !open)}
	on:keypress={() => (open = !open)}
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
		d: path("M8 18L92 18M8 50H92M8 82L92 82");
		stroke: currentcolor;
		stroke-width: 16;
		&.open {
			d: path("M8 8L92 92M-110 50h92M8 92L92 8");
		}
	}
	@media (prefers-reduced-motion: no-preference) {
		path {
			transition: 0.2s;
		}
	}
</style>
