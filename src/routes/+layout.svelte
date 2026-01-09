<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>{page.data.metaData.title}</title>
	<meta property="og:type" content="website">

	<meta name="description" content={page.data.metaData.description}>
	<meta name="author" content="Arden Haldorson">

	<!-- Open Graph -->
	<meta property="og:title" content={page.data.metaData.title}>
	<meta property="og:description" content={page.data.metaData.description}>
	<meta property="og:url" content={page.data.metaData.url}>
</svelte:head>

<div class="flex h-dvh min-h-dvh flex-col items-center justify-between">
	<header class="w-full shadow-[2px_2px_3px_rgba(0,0,0,0.2)]">
		<nav class="flex items-center justify-between px-2">
			<a href="/">
				<img src="/arden-logo-1.svg" alt="Arden Logo" class="m-4 h-10 hover:scale-110 transition-transform duration-300">
			</a>
			<div class="rokkitt-font-regular mt-1 mr-4 flex gap-2 text-[0.9em] tracking-widest uppercase">
				<a href="/projects" class="text-amber-600 underline-offset-2 hover:underline">Projects</a>
				<a href="/about" class="text-amber-600 underline-offset-2 hover:underline">About</a>
				<a href="/about#contact" class="text-amber-600 underline-offset-2 hover:underline">
					Contact
				</a>
			</div>
		</nav>
	</header>
	<main class="w-full grow p-8 lg:w-4/5">
		{@render children()}
	</main>
	<footer
		class="rokkitt-font-regular w-full p-4 text-center text-sm tracking-widest text-slate-400"
	>
		<p>© 2026 Arden Haldorson. All rights reserved.</p>
	</footer>
</div>
