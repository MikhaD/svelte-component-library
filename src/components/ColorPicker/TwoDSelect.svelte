<script lang="ts">
	import { clamp } from "./Color";

	export let h: number;
	export let bg: string;
	export let x: number;
	export let y: number;

	let selectingSL = false;
	/** The Bounding Client Rect of the whiteness blackness picker element */
	let BCR: DOMRect;
	function selectWB(e: MouseEvent & { currentTarget: HTMLDivElement & EventTarget }) {
		BCR = e.currentTarget.getBoundingClientRect();
		selectingSL = true;
		selectMove(e);
	}

	function selectMove(e: MouseEvent) {
		if (selectingSL) {
			x = clamp(0, ((e.clientX - BCR.x) / BCR.width) * 100, 100);
			y = clamp(0, 100 - ((e.clientY - BCR.y) / BCR.height) * 100, 100);
		}
	}
	function selectEnd() {
		selectingSL = false;
	}
</script>

<svelte:window on:mouseup={selectEnd} on:mousemove={selectMove} />

<!-- svelte-ignore a11y-role-has-required-aria-props -->
<div
	role="slider"
	tabindex="-1"
	class="select-wb"
	style:--hue={h}
	style:--saturation="{x}%"
	style:--x="{y}%"
	style:--bg={bg}
	on:mousedown={selectWB}
/>

<style lang="scss">
	.select-wb {
		user-select: none;
		width: 100%;
		aspect-ratio: 4/3;
		background-image: var(--bg);
		position: relative;
		&::before {
			content: "";
			position: absolute;
			height: 0.7rem;
			aspect-ratio: 1;
			border-radius: 50%;
			border: solid #fff 2px;
			transform: translate(-50%, 50%);
			bottom: var(--x);
			left: var(--saturation);
		}
	}
</style>
