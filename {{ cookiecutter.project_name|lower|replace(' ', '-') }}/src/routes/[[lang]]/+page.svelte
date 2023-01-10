{% if cookiecutter.use_typesafe_i18n == 'y' -%}
<script lang="ts">
	import { LL } from "$i18n/i18n-svelte"
</script>

<h1>{$LL.HI()}</h1>

<a href="{$LL.LINK('/')}">Back to start</a>

{%- endif %}