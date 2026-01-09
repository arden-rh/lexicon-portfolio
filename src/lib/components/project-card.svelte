<script lang="ts">
	interface Props {
		className?: string;
		linkName: string;
        imgSrc: string;
		imgAlt: string;
        projectTitle: string;
	}

	let {
		className,
		linkName,
        imgSrc,
		imgAlt,
        projectTitle

	}: Props = $props();

</script>

<a href={linkName} class="group {className}">
    <div class="border-3 border-slate-600 overflow-hidden h-40 rounded-lg relative shadow-md group-hover:scale-105 transition-transform duration-300">
        <img src="/project-images/thumbnails/{imgSrc}" alt={imgAlt} class="object-cover object-top h-full w-full">
        <div class="bg-slate-900 opacity-80 absolute inset-0 group-hover:opacity-25 transition-opacity duration-300"></div>
    </div>
    <h3 class="rokkitt-font font-bold text-amber-600 text-center text-xl tracking-wider py-2 group-hover:underline underline-offset-2">{projectTitle}</h3>
</a>
