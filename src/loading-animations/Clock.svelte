<script lang="ts">
	/**
	 * The duration of the animation in seconds.
	 * @default 1
	 */
	export let duration = 1;
</script>

<svg viewBox="0 0 100 100" style:--duration="{duration}s" fill="none">
	<circle cx="50" cy="50" r="45" />
	<path class="minute" d="M50 50v-30" />
	<path class="hour" d="M50 50v-20" />
</svg>

<style lang="scss">
	svg {
		stroke-width: 10px;
		stroke: currentcolor;
	}
	path {
		transform-origin: center;
		stroke-linecap: round;
	}
	.minute {
		animation: rotate var(--duration) linear infinite;
	}
	.hour {
		animation: rotate calc(var(--duration) * 12) linear infinite;
	}
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
