import { redirect } from "@sveltejs/kit"

import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = ({ locals, url, params }) => {
	// If the lang is not in the list of supported langs, redirect to the default lang or the user current lang.
	if (params.lang && !locals.langs.includes(params.lang))
		throw redirect(
			303,
			url.pathname
				.replace(`/${params.lang}`, `/${locals.lang}`)
				.toString()
		)

	// If the param lang is different from the current lang, redirect to the current lang.
	if (params.lang && params.lang !== locals.lang) {
		throw redirect(
			303,
			url.pathname
				.replace(`/${params.lang}`, `/${locals.lang}`)
				.toString()
		)
	}

	return { lang: locals.lang }
}
