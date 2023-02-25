<script lang="ts">
	export let text: string;
	export let iteration_factor = 1;
	$: display = text;
	const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
	let interval: NodeJS.Timer;

	function onMouseover() {
		let iterations = 0;
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
		}, 30);
	}
</script>

<span on:mouseover={onMouseover} on:focus={onMouseover}>{display}</span>

<style>
	span {
		font-family: Consolas, monospace;
		user-select: none;
	}
</style>
