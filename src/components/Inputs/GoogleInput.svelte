<script context="module" lang="ts">
	import { createEventDispatcher } from "svelte";
	let ids = 0;
	let base_id = Date.now();
	function UID() {
		return "input-" + (++ids + base_id).toString(32);
	}
</script>

<script lang="ts">
	export let value: string;
	export let label: string;
	export let max_length: number = Infinity;
	export let autocomplete: string = "off";
	export let pattern: RegExp = /.*/;
	export let valid: (s: string) => any = () => true;

	const id = UID();
	const dispatch = createEventDispatcher();

	function onInput(e: Event & { currentTarget: HTMLInputElement & EventTarget }) {
		// @ts-ignore (On Input actually receives an InputEvent, but Svelte doesn't know that)
		if (pattern.test(e.currentTarget.value.toLowerCase()) || e.inputType.startsWith("delete")) {
			value = e.currentTarget.value.slice(0, max_length);
		}
		e.currentTarget.value = value;
	}

	function onFocus() {
		dispatch("focus", label.replaceAll(" ", "-").toLowerCase());
	}

	function onBlur() {
		dispatch("blur", label.replaceAll(" ", "-").toLowerCase());
	}
</script>

<span class:contents={value.length > 0} class:invalid={!valid(value) && value.length > 0}>
	<input
		type="text"
		{id}
		{value}
		{autocomplete}
		on:focus={onFocus}
		on:blur={onBlur}
		on:input={onInput}
		pattern={pattern.source}
	/>
	<label for={id}>{label}</label>
</span>

<style lang="scss">
	span {
		display: inline-block;
		box-sizing: border-box;
		position: relative;
		color: var(--fg-00);
		padding-top: 0.5em;
	}
	input {
		background-color: transparent;
		border-radius: 0.25rem;
		border: solid var(--fg-01) 1px;
		padding: 0.5em;
		outline: none;
		color: inherit;
		font: inherit;
		transition: border var(--trans);
	}
	label {
		position: absolute;
		color: var(--fg-01);
		left: 0.5em;
		top: 1em;
		padding-right: 1ch;
		transition: var(--trans);
		background-color: var(--bg-00);
	}

	span:focus-within {
		label {
			color: inherit;
		}
		input {
			border-color: currentcolor;
		}
	}
	span.contents,
	span:focus-within {
		label {
			font-size: 0.7em;
			transform: translateY(-75%);
			padding-left: 0.5ch;
		}
	}
	span.contents input:invalid {
		border-color: var(--red);
		& + label {
			color: var(--red);
		}
	}
	span.invalid {
		label {
			color: var(--red);
		}
		input {
			border-color: var(--red);
		}
	}
</style>
