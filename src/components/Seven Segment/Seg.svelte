<script lang="ts">
	export let value: number[];
	export let point = false;
</script>

<!-- <svg viewBox="0 0 23 32" {height} xmlns="http://www.w3.org/2000/svg">
	<defs>
		<path id="h" d="m0 2 l2-2h8l2 2l-2 2H2z" />
		<path id="v" d="m2 0l2 2v8l-2 2l-2-2v-8z" />
	</defs>
	<use class:hidden={value[0]} xlink:href="#h" x="4" y="0" />
	<use class:hidden={value[1]} xlink:href="#v" x="16" y="3" />
	<use class:hidden={value[2]} xlink:href="#v" x="16" y="17" />
	<use class:hidden={value[3]} xlink:href="#h" x="4" y="28" />
	<use class:hidden={value[4]} xlink:href="#v" x="0" y="17" />
	<use class:hidden={value[5]} xlink:href="#v" x="0" y="3" />
	<use class:hidden={value[6]} xlink:href="#h" x="4" y="14" />
	<circle class:hidden={!point} cx="21.5" cy="30.5" r="1.5" />
</svg> -->
<svg viewBox="0 0 19 28" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<path id="h" d="m0 2 l2-2h8l2 2l-2 2H2z" />
		<path id="v" d="m2 0l2 2v8l-2 2l-2-2v-8z" />
	</defs>
	<use class:hidden={value[0]} xlink:href="#h" x="2" y="0" />
	<use class:hidden={value[1]} xlink:href="#v" x="12" y="2" />
	<use class:hidden={value[2]} xlink:href="#v" x="12" y="14" />
	<use class:hidden={value[3]} xlink:href="#h" x="2" y="24" />
	<use class:hidden={value[4]} xlink:href="#v" x="0" y="14" />
	<use class:hidden={value[5]} xlink:href="#v" x="0" y="2" />
	<use class:hidden={value[6]} xlink:href="#h" x="2" y="12" />
	<circle class:hidden={!point} cx="17.5" cy="26.5" r="1.5" />
</svg>

<style>
	svg {
		fill: currentcolor;
		height: 100%;
	}
	.hidden {
		display: none;
	}
</style>
