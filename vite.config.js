import { defineConfig } from 'vite';
import { HstSvelte } from '@histoire/plugin-svelte';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defaultColors } from 'histoire';

// https://vitejs.dev/config/
export default defineConfig({
	base: "/svelte-component-library/",
	plugins: [svelte({
		preprocess: vitePreprocess(),
	})],
	histoire: {
		plugins: [
			HstSvelte(),
		],
		theme: {
			title: "Mikha's Components",
			logo: {
				light: "/img/logo-black.svg",
				dark: "/img/logo-white.svg",
			},
			favicon: "/img/favicon.svg",
			logoHref: "https://github.com/MikhaD",
			colors: {
				primary: {
					50: '#ecfeff',
					100: '#cffafe',
					200: '#a5f3fc',
					300: '#67e8f9',
					400: '#22d3ee',
					500: '#06b6d4',
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63',
				}
			}
		}
	}
});