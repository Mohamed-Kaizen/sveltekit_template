import { setLocale } from "$i18n/i18n-svelte"
import { loadLocaleAsync } from "$i18n/i18n-util.async"

import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ data }) => {
	const lang = data.lang as Locales

	await loadLocaleAsync(lang)

	setLocale(lang)
}
