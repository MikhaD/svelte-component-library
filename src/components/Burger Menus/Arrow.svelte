<script lang="ts">
	import { DIRECTION } from "./enums";

	export let open = false;
	export let duration = 0.5;
	export let direction = DIRECTION.LEFT;
</script>

<svg
	role="button"
	tabindex="-1"
	viewBox="0 0 100 100"
	on:click={() => (open = !open)}
	on:keypress={() => (open = !open)}
	style:--duration="{duration}s"
	style:--direction="{direction}deg"
>
	<g class:open>
		<path />
	</g>
</svg>

<style lang="scss">
	svg {
		cursor: pointer;
		fill: none;
		outline: transparent;
		transform: rotate(var(--direction));
	}
	g {
		transform-origin: center;
	}
	path {
		stroke-linecap: round;
		d: path("M8 18L92 18M8 50H92M8 82L92 82");
		stroke: currentcolor;
		stroke-width: 16;
	}
	.open {
		transform: rotate(180deg);
		path {
			d: path("M60 18L92 50M8 50H92M60 82L92 50");
		}
	}
	@media (prefers-reduced-motion: no-preference) {
		g,
		path {
			transition: var(--duration);
		}
	}
</style>
