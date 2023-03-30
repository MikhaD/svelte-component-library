<script lang="ts">
	/**
	 * The speed of the animation in seconds.
	 * @default 1
	 */
	export let speed = 1;
</script>

<svg viewBox="0 0 200 200" style:--speed="{speed}s">
	<mask id="hg-mask">
		<path
			d="m50,7h100v33c0,40 -35,40 -35,60c0,20 35,20 35,60v33h-100v-33c0,-40 35,-40 35,-60c0,-20 -35,-20 -35,-60z"
			fill="white"
		/>
	</mask>
	<g>
		<rect class="bottom" x="50" y="12" mask="url(#hg-mask)" />
		<rect class="top" x="50" y="100" mask="url(#hg-mask)" />
		<path
			class="hg"
			d="m50,7h100v33c0,40 -35,40 -35,60c0,20 35,20 35,60v33h-100v-33c0,-40 35,-40 35,-60c0,-20 -35,-20 -35,-60z"
		/>
	</g>
</svg>

<style lang="scss">
	.hg {
		stroke: currentcolor;
		stroke-width: 14;
		fill: none;
	}
	rect {
		fill: var(--accent-00, teal);
		width: 100px;
	}
	g {
		scale: 0.9;
		transform-origin: center;
		animation: spin var(--speed) ease-in-out infinite;
	}
	.top {
		animation: empty var(--speed) linear infinite reverse;
	}
	.bottom {
		animation: empty var(--speed) linear infinite;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		25%,
		100% {
			transform: rotate(180deg);
		}
	}
	@keyframes empty {
		0%,
		25% {
			height: 0px;
		}
		75%,
		100% {
			height: 90px;
		}
	}
</style>
