<script lang="ts">
	import "@unocss/reset/tailwind.css"

	import "uno.css"
</script>

<header>
	<!-- svelte-ignore missing-declaration -->
	<Nav />
</header>

<main class="font-poppins h-screen bg-gray-2 w-full p-8  dark:bg-black">
	<slot />
</main>
