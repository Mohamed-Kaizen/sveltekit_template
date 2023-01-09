{% if cookiecutter.use_svelte_i18n == 'y' -%}
<script lang="ts">
	import { _ } from "svelte-i18n"

</script>

{$_("hi")}

{%- endif %}