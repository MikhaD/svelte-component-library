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
		d: path("M8 18L50 18L92 18M8 50H92M8 82L50 82L92 82");
		stroke: currentcolor;
		stroke-width: 16;
		&.open {
			d: path("M8 8L50 50L92 8M50 50h0M8 92L50 50L92 92");
		}
	}
	@keyframes merge {
		0% {
			d: path("M8 18L50 18L92 18M8 50H92M8 82L50 82L92 82");
		}
		50% {
			d: path("M50 50L50 50L50 50M50 50H50M50 50L50 50L50 50");
		}
		100% {
			d: path("M8 8L50 50L92 8M50 50h0M8 92L50 50L92 92");
		}
	}
	@keyframes unmerge {
		0% {
			d: path("M8 8L50 50L92 8M50 50h0M8 92L50 50L92 92");
		}
		50% {
			d: path("M50 50L50 50L50 50M50 50H50M50 50L50 50L50 50");
		}
		100% {
			d: path("M8 18L50 18L92 18M8 50H92M8 82L50 82L92 82");
		}
	}
	@media (prefers-reduced-motion: no-preference) {
		path {
			animation: unmerge var(--speed) forwards;
			&.open {
				animation: merge var(--speed) forwards;
			}
		}
	}
</style>
