import { init, register } from "svelte-i18n"

register("ar", () => import("./locales/ar.json"))
register("en", () => import("./locales/en.json"))
register("es", () => import("./locales/es.json"))

init({
	fallbackLocale: DEFAULT_LANG,
	initialLocale: DEFAULT_LANG,
})
