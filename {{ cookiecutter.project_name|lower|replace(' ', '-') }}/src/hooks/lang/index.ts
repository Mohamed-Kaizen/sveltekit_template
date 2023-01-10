import type { Handle } from "@sveltejs/kit"

export const langs: Handle = ({ event, resolve }) => {
	let lang = event.cookies.get("lang")

	let dir = event.cookies.get("dir")

	if (!lang) {
		const lang_param = event.params.lang ?? DEFAULT_LANG

		lang = LANGS.includes(lang_param) ? lang_param : DEFAULT_LANG

		event.cookies.set("lang", lang, { path: "/" })
	}

	if (!dir) {
		dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr"
		event.cookies.set("dir", dir, { path: "/" })
	}

	event.locals.lang = lang

	event.locals.langs = LANGS

	event.locals.dir = dir

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace("%lang%", `${lang}`).replace("%dir%", `${dir}`),
	})
}
