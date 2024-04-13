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
	style:--speed="{speed / 2}s"
	class:open
>
	<rect class="a" y="10" />
	<rect class="b" y="42" />
	<rect class="c" y="74" />
</svg>

<style lang="scss">
	rect {
		width: 100px;
		height: 16px;
		rx: 8px;
		fill: currentcolor;
		transform-origin: center;
		transition:
			y var(--speed) var(--speed),
			rotate var(--speed);
	}
	.b {
		transition: opacity 0s var(--speed);
	}
	@media (prefers-reduced-motion: no-preference) {
		svg.open {
			.a,
			.c {
				transition:
					y var(--speed),
					rotate var(--speed) var(--speed);
				y: 42px;
			}
			.a {
				rotate: 45deg;
			}
			.b {
				opacity: 0;
			}
			.c {
				rotate: -45deg;
			}
		}
	}
</style>
