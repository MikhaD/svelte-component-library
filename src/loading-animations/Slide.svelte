<svg viewBox="0 0 100 100" fill="currentcolor">
	<defs>
		<g id="rect">
			<path d="M33.33 0.5L66.66 20.5L66.66 30.5L33.33 10.5L33.33 0.5Z" fill-opacity="0.4" />
			<path d="M0 30.5L33.33 10.5V0.5L0 20.5V30.5Z" />
			<path d="M0 20.5L33.33 40.5L33.33 50.5L0 30.5L0 20.5Z" fill-opacity="0.4" />
			<path d="M33.33 50.5L66.66 30.5V20.5L33.33 40.5V50.5Z" />
		</g>
	</defs>
	<use id="a" href="#rect" />
	<use id="b" href="#rect" />
</svg>

<style>
	#a {
		animation: slide 4s ease infinite;
	}

	#b {
		animation: slide2 4s ease infinite;
	}

	@keyframes slide {
		0%,
		15%,
		100% {
			transform: translate(0%, 15px);
		}

		25%,
		40% {
			transform: translate(33.33%, 15px);
		}

		50%,
		65% {
			transform: translate(33.33%, 35px);
		}

		75%,
		90% {
			transform: translate(0%, 35px);
		}
	}

	@keyframes slide2 {
		0%,
		15%,
		100% {
			transform: translate(33.33%, 35px);
		}

		25%,
		40% {
			transform: translate(0%, 35px);
		}

		50%,
		65% {
			transform: translate(0%, 15px);
		}

		75%,
		90% {
			transform: translate(33.33%, 15px);
		}
	}
</style>
