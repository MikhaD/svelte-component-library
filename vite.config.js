import { defineConfig } from 'vite';
import { HstSvelte } from '@histoire/plugin-svelte';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
		}
	}
});