<script lang="ts">
	import ColorPicker from "./ColorPicker";

	export let value: string;
	let open = false;

	$: value = value.startsWith("#") ? value.slice(1) : value;
</script>

<span
	class="container"
	style:--color="#{value}"
	on:click={() => (open = !open)}
	on:keypress={() => (open = !open)}
	tabindex="-1"
>
	<slot />
	<span class="input">
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
		gap: 0.3rem;
		align-items: center;
		cursor: pointer;
	}
	.input {
		box-sizing: border-box;
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
