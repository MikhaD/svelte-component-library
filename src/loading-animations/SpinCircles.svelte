<script lang="ts">
	/**
	 * The speed of the animation in seconds.
	 * @default 1
	 */
	export let speed = 1;
</script>

<svg viewBox="0 0 100 100" fill="currentcolor" style:--speed="{speed}s">
	<g>
		<circle class="top" r="10" cx="50" cy="90" />
		<circle class="bottom" r="10" cx="50" cy="90" />
	</g>
</svg>

<style lang="scss">
	g {
		transform-origin: center;
		animation: rotate var(--speed) linear infinite;
	}
	.bottom {
		rotate: 180deg;
	}
	circle {
		transform-origin: center;
		animation: up-down calc(var(--speed) * 2) alternate-reverse infinite ease-in-out;
	}
	@keyframes up-down {
		0% {
			cy: 90px;
			r: 10px;
		}
		100% {
			r: 20px;
			cy: 60px;
		}
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
