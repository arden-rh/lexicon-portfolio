<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>{page.data.metaData.title}</title>
	<meta property="og:type" content="website" />

	<meta name="description" content={page.data.metaData.description} />
	<meta name="author" content="Arden Haldorson" />

	<!-- Open Graph -->
	<meta property="og:title" content={page.data.metaData.title} />
	<meta property="og:description" content={page.data.metaData.description} />
	<!-- <meta property="og:url" content={page.data.metaData.url} /> -->
</svelte:head>

<div class="flex h-dvh min-h-dvh flex-col items-center">
	<nav class="flex w-full items-center justify-between px-2 shadow-md">
		<a href="/">
			<img src="/arden-logo-1.svg" alt="Arden Logo" class="m-4 h-10" />
		</a>
		<div class="mr-4 flex gap-2 text-[0.9em] uppercase rokkitt-font-regular tracking-widest mt-1">
			<a href="/about" class="text-amber-600 hover:underline">About</a>
			<a href="/projects" class="text-amber-600 hover:underline">Projects</a>
			<a href="/contact" class="text-amber-600 hover:underline">Contact</a>
		</div>
	</nav>
	<div class="lg:w-4/5">
		{@render children()}
	</div>
</div>
