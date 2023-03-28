<svg viewBox="0 0 100 100" fill="currentcolor">
	<g>
		<circle class="top" r="10" cx="50" cy="90" />
		<circle class="bottom" r="10" cx="50" cy="90" />
	</g>
</svg>

<style lang="scss">
	g {
		transform-origin: center;
		animation: rotate 1s linear infinite;
	}
	.bottom {
		rotate: 180deg;
	}
	circle {
		transform-origin: center;
		animation: up-down 2s alternate-reverse infinite ease-in-out;
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
