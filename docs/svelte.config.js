import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'build',  // path to public directory
			assets: 'build',  // path to public directory
			fallback: null
		})
	}
};

export default config;