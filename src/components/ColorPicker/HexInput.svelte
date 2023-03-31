<script lang="ts">
	export let value: string;

	const validChars = new Set([
		..."0123456789abcdef#",
		"delete",
		"backspace",
		"arrowleft",
		"arrowright",
	]);

	function validateHex(hex: string) {
		if (hex.startsWith("#")) {
			hex = hex.slice(1);
		}
		if (![1, 3, 4, 6, 8].includes(hex.length)) {
			return false;
		}
		hex = hex.toLowerCase();
		for (const char of hex) {
			if (!validChars.has(char)) {
				return false;
			}
		}
		return true;
	}

	function onKeydown(e: KeyboardEvent & { currentTarget: HTMLInputElement & EventTarget }) {
		const key = e.key.toLowerCase();
		if (key === "enter") {
			e.currentTarget.blur();
		} else if ((key === "v" && e.ctrlKey) || !validChars.has(key)) {
			e.preventDefault();
		}
	}

	function onBlur(e: Event & { currentTarget: HTMLInputElement & EventTarget }) {
		let v = e.currentTarget.value;
		if (validateHex(v)) {
			v = v.replace("#", "");
			if (v.length === 1) {
				v = v.repeat(6);
			}
			value = v;
		} else if (v === "" || v === "#") {
			value = "000000";
		}
		e.currentTarget.value = value;
	}
</script>

<input type="text" {value} on:keydown={onKeydown} on:blur={onBlur} />

<style>
	input {
		font: inherit;
		color: inherit;
		background-color: inherit;
		background-color: var(--bg);
		padding: 0.25rem;
		border: none;
		outline: none;
		width: 100%;
	}
</style>
