/**
 * Toggle between themes
 *
 * @param theme - The theme to toggle to
 */
export function theme_toggle(theme: string) {
	if (document.documentElement.classList.contains(theme)) return

	document.documentElement.classList.remove(...THEMES)

	document.documentElement.classList.add(theme)
}

/**
 * Toggle between ltr and rtl
 */
export function dir_toggle() {
	const current_dir = document.documentElement.getAttribute("dir")

	document.documentElement.setAttribute(
		"dir",
		current_dir === "ltr" ? "rtl" : "ltr"
	)
}

/**
 * Toggle between languages
 *
 * @param lang - The language to toggle to
 *
 */
export function lang_toggle(lang: string) {
	document.documentElement.setAttribute("lang", lang)

	document.documentElement.setAttribute(
		"dir",
		RTL_LANGS.includes(lang) ? "rtl" : "ltr"
	)
}
