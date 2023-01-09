import { sveltekit } from "@sveltejs/kit/vite"

{% if cookiecutter.use_unplugin_auto_import == 'y' -%}import AutoImport from "unplugin-auto-import/vite"{%- endif %}
{% if cookiecutter.use_unplugin_svelte_components == 'y' -%}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Components from "unplugin-svelte-components/vite"
{%- endif %}
{% if cookiecutter.use_unocss == 'y' -%}
import Unocss from "unocss/vite"
import {
	transformerVariantGroup,
	presetIcons,
	presetUno,
	presetWebFonts,
} from "unocss"
{%- endif %}

import type { UserConfig } from "vite"

const config: UserConfig = {
	plugins: [
		{% if cookiecutter.use_unplugin_auto_import == 'y' -%}
		AutoImport({
			dts: "./src/auto-imports.d.ts",
			imports: ["svelte", "svelte/store", "svelte/transition"],
			dirs: ["./src/lib"],
		}),
		{%- endif %}
		{% if cookiecutter.use_unplugin_svelte_components == 'y' -%}
		Components({
			dirs: ["./src/components"],
			dts: "./src/components.d.ts",
		}),
		{%- endif %}
		{% if cookiecutter.use_unocss == 'y' -%}
		Unocss({
			mode: "svelte-scoped",
			presets: [presetIcons(), presetUno(), presetWebFonts({})],
			transformers: [transformerVariantGroup()],
		}),
		{%- endif %}
		sveltekit(),
	],

	{% if cookiecutter.use_vitest == 'y' or cookiecutter.use_playwright == 'y' -%}test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},{%- endif %}
}

export default config
