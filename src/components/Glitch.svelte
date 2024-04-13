<script lang="ts">
	export let text: string;
	export let iteration_factor = 1;
	export let flash_duration = 30;
	$: display = text;
	const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
	let interval: NodeJS.Timeout;

	function onMouseover() {
		let iterations = 0;
		clearInterval(interval);
		interval = setInterval(() => {
			let result = "";
			for (let i = 0; i < text.length; ++i) {
				if (i * iteration_factor < iterations) {
					result += text[i];
				} else {
					let letter = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
					if (Math.random() > 0.5) {
						letter = letter.toUpperCase();
					}
					result += letter;
				}
			}
			display = result;
			if (iterations == text.length * iteration_factor) {
				clearInterval(interval);
			}
			iterations += 1;
		}, flash_duration);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<span on:mouseover={onMouseover} on:focus={onMouseover}>{display}</span>

<style>
	span {
		font-family: monospace;
		user-select: none;

		background-color: black;
		display: inline-block;
		color: white;
		padding: 0.5rem 1rem;
		font-size: 2em;
	}
</style>
