<script lang="ts" context="module">
	// class Color {
	// 	constructor(r: number, g: number, b: number, a: number) {
	// 		this.r = r;
	// 		this.g = g;
	// 		this.b = b;
	// 		this.a = a;
	// 	}
	// 	static fromHex(hex: string) {
	// 		if (hex[0] === "#") hex = hex.slice(1);
	// 		if (hex.length === 3 || hex.length === 4) {
	// 			hex.split("")
	// 				.map((c) => c + c)
	// 				.join("");
	// 		}
	// 		return new Color(
	// 			parseInt(hex.slice(0, 2), 16),
	// 			parseInt(hex.slice(2, 4), 16),
	// 			parseInt(hex.slice(4, 6), 16),
	// 			hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1
	// 		);
	// 	}
	// 	asHex(): string {
	// 		return (
	// 			this.r.toString(16).padStart(2, "0") +
	// 			this.g.toString(16).padStart(2, "0") +
	// 			this.b.toString(16).padStart(2, "0") +
	// 			(this.a === 1
	// 				? ""
	// 				: Math.round(this.a * 255)
	// 						.toString(16)
	// 						.padStart(2, "0"))
	// 		).toUpperCase();
	// 	}
	// 	asHSL(): [number, number, number, number] {
	// 		const r = this.r / 255;
	// 		const g = this.g / 255;
	// 		const b = this.b / 255;
	// 		const max = Math.max(r, g, b);
	// 		const min = Math.min(r, g, b);
	// 		const l = (max + min) / 2;
	// 		let h = 0;
	// 		let s = 0;
	// 		if (max !== min) {
	// 			const d = max - min;
	// 			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	// 			switch (max) {
	// 				case r:
	// 					h = (g - b) / d + (g < b ? 6 : 0);
	// 					break;
	// 				case g:
	// 					h = (b - r) / d + 2;
	// 					break;
	// 				case b:
	// 					h = (r - g) / d + 4;
	// 					break;
	// 			}
	// 			h /= 6;
	// 		}
	// 		return [h * 360, s * 100, l * 100, this.a];
	// 	}
	// }
</script>

