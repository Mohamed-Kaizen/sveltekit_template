import type { Handle } from "@sveltejs/kit"

export const theme: Handle = ({ event, resolve }) => {
	let theme = event.cookies.get("theme")

	if (!theme) {
		theme = DEFAULT_THEME
		event.cookies.set("theme", theme, { path: "/" })
	}

	event.locals.theme = theme

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%theme%", `${theme}`),
	})
}
