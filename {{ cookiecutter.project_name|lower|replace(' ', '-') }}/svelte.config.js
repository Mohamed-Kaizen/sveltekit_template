import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			{% if cookiecutter.use_typesafe_i18n == 'y' -%}$i18n: "src/i18n",{%- endif %}
			$hooks: "src/hooks",
			$components: "src/components",
		},

	}
};

export default config;
