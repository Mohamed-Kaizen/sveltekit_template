<script lang="ts">
	import { enhance } from "$app/forms"
</script>

<nav class="border flex mb-4 justify-between">
	<!-- svelte-ignore missing-declaration -->
	<form
		use:enhance="{({ data }) => theme_toggle(`${data.get('theme')}`)}"
		method="POST">
		<li>
			<button formaction="/utils?/theme" name="theme" value="dark"
				>Dark</button>
		</li>
		<li>
			<button formaction="/utils?/theme" name="theme" value="light"
				>Light</button>
		</li>
	</form>

	<!-- svelte-ignore missing-declaration -->
	<form action="/utils?/dir" method="post" use:enhance="{() => dir_toggle()}">
		<button aria-label="Change direction">Change direction</button>
	</form>

	<!-- svelte-ignore missing-declaration -->
	<form
		use:enhance="{({ data }) => lang_toggle(`${data.get('lang')}`)}"
		method="POST">
		<li>
			<button formaction="/utils?/lang" name="lang" value="ar"
				>عربي</button>
		</li>
		<li>
			<button formaction="/utils?/lang" name="lang" value="en"
				>English</button>
		</li>
		<li>
			<button formaction="/utils?/lang" name="lang" value="es"
				>Español</button>
		</li>
	</form>
</nav>
