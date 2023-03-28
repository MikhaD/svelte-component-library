<svg viewBox="0 0 100 100">
	<circle class="left" r="25" cx="25" cy="50" fill="currentcolor" />
	<circle class="right" r="25" cx="25" cy="50" fill="teal" />
</svg>

<style lang="scss">
	circle {
		transform-origin: center;
		animation: left-right 1s alternate-reverse infinite linear;
	}
	.left {
		z-index: 1;
	}
	.right {
		rotate: 180deg;
		z-index: -1;
	}
	@keyframes left-right {
		0% {
			cx: 25px;
		}
		50% {
			cx: 50px;
		}
		100% {
			cx: 75px;
		}
	}
</style>
