<script lang="ts">
	import "@unocss/reset/tailwind.css"
</script>

<header>
	<!-- svelte-ignore missing-declaration -->
	<Nav />
</header>

<main>
	<slot />
</main>

<style uno:preflights uno:safelist global></style>
