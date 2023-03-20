<svg viewBox="0 0 100 100" fill="currentcolor">
	<rect class="c" x="24" />
	<rect class="b" x="35" />
	<rect x="47" />
	<rect class="b" x="59" />
	<rect class="c" x="70" />
</svg>

<style>
	rect {
		rx: 3px;
		width: 6px;
		height: 10px;
		transform: translateY(45px);
		animation: oscillate 2s ease-in-out infinite;
	}
	.b {
		animation-delay: 0.5s;
	}
	.c {
		animation-delay: 1s;
	}
	@keyframes oscillate {
		0%,
		100% {
			height: 10px;
			transform: translateY(45px);
		}
		50% {
			height: 80px;
			transform: translateY(10px);
		}
	}
</style>
