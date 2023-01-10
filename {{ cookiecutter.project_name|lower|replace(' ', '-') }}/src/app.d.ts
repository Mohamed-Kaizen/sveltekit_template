// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		theme: string
		dir: string
		lang: string
		langs: string[]
	}
	// interface Error {}
	// interface PageData {}
	// interface Platform {}
}

{% if cookiecutter.use_typesafe_i18n == 'y' -%}type Locales = import("$i18n/i18n-types").Locales{%- endif %}
