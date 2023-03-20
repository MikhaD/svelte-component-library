<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import Grow from "../../loading-animations/Grow.svelte";
	import Oscillate from "../../loading-animations/Oscillate.svelte";
	import Shrink from "../../loading-animations/Shrink.svelte";
	import Slide from "../../loading-animations/Slide.svelte";
	import SlideChase from "../../loading-animations/SlideChase.svelte";
	import Spin from "../../loading-animations/Spin.svelte";

	export let Hst: Hst;

	const grow_source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<style>
		.one { animation: one 2s ease-in-out infinite }
		.two { animation: two 2s ease-in-out infinite }
		.three { animation: three 2s ease-in-out infinite }
		.four { transform-origin: bottom left; animation: four 2s ease-in-out infinite }

		@keyframes one { 0% {transform: translateY(0px)} 20%, 100% {transform: translateY(-100px)} }
		@keyframes two { 0%, 20% {transform: translateY(0px)} 40%, 100% {transform: translateY(-100px)} }
		@keyframes three { 0%, 40% {transform: translateY(0px)} 60%, 100% {transform: translateY(-100px)} }
		@keyframes four { 0%, 60% {transform: scale(1)} 80%, 100% {transform: scale(2)} }
	</style>
	<path class="one" d="M50,0 l50,0 l0,50 l-50,0z"/>
	<path class="two" d="M0,0 l50,0 l0,50 l-50,0z"/>
	<path class="three" d="M50,50 l50,0 l0,50 l-50,0z"/>
	<path class="four" d="M0,50 l50,0 l0,50 l-50,0z"/>
</svg>`;
	const shrink_source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<style>
		.one { transform-origin: bottom left; animation: one 2s ease-in-out infinite }
		.two { animation: two 2s ease-in-out infinite }
		.three { animation: three 2s ease-in-out infinite }
		.four { animation: four 2s ease-in-out infinite }

		@keyframes one { 0% {transform: scale(1)} 20%, 100% {transform: scale(0.5)} }
		@keyframes two { 0%, 40% {transform: translateY(0px)} 60%, 100% {transform: translateY(100px)} }
		@keyframes three { 0%, 60% {transform: translateY(0px)} 80%, 100% {transform: translateY(100px)} }
		@keyframes four { 0%, 80% {transform: translateY(0px)} 100% {transform: translateY(100px)} }
	</style>
	<path class="one" d="M0,0 l100,0 l0,100 l-100,0z"/>
	<path class="two" d="M50,-50 l50,0 l0,50 l-50,0z"/>
	<path class="three" d="M0,-100 l50,0 l0,50 l-50,0z"/>
	<path class="four" d="M50,-100 l50,0 l0,50 l-50,0z"/>
</svg>`;
	const spin_source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<style>
		rect { transform-box: fill-box; transform-origin: center }

		.right { animation: right 3s ease-in-out infinite }
		.left { animation: left 3s ease-in-out infinite }

		@keyframes right { 0% {rx: 0; scale: 1; rotate: 0} 25% {rx:0} 50% {rx: 50%; scale: 0.25} 75% {rx:0} 100% {scale: 1; rx: 0; rotate: 720deg} }
		@keyframes left { 0% {rx: 0; scale: 1; rotate: 0} 25% {rx:0} 50% {rx: 50%; scale: 0.25} 75% {rx:0} 100% {scale: 1; rx: 0; rotate: -720deg} }
	</style>
	<rect class="right" x="10" y="10" width="80" height="80"/>
	<rect class="left" x="10" y="10" width="80" height="80"/>
