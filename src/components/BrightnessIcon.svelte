<script lang="ts">
	export let value = 100;
	export let rays = 8;
</script>

<svg viewBox="0 0 100 100" fill="currentcolor">
	<g style="stroke-dasharray: {0.16 * value} 50; rotate: {0.9 * value}deg">
		{#each Array(rays) as _, i}
			<path d="M0 0V40" style:--angle="{(i * 360) / rays}deg" />
		{/each}
	</g>
	<circle cx="50" cy="50" r="16" />
</svg>

<style lang="scss">
	g {
		transform-origin: center;
	}
	path {
		stroke-width: 6;
		stroke: currentcolor;
		stroke-linecap: round;
		stroke-dashoffset: -24;
		transform-origin: center;
		transform: rotate(var(--angle)) translate(50%, 50%);
	}
</style>