<script lang="ts">
	type InputBlur = FocusEvent & { currentTarget: EventTarget & HTMLInputElement };
	type InputKeydown = KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement };
	type InputEvent = Event & { currentTarget: EventTarget & HTMLInputElement };

	export let value = "#f00";
	export let alpha = 100;
	$: red = 255;
	$: green = 0;
	$: blue = 0;
	$: a = alpha / 100;
	$: displayAlpha = Math.round(a * 100);
	$: s = 0;
	$: l = 50;
	export let h = 200;
	export let b = 0;
	export let max_w = 100;
	$: w = (100 - b) * 0.01 * max_w;

	let colorType = "hwb";

	function roundTo(num: number, places: number) {
		const factor = Math.pow(10, places);
		return Math.round(num * factor) / factor;
	}

	function clamp(min: number, num: number, max: number) {
		return Math.min(Math.max(num, min), max);
	}

	let selectingWB = false;
	/** The Bounding Client Rect of the whiteness blackness picker element */
	let wbBCR: DOMRect;
	function selectWB(e: MouseEvent & { currentTarget: HTMLDivElement & EventTarget }) {
		wbBCR = e.currentTarget.getBoundingClientRect();
		max_w = Math.round(100 - ((e.clientX - wbBCR.x) / wbBCR.width) * 100);
		b = Math.round(((e.clientY - wbBCR.y) / wbBCR.height) * 100);
		selectingWB = true;
	}
	let selectingHue = false;
	/** The Bounding Client Rect of the hue picker element */
	let hueBCR: DOMRect;
	function selectHue(e: MouseEvent & { currentTarget: HTMLDivElement & EventTarget }) {
		hueBCR = e.currentTarget.getBoundingClientRect();
		h = Math.round(((e.clientX - hueBCR.x) / hueBCR.width) * 360);
		selectingHue = true;
	}
	let selectingAlpha = false;
	/** The Bounding Client Rect of the alpha picker element */
	let alphaBCR: DOMRect;
	function selectAlpha(e: MouseEvent & { currentTarget: HTMLDivElement & EventTarget }) {
		alphaBCR = e.currentTarget.getBoundingClientRect();
		alpha = Math.round(((e.clientX - alphaBCR.x) / alphaBCR.width) * 100);
		selectingAlpha = true;
	}
	function selectMove(e: MouseEvent) {
		if (selectingWB) {
			max_w = clamp(0, 100 - ((e.clientX - wbBCR.x) / wbBCR.width) * 100, 100);
			b = clamp(0, Math.round(((e.clientY - wbBCR.y) / wbBCR.height) * 100), 100);
		} else if (selectingHue) {
			h = clamp(0, Math.round(((e.clientX - hueBCR.x) / hueBCR.width) * 360), 360);
		} else if (selectingAlpha) {
			alpha = clamp(0, Math.round(((e.clientX - alphaBCR.x) / alphaBCR.width) * 100), 100);
		}
	}
	function selectEnd() {
		selectingWB = false;
		selectingHue = false;
		selectingAlpha = false;
	}

	function alphaChanged(e: InputKeydown) {
		if (e.key === "ArrowUp") {
			displayAlpha = clamp(0, displayAlpha + 1, 100);
		} else if (e.key === "ArrowDown") {
			displayAlpha = clamp(0, displayAlpha - 1, 100);
		} else if (e.key === "Enter") {
			e.currentTarget.blur();
		}
		a = displayAlpha / 100;
	}

	function setAlpha(e: InputBlur) {
		if (e.currentTarget.value === "" || e.currentTarget.value === "%") {
			displayAlpha = 0;
		} else if (e.currentTarget.value.endsWith("%")) {
			if (!isNaN(+e.currentTarget.value.slice(0, -1))) {
				displayAlpha = clamp(0, +e.currentTarget.value.slice(0, -1), 100);
			} else {
				e.currentTarget.value = displayAlpha + "%";
			}
		} else {
			if (!isNaN(+e.currentTarget.value)) {
				displayAlpha = clamp(0, +e.currentTarget.value, 100);
			}
			e.currentTarget.value = displayAlpha + "%";
		}
		a = displayAlpha / 100;
	}

	function hueChanged(e: InputKeydown) {
		if (e.key === "ArrowUp") {
			h = clamp(0, h + 1, 360);
		} else if (e.key === "ArrowDown") {
			h = clamp(0, h - 1, 360);
		} else if (e.key === "Enter") {
			e.currentTarget.blur();
		}
	}
	function hueInput(e: InputEvent) {
		if (!isNaN(+e.currentTarget.value)) {
			h = clamp(0, +e.currentTarget.value, 360);
		}
		e.currentTarget.value = String(h);
	}

	function setHue(e: InputBlur) {
		if (e.currentTarget.value === "") {
			h = 0;
		} else {
			if (!isNaN(+e.currentTarget.value)) {
				h = clamp(0, +e.currentTarget.value, 360);
			}
			e.currentTarget.value = String(h);
		}
	}

	function blacknessChanged(e: InputKeydown) {
		if (e.key === "ArrowUp") {
			b = clamp(0, b + 1, 100);
		} else if (e.key === "ArrowDown") {
			b = clamp(0, b - 1, 100);
		} else if (e.key === "Enter") {
			e.currentTarget.blur();
		}
	}

	function blacknessInput(e: InputEvent) {
		if (!isNaN(+e.currentTarget.value)) {
			b = clamp(0, +e.currentTarget.value, 100);
		}
		e.currentTarget.value = String(b);
	}

	function setBlackness(e: InputBlur) {
		if (e.currentTarget.value === "") {
			b = 0;
		} else {
			if (!isNaN(+e.currentTarget.value)) {
				b = clamp(0, +e.currentTarget.value, 100);
			}
			e.currentTarget.value = String(b);
		}
	}

	function whitenessChanged(e: InputKeydown) {
		if (e.key === "ArrowUp") {
			if (max_w === 100) {
				b = clamp(0, b - 1, 100);
			}
			w = clamp(0, w + 1, 100);
		} else if (e.key === "ArrowDown") {
			w = clamp(0, w - 1, 100);
		} else if (e.key === "Enter") {
			e.currentTarget.blur();
		}
		max_w = clamp(0, (100 * w) / (100 - b), 100);
	}

	function whitenessInput(e: InputEvent) {
		if (!isNaN(+e.currentTarget.value)) {
			w = clamp(0, +e.currentTarget.value, 100);
		}
		e.currentTarget.value = String(w);
		max_w = clamp(0, (100 * w) / (100 - b), 100);
	}

	function setWhiteness(e: InputBlur) {
		if (e.currentTarget.value === "") {
			w = 0;
		} else {
			if (!isNaN(+e.currentTarget.value)) {
				w = clamp(0, +e.currentTarget.value, 100);
			}
			e.currentTarget.value = String(w);
		}
		max_w = clamp(0, (100 * w) / (100 - b), 100);
	}
