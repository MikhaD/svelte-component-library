import { defineConfig } from 'vite';
import { HstSvelte } from '@histoire/plugin-svelte';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
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
				light: "/logo-black.svg",
				dark: "/logo-white.svg",
			},
			favicon: "/favicon.svg",
			logoHref: "https://github.com/MikhaD",
		}
	}
});