<script context="module">
	export const DIRECTION = {
		LEFT: 0,
		UP: 90,
		RIGHT: 180,
		DOWN: 270,
	};
</script>

<script lang="ts">
	export let open = false;
	export let speed = 0.5;
	export let direction = DIRECTION.LEFT;
</script>

<svg
	role="button"
	tabindex="-1"
	viewBox="0 0 100 100"
	on:click={() => (open = !open)}
	on:keypress={() => (open = !open)}
	style:--speed="{speed}s"
	style:--direction="{direction}deg"
>
	<path class:open />
</svg>

<style lang="scss">
	svg {
		cursor: pointer;
		fill: none;
		outline: transparent;
		transform: rotate(var(--direction));
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
			transition: var(--speed);
		}
	}
</style>
