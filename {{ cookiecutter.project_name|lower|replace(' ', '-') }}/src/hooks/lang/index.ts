import type { Handle } from "@sveltejs/kit"

{% if cookiecutter.use_svelte_i18n == 'y' -%}import { locale } from "svelte-i18n"{%- endif %}

/** @type {import('@sveltejs/kit').Handle} */
export const langs: Handle = ({ event, resolve }) => {
	let lang = event.cookies.get("lang")

	let dir = event.cookies.get("dir")

	if (!lang) {
		lang = event.params.lang ?? DEFAULT_LANG
		event.cookies.set("lang", lang)
	}

	if (!dir) {
		dir = "ltr"
		event.cookies.set("dir", dir)
	}

	{% if cookiecutter.use_svelte_i18n == 'y' -%}locale.set(lang){%- endif %}

	event.locals.lang = lang

	event.locals.langs = LANGS

	event.locals.dir = dir

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace("%lang%", `${lang}`).replace("%dir%", `${dir}`),
	})
}
