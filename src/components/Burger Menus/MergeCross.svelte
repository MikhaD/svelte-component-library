<script lang="ts">
	export let open = false;
	export let duration = 0.5;
</script>

<svg
	role="button"
	tabindex="-1"
	viewBox="0 0 100 100"
	on:click={() => (open = !open)}
	on:keypress={() => (open = !open)}
	style:--duration="{duration / 2}s"
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
			y var(--duration) var(--duration),
			rotate var(--duration);
	}
	.b {
		transition: opacity 0s var(--duration);
	}
	@media (prefers-reduced-motion: no-preference) {
		svg.open {
			.a,
			.c {
				transition:
					y var(--duration),
					rotate var(--duration) var(--duration);
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
