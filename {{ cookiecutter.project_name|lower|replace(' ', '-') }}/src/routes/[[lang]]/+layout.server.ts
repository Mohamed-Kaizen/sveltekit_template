import type { LayoutServerLoad } from "./$types"

/** @type {import('./$types').LayoutServerLoad} */
export const load: LayoutServerLoad = ({ locals }) => {
	const lang = locals.langs.includes(locals.lang) ? locals.lang : DEFAULT_LANG

	return { lang }
}
