<script lang="ts">
	let x = 0;
	let y = 0;
	let container: HTMLElement;
	function onMouseMove(e: MouseEvent) {
		for (const child of container.childNodes) {
			if (child instanceof HTMLElement && child.classList.contains("card")) {
				child.style.setProperty("--x", `${e.clientX - child.offsetLeft}px`);
				child.style.setProperty("--y", `${e.clientY - child.offsetTop}px`);
			}
		}
	}
</script>

<div class="container" bind:this={container} on:mousemove={onMouseMove}>
	<slot></slot>
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: 10px;
		--br: 0;
	}
</style>
