import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$: 'src',
			$lib: 'src/lib',
			$types: 'src/types',
			$utils: 'src/utils',
			$routes: 'src/routes',
			$settings: 'src/settings'
		}
	}
};

export default config;
