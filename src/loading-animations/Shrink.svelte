<svg viewBox="0 0 100 100" fill="currentcolor">
	<path class="one" d="M0,0 l100,0 l0,100 l-100,0z" />
	<path class="two" d="M50,-50 l50,0 l0,50 l-50,0z" />
	<path class="three" d="M0,-100 l50,0 l0,50 l-50,0z" />
	<path class="four" d="M50,-100 l50,0 l0,50 l-50,0z" />
</svg>

<style>
	.one {
		transform-origin: bottom left;
		animation: one 2s ease-in-out infinite;
	}
	.two {
		animation: two 2s ease-in-out infinite;
	}
	.three {
		animation: three 2s ease-in-out infinite;
	}
	.four {
		animation: four 2s ease-in-out infinite;
	}

	@keyframes one {
		0% {
			transform: scale(1);
		}
		20%,
		100% {
			transform: scale(0.5);
		}
	}
	@keyframes two {
		0%,
		40% {
			transform: translateY(0px);
		}
		60%,
		100% {
			transform: translateY(100px);
		}
	}
	@keyframes three {
		0%,
		60% {
			transform: translateY(0px);
		}
		80%,
		100% {
			transform: translateY(100px);
		}
	}
	@keyframes four {
		0%,
		80% {
			transform: translateY(0px);
		}
		100% {
			transform: translateY(100px);
		}
	}
</style>
