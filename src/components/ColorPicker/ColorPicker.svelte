<script lang="ts">
	import { Color } from "./Color";
	import HexInput from "./HexInput.svelte";
	import NumberInput from "./NumberInput.svelte";
	import Slider from "./Slider.svelte";
	import TwoDSelect from "./TwoDSelect.svelte";

	export let value = "#888";
	let color = Color.fromHEX(value);
	$: value = color.hex;

	export let colorType: ColorType = "rgb";
</script>

<div class="color-picker" style:--color="#{color.hexa}">
	{#if colorType === "hsl"}
		<TwoDSelect
			h={color.hsl.h}
			bind:x={color.hsl.s}
			bind:y={color.hsl.l}
			bg="linear-gradient(to top, #000, transparent, #fff),
		linear-gradient(to left, hsl({color.hsl.h} 100% 50%), #808080)"
		/>
	{:else}
		<TwoDSelect
			h={color.hsv.h}
			bind:x={color.hsv.s}
			bind:y={color.hsv.v}
			bg="linear-gradient(to top, #000, transparent),
		linear-gradient(to left, hsl({color.hsl.h} 100% 50%), #fff)"
		/>
	{/if}
	<div class="controls">
		<div class="color" />
		<div class="slider-container">
			<Slider
				bind:value={color.hsl.h}
				max={360}
				bg="#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00"
			/>
			<Slider bind:value={color.a} checker={true} bg="#{color.hex}" />
		</div>
	</div>
	<div>
		<div class="value-input">
			<select bind:value={colorType}>
				<option value="hex">Hex</option>
				<option value="rgb">RGB</option>
				<option value="hsl">HSL</option>
				<option value="hsv">HSV</option>
			</select>
			<div class="values">
				{#if colorType === "hex"}
					<span class="hex"><HexInput bind:value={color.hex} /></span>
				{:else if colorType === "rgb"}
					<NumberInput bind:value={color.rgb.r} max={255} />
					<NumberInput bind:value={color.rgb.g} max={255} />
					<NumberInput bind:value={color.rgb.b} max={255} />
				{:else if colorType === "hsl"}
					<NumberInput bind:value={color.hsl.h} max={360} wrap={true} />
					<NumberInput bind:value={color.hsl.s} max={100} suffix="%" />
					<NumberInput bind:value={color.hsl.l} max={100} suffix="%" />
				{:else if colorType === "hsv"}
					<NumberInput bind:value={color.hsv.h} max={360} wrap={true} />
					<NumberInput bind:value={color.hsv.s} max={100} suffix="%" />
					<NumberInput bind:value={color.hsv.v} max={100} suffix="%" />
				{/if}
				<NumberInput bind:value={color.a} max={100} suffix="%" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.color-picker {
		--bg: #2c2c2c;
		--border: #444444;
		--gap: 0.4rem;
		--checker: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Cpath d='M0 0H2V2H0z' fill='%23999'/%3E%3Cpath d='M0 0H1V2H2V1H0z' fill='%23888'/%3E%3C/svg%3E");
		padding: var(--gap);
		background-color: var(--bg);
		display: inline-flex;
		flex-direction: column;
		gap: var(--gap);
		color: white;
	}
	.color {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-image: var(--checker);
		background-size: 0.75rem;
		position: relative;
		overflow: hidden;
		&:before {
			content: "";
			inset: 0;
			position: absolute;
			background-color: var(--color);
		}
	}
	.controls {
		display: flex;
		gap: var(--gap);
	}
	.slider-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--gap);
	}
	select {
		user-select: none;
	}
	select {
		background-color: inherit;
		background-color: var(--bg);
		color: #fff;
		padding: 0.25rem;
		border: none;
		outline: none;
		text-align: center;
	}
	select:hover {
		outline: solid 1px var(--border);
		border-radius: 2px;
	}
	.hex {
		grid-column-start: 1;
		grid-column-end: 4;
	}
	.values {
		display: grid;
		grid-template-columns: repeat(4, 3rem);
		border-radius: 2px;
		gap: 1px;
		font-size: 16px;
		font-weight: normal;
		position: relative;
		&:hover,
		&:focus-within {
			background-color: var(--border);
			outline: solid var(--border) 1px;
		}
	}
	.value-input {
		display: flex;
		gap: var(--gap);
	}
</style>
