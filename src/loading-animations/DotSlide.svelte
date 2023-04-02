<script lang="ts">
	/**
	 * The speed of the animation in seconds.
	 * @default 1
	 */
	export let speed = 1;
	/**
	 * Whether the animation should play in reverse.
	 * @default false
	 */
	export let reverse = false;
	/**
	 * The radius of the dots.
	 * @default 15
	 */
	export let r = 15;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" class:reverse style:--r="{r}px">
	<circle cx={r} cy="50" />
	<circle class="inner" cx={r} cy="50" />
	<circle class="inner" cx="50" cy="50" />
	<circle cx={100 - r} cy="50" />
</svg>

<style lang="scss">
	circle {
		r: var(--r);
		fill: currentcolor;
		animation: var(--speed) infinite ease-in-out;
	}
	.inner {
		animation-name: slide;
	}
	circle:first-child {
		animation-name: grow;
	}
	circle:last-child {
		animation-name: shrink;
	}
	.reverse {
		circle {
			animation-direction: reverse;
		}
	}
	@keyframes grow {
		0% {
			r: 0px;
			cx: 0px;
		}
		80%,
		100% {
			r: var(--r);
			cx: var(--r);
		}
	}
	@keyframes shrink {
		0% {
			r: var(--r);
			cx: calc(100px - var(--r));
		}
		80%,
		100% {
			r: 0px;
			cx: 100px;
		}
	}
	@keyframes slide {
		0% {
			translate: 0;
		}
		80%,
		100% {
			translate: calc(50px - var(--r));
		}
	}
</style>