</script>

<svelte:window on:mouseup={selectEnd} on:mousemove={selectMove} />

<div
	class="color-picker"
	style:--hue={h}
	style:--whiteness={w}
	style:--blackness={b}
	style:--alpha={a}
	style:--max-whiteness={max_w}
>
	<div class="select-wb" on:mousedown={selectWB} />
	<div class="controls">
		<div class="color" />
		<div class="slider-container">
			<div class="slider hue" on:mousedown={selectHue} />
			<div class="slider alpha" on:mousedown={selectAlpha} />
		</div>
	</div>
	<div>
		<div class="value-input">
			<select bind:value={colorType}>
				<option value="hex">Hex</option>
				<option value="rgb">RGB</option>
				<option value="hsl">HSL</option>
				<option value="hwb">HWB</option>
			</select>
			<div class="values">
				{#if colorType === "hex"}
					<input class="hex" type="text" {value} />
				{:else if colorType === "rgb"}
					<input type="text" inputmode="numeric" value={red} />
					<input type="text" inputmode="numeric" value={green} />
					<input type="text" inputmode="numeric" value={blue} />
				{:else if colorType === "hsl"}
					<input
						type="text"
						inputmode="numeric"
						value={h}
						on:keydown={hueChanged}
						on:blur={setHue}
					/>
					<input type="text" inputmode="numeric" value={s} />
					<input type="text" inputmode="numeric" value={l} />
				{:else if colorType === "hwb"}
					<input
						type="text"
						inputmode="numeric"
						value={h}
						on:keydown={hueChanged}
						on:input={hueInput}
						on:blur={setHue}
					/>
					<input
						type="text"
						inputmode="numeric"
						value={Math.round(w)}
						on:keydown={whitenessChanged}
						on:input={whitenessInput}
						on:blur={setWhiteness}
					/>
					<input
						type="text"
						inputmode="numeric"
						value={Math.round(b)}
						on:keydown={blacknessChanged}
						on:input={blacknessInput}
						on:blur={setBlackness}
					/>
				{/if}
				<input
					type="text"
					inputmode="numeric"
					value="{displayAlpha}%"
					on:keydown={alphaChanged}
					on:blur={setAlpha}
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.color-picker {
		--bg: #2c2c2c;
		--border: #444444;
		--gap: 0.4rem;
		--color: hwb(var(--hue) calc(var(--whiteness) * 1%) calc(var(--blackness) * 1%));
		--checker: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Cpath d='M0 0H2V2H0z' fill='%23999'/%3E%3Cpath d='M0 0H1V2H2V1H0z' fill='%23888'/%3E%3C/svg%3E");
		padding: var(--gap);
		background-color: var(--bg);
		display: inline-flex;
		flex-direction: column;
		gap: var(--gap);
	}
	.select-wb {
		height: 10rem;
		background-image: linear-gradient(to top, #000, transparent),
			linear-gradient(to right, #fff, hwb(var(--hue) 0% 0%));
		position: relative;
		&::before {
			box-sizing: border-box;
			content: "";
			position: absolute;
			height: 0.7rem;
			aspect-ratio: 1;
			border-radius: 50%;
			border: solid #fff 2px;
			transform: translate(50%, -50%);
			background-color: var(--color);
			top: calc(var(--blackness) * 1%);
			right: calc(var(--max-whiteness) * 1%);
		}
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
			background-color: hwb(
				var(--hue) calc(var(--whiteness) * 1%) calc(var(--blackness) * 1%) / var(--alpha)
			);
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
	.slider {
		height: 1rem;
		border-radius: 50vmax;
		position: relative;
		&::after {
			box-sizing: border-box;
			content: "";
			position: absolute;
			height: 100%;
			aspect-ratio: 1;
			border-radius: 50%;
			border: solid #fff 3px;
		}
	}
	.hue {
		background-image: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
		&::after {
			left: calc(var(--hue) * 0.277%);
			transform: translateX(calc(var(--hue) * -0.277%));
		}
	}
	.alpha {
		background-image: var(--checker);
		background-size: 0.75rem;
		overflow: hidden;
		&::before {
			content: "";
			position: absolute;
			inset: 0;
			background-image: linear-gradient(to right, #0000, var(--color));
		}
		&::after {
			left: calc(var(--alpha) * 100%);
			transform: translateX(calc(var(--alpha) * -100%));
		}
	}
	select {
		user-select: none;
	}
	select,
	input {
		background-color: inherit;
		color: #fff;
		padding: 0.25rem;
		border: none;
		background-color: var(--bg);
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
