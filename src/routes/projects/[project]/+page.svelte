<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let { currentProject } = $derived(data);
</script>

<div class="flex flex-col items-center gap-8">
	<section class="flex flex-col items-center gap-4">
		<img
			src={currentProject.images.heroImgSrc}
			alt={currentProject.images.heroImgAlt}
			class="rounded-sm shadow-xl ring-1 ring-slate-400/50 md:max-w-5/6"
		/>
		<div>
			<h1 class="rokkitt-font text-center text-3xl font-semibold text-amber-600">
				{currentProject.title}
			</h1>
			<p class="rokkitt-font p-2 font-light text-lg text-center">{currentProject.blurb}</p>
		</div>
		{#if currentProject.links}
			<div
				class="rokkitt-font-regular flex justify-center gap-4 tracking-widest text-white uppercase"
			>
				{#if currentProject.links.website}
					<a
						href={currentProject.links.website}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-md bg-slate-700 p-2 shadow-lg transition-colors hover:bg-slate-800"
					>
						{currentProject.title}
					</a>
				{/if}
				{#if currentProject.links.repository}
					<a
						href={currentProject.links.repository}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-md bg-slate-700 p-2 shadow-lg transition-colors hover:bg-slate-800"
					>
						Git Repo
					</a>
				{/if}
			</div>
		{/if}
	</section>
	{#if currentProject.images.img1Src || currentProject.images.img2Src}
		<section class="flex flex-col items-center gap-4 lg:mb-4">
			<h2 class="rokkitt-font text-center text-3xl font-semibold text-amber-600">Gallery</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<img
					src={currentProject.images.img1Src}
					alt={currentProject.images.img1Alt}
					class="rounded-sm shadow-lg ring-1 ring-slate-400/50 md:max-w-70"
				/>
				<img
					src={currentProject.images.img2Src}
					alt={currentProject.images.img2Alt}
					class="rounded-sm shadow-lg ring-1 ring-slate-400/50 md:max-w-70"
				/>
                <img
                    src={currentProject.images.img3Src}
                    alt={currentProject.images.img3Alt}
                    class="rounded-sm shadow-lg ring-1 ring-slate-400/50 md:max-w-70"
                />
			</div>
		</section>
	{/if}
</div>
