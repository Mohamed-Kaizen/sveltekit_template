import type { Handle } from "@sveltejs/kit"

/** @type {import('@sveltejs/kit').Handle} */
export const theme: Handle = ({ event, resolve }) => {
	let theme = event.cookies.get("theme")

	if (!theme) {
		theme = DEFAULT_THEME
		event.cookies.set("theme", theme)
	}

	event.locals.theme = theme

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%theme%", `${theme}`),
	})
}
