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

<div class="flex h-dvh min-h-dvh flex-col items-center justify-between">
	<header class="w-full shadow-md">
		<nav class="flex items-center justify-between px-2">
			<a href="/">
				<img src="/arden-logo-1.svg" alt="Arden Logo" class="m-4 h-10" />
			</a>
			<div class="mr-4 flex gap-2 text-[0.9em] uppercase rokkitt-font-regular tracking-widest mt-1">
				<a href="/about" class="text-amber-600 hover:underline">About</a>
				<a href="/projects" class="text-amber-600 hover:underline">Projects</a>
				<a href="/contact" class="text-amber-600 hover:underline">Contact</a>
			</div>
		</nav>
	</header>
	<main class="lg:w-4/5 p-8 flex-grow w-full">
		{@render children()}
	</main>
	<footer class="w-full p-4 text-center text-slate-400 rokkitt-font-regular tracking-widest text-sm">
		<p>© 2026 Arden Haldorson. All rights reserved.</p>
	</footer>
</div>
