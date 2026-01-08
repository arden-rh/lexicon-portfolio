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

<a href={linkName} class="group border-3 border-slate-400 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden h-44 {className}">
	<img src="/project-images/thumbnails/{imgSrc}" alt={imgAlt} class="object-cover object-top h-full w-full"/>
    <div class="bg-slate-900 opacity-80 absolute inset-0 group-hover:opacity-25 transition-opacity duration-300"></div>
    <h3 class="rokkitt-font font-bold text-amber-600 text-xl tracking-wider absolute bottom-0 right-0 m-3 mb-2 group-hover:bg-slate-700 group-hover:rounded-xl group-hover:px-2 group-hover:py-1 group-hover:mb-1 group-hover:mr-1 group-hover:text-slate-200">{projectTitle}</h3>
</a>
