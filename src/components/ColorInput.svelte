<script lang="ts">
	import ColorPicker from "./ColorPicker";

	export let value: string;
	export let title: string;
	let open = false;
	let element: HTMLSpanElement;

	$: value = value.startsWith("#") ? value : `#${value}`;
	function toggle() {
		open = !open;
	}
</script>

<span
	role="button"
	bind:this={element}
	class="container"
	style:--color={value}
	tabindex="-1"
	on:click|self={toggle}
	on:keydown|self={(e) => e.key === "Escape" && (open = false)}
	on:blur={() => (open = false)}
>
	{title}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span role="button" tabindex="-1" class="input" on:click|self={toggle}>
		{#if open}
			<div class="modal">
				<ColorPicker bind:value />
			</div>
		{/if}
	</span>
</span>

<style lang="scss">
	.container {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		cursor: pointer;
		padding: 0.5rem;
	}
	.input {
		border: solid 1px currentcolor;
		border-radius: 0.25rem;
		background-color: var(--color);
		display: inline-block;
		width: 1em;
		height: 1em;
		position: relative;
		z-index: 100;
	}
	.modal {
		position: absolute;
		top: calc(1em + 10px);
		&::after {
			content: "";
			position: absolute;
			height: 0;
			width: 0;
			border: solid 10px transparent;
			border-bottom-color: #2c2c2c;

			z-index: 1;
			left: 0;
			top: 0;
			transform: translateY(-100%);
		}
	}
</style>
