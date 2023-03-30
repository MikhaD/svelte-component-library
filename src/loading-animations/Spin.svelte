<script lang="ts">
	export let speed = 3;
	export let scale = 0.25;
	export let border_width = 0;
</script>

<svg
	viewBox="0 0 100 100"
	style:--speed="{speed}s"
	style:--scale={scale}
	style:--stroke="{border_width}px"
>
	<rect class="right" x="15" y="15" width="70" height="70" />
	<rect class="left" x="15" y="15" width="70" height="70" />
</svg>

<style>
	rect {
		fill: currentcolor;
		transform-origin: center;
		stroke: var(--accent-00, teal);
		stroke-width: var(--stroke);
	}
	.right {
		animation: right var(--speed) ease-in-out infinite alternate;
	}
	.left {
		animation: left var(--speed) ease-in-out infinite alternate;
	}

	@keyframes right {
		0% {
			rx: 0;
			scale: 1;
			rotate: 0;
		}
		25% {
			rx: 0;
		}
		100% {
			rx: 50%;
			scale: var(--scale);
			rotate: 360deg;
		}
	}
	@keyframes left {
		0% {
			rx: 0;
			scale: 1;
			rotate: 0;
		}
		25% {
			rx: 0;
		}
		100% {
			rx: 50%;
			scale: var(--scale);
			rotate: -360deg;
		}
	}
</style>
