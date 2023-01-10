import { redirect } from "@sveltejs/kit"

import type { Actions } from "./$types"

export const actions: Actions = {
	dir: async ({ cookies, request, locals }) => {
		const dir = locals.dir === "ltr" ? "rtl" : "ltr"

		cookies.set("dir", dir)

		const referer = request.headers.get("referer")

		if (referer !== null) throw redirect(303, referer)
		throw redirect(303, `/`)
	},

	theme: async ({ cookies, request }) => {
		const form = await request.formData()

		const theme = `${form.get("theme")}`

		cookies.set("theme", theme)

		const referer = request.headers.get("referer")

		if (referer !== null) throw redirect(303, referer)
		throw redirect(303, `/`)
	},

	lang: async ({ cookies, request }) => {
		const form = await request.formData()

		const lang = `${form.get("lang")}`

		cookies.set("lang", lang)

		if (RTL_LANGS.includes(lang)) cookies.set("dir", "rtl")
		else cookies.set("dir", "ltr")

		const referer = request.headers.get("referer")

		if (referer !== null) throw redirect(303, referer)
		throw redirect(303, `/`)
	},
}
