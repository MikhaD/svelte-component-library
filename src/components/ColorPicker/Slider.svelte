<script lang="ts">
	import { clamp } from "./Color";

	export let value: number;
	export let bg: string;
	export let min = 0;
	export let max = 100;
	export let checker = false;

	let selecting = false;
	let BCR: DOMRect;
	function onClick(e: MouseEvent & { currentTarget: HTMLDivElement & EventTarget }) {
		BCR = e.currentTarget.getBoundingClientRect();
		selecting = true;
		selectMove(e);
	}
	function selectMove(e: MouseEvent) {
		if (selecting) {
			value = clamp(min, Math.round(((e.clientX - BCR.x) / BCR.width) * (max - min)), max);
		}
	}
	function selectEnd() {
		selecting = false;
	}
</script>

<svelte:window on:mouseup={selectEnd} on:mousemove={selectMove} />
<div
	class="slider"
	class:checker
	style:--bg={bg}
	on:mousedown={onClick}
	style:--distance={value / max}
/>

<style lang="scss">
	.checker {
		background-image: var(--checker);
		background-size: 0.75rem;
		overflow: hidden;
		&::before {
			content: "";
			position: absolute;
			inset: 0;
			background-image: linear-gradient(to right, #0000, var(--bg));
		}
	}
	.slider {
		height: 1rem;
		position: relative;
		border-radius: 50vmax;
		&:not(.checker) {
			background-image: linear-gradient(to right, var(--bg));
		}
		&::after {
			box-sizing: border-box;
			content: "";
			position: absolute;
			height: 100%;
			aspect-ratio: 1;
			border-radius: 50%;
			border: solid #fff 3px;
			left: calc(var(--distance) * 100%);
			transform: translateX(calc(var(--distance) * -100%));
		}
	}
</style>
