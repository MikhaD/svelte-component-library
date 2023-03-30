<script lang="ts">
	export let speed = 1;
	export let rotations = 3;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" style:--rotations={rotations}>
	<path d="M50 0v100a50 50 0 0050-50H0a50 50 0 0150-50z" />
</svg>

<style lang="scss">
	path {
		fill: currentcolor;
		transform-origin: center;
		animation: spin var(--speed) ease-in-out infinite;
	}
	@keyframes spin {
		0% {
			rotate: 45deg;
		}
		80%,
		100% {
			rotate: calc(45deg + var(--rotations) * 360deg);
		}
	}
</style>
