<svg viewBox="0 0 100 100" fill="currentcolor">
	<rect class="right" x="10" y="10" width="80" height="80" />
	<rect class="left" x="10" y="10" width="80" height="80" />
</svg>

<style>
	rect {
		transform-box: fill-box;
		transform-origin: center;
	}

	.right {
		animation: right 3s ease-in-out infinite;
	}
	.left {
		animation: left 3s ease-in-out infinite;
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
		50% {
			rx: 50%;
			scale: 0.25;
		}
		75% {
			rx: 0;
		}
		100% {
			scale: 1;
			rx: 0;
			rotate: 720deg;
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
		50% {
			rx: 50%;
			scale: 0.25;
		}
		75% {
			rx: 0;
		}
		100% {
			scale: 1;
			rx: 0;
			rotate: -720deg;
		}
	}
</style>
