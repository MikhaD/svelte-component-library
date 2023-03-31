<script lang="ts">
	/**
	 * Whether the card is flipped or not.
	 */
	export let flipped: boolean;
	/**
	 * The axis to flip the card across.
	 */
	export let axis: "x" | "y" = "x";
	/**
	 * The speed of the flip animation in seconds.
	 */
	export let speed = 2;
</script>

<div class="flip-card" class:flipped data-axis={axis} style:--speed="{speed}s">
	<section class="front">
		<slot name="front" />
	</section>
	<section class="back">
		<slot name="back" />
	</section>
</div>

<style lang="scss">
	.flip-card {
		display: grid;
		perspective: 1500px;
		height: fit-content;
		grid-template: 1fr / 1fr;
		transform-style: preserve-3d;
	}
	section {
		transition-duration: var(--speed);
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		backface-visibility: hidden;
		transition-property: transform;
	}
	[data-axis="x"] {
		.back {
			transform: rotateX(-180deg);
		}
		&:hover,
		&.flipped {
			.front {
				transform: rotateX(180deg);
			}
			.back {
				transform: rotateX(0deg);
			}
		}
	}
	[data-axis="y"] {
		.back {
			transform: rotateY(-180deg);
		}
		&:hover,
		&.flipped {
			.front {
				transform: rotateY(180deg);
			}
			.back {
				transform: rotateY(0deg);
			}
		}
	}
</style>
