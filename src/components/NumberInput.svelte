<script lang="ts">
	import { fly } from "svelte/transition";

	export let value: number;
	export let min = 1;
	export let max = Number.MAX_SAFE_INTEGER;
	export let increment = 1;
</script>

<div>
	<button
		on:click={() => {
			if (value > min) {
				value = Math.max(value - increment, min);
			}
		}}
	>
		<svg viewBox="0 0 4 6">
			<path d="M4 0L0 3L4 6z" />
		</svg>
	</button>
	{#key value}
		<span class="value" in:fly={{ x: -20, duration: 100 }}>{value}</span>
	{/key}
	<button
		on:click={() => {
			if (value < max) {
				value = Math.min(value + increment, max);
			}
		}}
	>
		<svg viewBox="0 0 4 6">
			<path d="M0 0L4 3L0 6z" />
		</svg>
	</button>
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
		background-color: var(--bg-2);
		border-radius: var(--br);
	}
	.value {
		pointer-events: none;
		user-select: none;
	}
	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		height: 3rem;
		padding: 0.5rem;
		&:hover {
			svg {
				fill: var(--accent-00, teal);
				scale: 1.4;
			}
		}
	}
	svg {
		transition:
			fill 0.1s ease-in-out,
			scale 0.1s ease-in-out;
		height: 100%;
		fill: currentcolor;
	}
</style>