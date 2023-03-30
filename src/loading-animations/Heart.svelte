<script lang="ts">
	export let speed = 1;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s">
	<path d="M50 25C55 0 100 0 100 35C100 60 70 70 50 95C30 70 0 60 0 35C0 0 45 0 50 25" />
</svg>

<style lang="scss">
	path {
		fill: var(--accent-00, teal);
		transform-origin: center;
		animation: snap var(--speed) infinite linear;
	}
	@keyframes snap {
		0% {
			scale: 0.7;
		}
		5% {
			scale: 1;
		}
		30% {
			scale: 0.7;
		}
		35% {
			scale: 1;
		}
		70%,
		100% {
			scale: 0.7;
		}
	}
</style>