</svg>`;
	const oscillate_source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<style>
		rect {
			rx: 3px;
			width: 6px;
			height: 10px;
			transform: translateY(45px);
			animation: oscillate 2s ease-in-out infinite;
		}
		.b { animation-delay: 0.5s }
		.c { animation-delay: 1s }
		@keyframes oscillate {
			0%, 100% {
				height: 10px;
				transform: translateY(45px);
			}
			50% {
				height: 80px;
				transform: translateY(10px);
			}
		}
	</style>
	<rect class="c" x="24" />
	<rect class="b" x="35" />
	<rect x="47" />
	<rect class="b" x="59" />
	<rect class="c" x="70" />
</svg>`;
	const slide_source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<style>
		#a { animation: slide 4s ease infinite }
		#b { animation: slide2 4s ease infinite }
		@keyframes slide {
			0%, 15%, 100% { transform: translate(0%, 15px) }
			25%, 40% { transform: translate(33.33%, 15px) }
			50%, 65% { transform: translate(33.33%, 35px) }
			75%, 90% { transform: translate(0%, 35px) }
		}
		@keyframes slide2 {
			0%, 15%, 100% { transform: translate(33.33%, 35px) }
			25%, 40% { transform: translate(0%, 35px) }
			50%, 65% { transform: translate(0%, 15px) }
			75%, 90% { transform: translate(33.33%, 15px) }
		}
	</style>
	<defs>
		<g id="rect">
			<path d="M33.33 0.5L66.66 20.5L66.66 30.5L33.33 10.5L33.33 0.5Z" fill-opacity="0.4" />
			<path d="M0 30.5L33.33 10.5V0.5L0 20.5V30.5Z" />
			<path d="M0 20.5L33.33 40.5L33.33 50.5L0 30.5L0 20.5Z" fill-opacity="0.4" />
			<path d="M33.33 50.5L66.66 30.5V20.5L33.33 40.5V50.5Z" />
		</g>
	</defs>
	<use id="a" href="#rect" />
	<use id="b" href="#rect" />
</svg>`;
	const slide_chase_source = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<style>
		path { fill: #4B8DDA }
		#a { animation: slide 4s ease infinite }
		#b { animation: slide 3s ease infinite }
		@keyframes slide {
			0%, 15%, 100% { transform: translate(0%, 15px) }
			25%, 40% { transform: translate(33.33%, 15px) }
			50%, 65% { transform: translate(33.33%, 35px) }
			75%, 90% { transform: translate(0%, 35px) }
		}
	</style>
	<defs>
		<g id="rect">
			<path d="M33.33 0.5L66.66 20.5L66.66 30.5L33.33 10.5L33.33 0.5Z" fill-opacity="0.4" />
			<path d="M0 30.5L33.33 10.5V0.5L0 20.5V30.5Z" />
			<path d="M0 20.5L33.33 40.5L33.33 50.5L0 30.5L0 20.5Z" fill-opacity="0.4" />
			<path d="M33.33 50.5L66.66 30.5V20.5L33.33 40.5V50.5Z" />
		</g>
	</defs>
	<use id="a" href="#rect" />
	<use id="b" href="#rect" />
</svg>`;
</script>

<Hst.Story title="Loading Animations" icon="mingcute:loading-fill" layout={{ type: "grid" }}>
	<Hst.Variant title="Grow" icon="mingcute:loading-fill" source={grow_source}>
		<Grow />
	</Hst.Variant>
	<Hst.Variant title="Shrink" icon="mingcute:loading-fill" source={shrink_source}>
		<Shrink />
	</Hst.Variant>
	<Hst.Variant title="Spin" icon="mingcute:loading-fill" source={spin_source}>
		<Spin />
	</Hst.Variant>
	<Hst.Variant title="Oscillate" icon="mingcute:loading-fill" source={oscillate_source}>
		<Oscillate />
	</Hst.Variant>
	<Hst.Variant title="Slide" icon="mingcute:loading-fill" source={slide_source}>
		<Slide />
	</Hst.Variant>
	<Hst.Variant title="Slide Chase" icon="mingcute:loading-fill" source={slide_chase_source}>
		<SlideChase />
	</Hst.Variant>
</Hst.Story>
