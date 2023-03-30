<script lang="ts">
	export let count = 8;
	export let speed = 1;
	export let scale = 0.5;
	$: scale = Math.min(Math.max(0.1, scale), 0.9);
	$: count = Math.max(2, count);

	$: x = Math.sin((2 * Math.PI) / count) * 50;
	$: y = 50 - Math.cos((2 * Math.PI) / count) * 50;
</script>

<svg viewBox="0 0 100 100" style:--speed="{speed}s" style:--scale={scale}>
	{#key count}
		{#each Array(count) as _, i}
			<path
				d="M50 0a50 50 0 01 {x} {y}L50 50"
				style:rotate="{(360 / count) * i}deg"
				style="animation-delay: {(speed / count) * i}s; filter: hue-rotate({(360 / count) *
					i}deg)"
			/>
		{/each}
	{/key}
</svg>

<style lang="scss">
	path {
		fill: var(--accent-00, teal);
		transform-origin: center;
		animation: snap var(--speed) infinite linear;
	}
	@keyframes snap {
		to {
			scale: var(--scale);
		}
	}
</style>
