<script lang="ts">
	export let light = false;
</script>

<svg
	viewBox="0 0 18 18"
	class:light
	tabindex="-1"
	on:click={() => (light = !light)}
	on:keypress={() => (light = !light)}
>
	<path d="M12.94 0.9A9 9 0 1 0 12.94 17.1c6.75 -3.37 6.75 -12.83 0 -16.2z" />
	<circle class="a" cx="9" cy="1" r="1" />
	<circle class="b" cx="15.93" cy="5" r="1" />
	<circle class="c" cx="15.93" cy="13" r="1" />
	<circle class="d" cx="9" cy="17" r="1" />
	<circle class="e" cx="2.07" cy="13" r="1" />
	<circle class="f" cx="2.07" cy="5" r="1" />
</svg>

<style>
	svg {
		cursor: pointer;
		outline: transparent;
	}
	path {
		transition: 0.8s;
		animation: spin-to-sun 1s ease-out alternate;
		transform: rotate(-45deg);
		transform-origin: center;
		scale: 0.56;
	}

	svg.light path {
		d: path("M12.94 0.9A9 9 0 1 0 12.94 17.1c-6.75 -3.37-6.75 -12.83 0 -16.2z");
		animation: spin-to-moon 1s ease-out alternate;
		scale: 1;
	}

	svg.light circle {
		transition-delay: 0s;
		transition-duration: 0.6s;
		r: 0;
	}

	circle.d {
		transition-duration: 0.7s;
		transition-delay: 0.2s;
	}

	svg.light circle.d {
		translate: 0 -8px;
	}

	circle.e {
		transition-duration: 0.7s;
		transition-delay: 0.3s;
	}

	svg.light circle.e {
		translate: 6.93px -4px;
	}

	circle.f {
		transition-duration: 0.7s;
		transition-delay: 0.4s;
	}

	svg.light circle.f {
		translate: 6.93px 4px;
	}

	circle.a {
		transition-duration: 0.7s;
		transition-delay: 0.5s;
	}

	svg.light circle.a {
		translate: 0 8px;
	}

	circle.b {
		transition-duration: 0.7s;
		transition-delay: 0.6s;
	}

	svg.light circle.b {
		translate: -6.93px 4px;
	}

	circle.c {
		transition-duration: 0.7s;
		transition-delay: 0.7s;
	}

	svg.light circle.c {
		translate: -6.93px -4px;
	}

	@keyframes spin-to-moon {
		0% {
			transform: rotate(135deg);
		}

		80% {
			transform: rotate(-60deg);
		}

		100% {
			transform: rotate(-45deg);
		}
	}

	@keyframes spin-to-sun {
		0% {
			transform: rotate(-45deg);
		}

		100% {
			transform: rotate(160deg);
		}
	}
</style>
