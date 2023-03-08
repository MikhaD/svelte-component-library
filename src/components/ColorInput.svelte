<script lang="ts">
	import ColorPicker from "./ColorPicker";

	export let value: string;
	let open = false;
</script>

<span
	style:background-color={value}
	on:click={() => (open = !open)}
	on:keypress={() => (open = !open)}
	tabindex="-1"
>
	{#if open}
		<div class="modal">
			<ColorPicker bind:value />
		</div>
	{/if}
</span>

<style lang="scss">
	span {
		display: inline-block;
		width: 1em;
		height: 1em;
		cursor: pointer;
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
