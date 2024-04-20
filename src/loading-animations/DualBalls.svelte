<!-- Can't use SVG for this one because z-index doesn't work on svg elements -->
<script lang="ts">
	/**
	 * The duration of the animation in seconds.
	 * @default 1
	 */
	export let duration = 1;
	/**
	 * Whether the animation should play in reverse.
	 * @default false
	 */
	export let reverse = false;
</script>

<div style:--duration="{duration}s" class:reverse>
	<span class="right" />
	<span class="left" />
</div>

<style lang="scss">
	div {
		height: 100%;
		aspect-ratio: 1;
		position: relative;
	}
	span {
		display: block;
		position: absolute;
		border-radius: 50%;
		width: 50%;
		height: 50%;
		top: 25%;
	}
	.left {
		background-color: currentcolor;
		animation: left-right var(--duration) infinite linear;
	}
	.right {
		background-color: var(--accent-00, teal);
		animation: right-left var(--duration) infinite linear;
	}
	.reverse span {
		animation-direction: reverse;
	}

	@keyframes left-right {
		0% {
			left: 25%;
		}
		25% {
			left: 0;
		}
		50% {
			left: 25%;
		}
		75% {
			left: 50%;
		}
		100% {
			left: 25%;
		}
	}
	@keyframes right-left {
		0% {
			left: 25%;
			z-index: 1;
		}
		25% {
			left: 50%;
		}
		50% {
			left: 25%;
			z-index: 0;
		}
		75% {
			left: 0;
		}
		100% {
			z-index: 1;
			left: 25%;
		}
	}
</style>
