{% if cookiecutter.use_typesafe_i18n == 'y' -%}import { locales } from "$i18n/i18n-util"{%- endif %}

export const DEFAULT_LANG = "en"

export const DEFAULT_THEME = "light"

{% if cookiecutter.use_typesafe_i18n == 'y' -%}export const LANGS = locales as string[]{%- endif %}
{% if cookiecutter.use_typesafe_i18n != 'y' -%}export const LANGS = ["ar", "en", "es"]{%- endif %}

export const RTL_LANGS = ["ar"]

export const THEMES = ["dark", "light"]
