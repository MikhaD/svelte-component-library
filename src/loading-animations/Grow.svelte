<svg viewBox="0 0 100 100" fill="currentcolor">
	<path class="one" d="M50,0 l50,0 l0,50 l-50,0z" />
	<path class="two" d="M0,0 l50,0 l0,50 l-50,0z" />
	<path class="three" d="M50,50 l50,0 l0,50 l-50,0z" />
	<path class="four" d="M0,50 l50,0 l0,50 l-50,0z" />
</svg>

<style>
	.one {
		animation: one 2s ease-in-out infinite;
	}
	.two {
		animation: two 2s ease-in-out infinite;
	}
	.three {
		animation: three 2s ease-in-out infinite;
	}
	.four {
		transform-origin: bottom left;
		animation: four 2s ease-in-out infinite;
	}

	@keyframes one {
		0% {
			transform: translateY(0px);
		}
		20%,
		100% {
			transform: translateY(-100px);
		}
	}
	@keyframes two {
		0%,
		20% {
			transform: translateY(0px);
		}
		40%,
		100% {
			transform: translateY(-100px);
		}
	}
	@keyframes three {
		0%,
		40% {
			transform: translateY(0px);
		}
		60%,
		100% {
			transform: translateY(-100px);
		}
	}
	@keyframes four {
		0%,
		60% {
			transform: scale(1);
		}
		80%,
		100% {
			transform: scale(2);
		}
	}
</style>
