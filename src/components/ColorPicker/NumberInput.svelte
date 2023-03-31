<script lang="ts">
	export let value: number;
	export let min: number = 0;
	export let max: number = Infinity;
	export let step: number = 1;
	export let wrap: boolean = false;
	export let suffix: string = "";

	function clamp(min: number, num: number, max: number) {
		return Math.min(Math.max(num, min), max);
	}

	function onInput(e: Event & { currentTarget: HTMLInputElement & EventTarget }) {
		if (!isNaN(+e.currentTarget.value)) {
			value = clamp(min, +e.currentTarget.value, max);
		}
		e.currentTarget.value = value.toString();
	}

	function onKeydown(e: KeyboardEvent & { currentTarget: HTMLInputElement & EventTarget }) {
		if (e.key === "ArrowUp") {
			if (wrap && value + step > max) {
				value = clamp(min, min + (value + step - max), max);
				e.currentTarget.value = value.toString();
				return;
			}
			value = clamp(min, value + step, max);
			e.currentTarget.value = value.toString();
		} else if (e.key === "ArrowDown") {
			if (wrap && value - step < min) {
				value = clamp(min, max - (min - (value - step)), max);
				e.currentTarget.value = value.toString();
				return;
			}
			value = clamp(min, value - step, max);
			e.currentTarget.value = value.toString();
		} else if (e.key === "Enter") {
			e.currentTarget.blur();
		}
	}
</script>

<span class="input">
	<input
		type="text"
		inputmode="numeric"
		{min}
		{max}
		on:input={onInput}
		on:keydown={onKeydown}
		{value}
	/><span class="suffix">
		<span class="pad">{value}</span><span class="value">{suffix}</span>
	</span>
</span>

<style lang="scss">
	input {
		font: inherit;
		color: inherit;
		background-color: inherit;
		background-color: var(--bg);
		// text-align: center;
		width: 100%;
		padding: 0.25rem;
		border: none;
		outline: none;
	}
	.input {
		position: relative;
	}
	.suffix {
		position: absolute;
		inset: 0;
		padding: 0.25rem;
		pointer-events: none;
		.pad {
			visibility: hidden;
		}
		.value {
			display: inline-block;
			width: 0;
		}
	}
</style>
