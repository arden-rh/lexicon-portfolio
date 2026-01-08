<script lang="ts">
    import ProjectCard from '$lib/components/project-card.svelte';
</script>

<section class="flex flex-col items-center gap-6 lg:mb-4">
    <h1 class="text-3xl rokkitt-font font-semibold tracking-wider text-amber-600">Projects</h1>
        <p class="text-[1.15rem] rokkitt-font-regular tracking-wider text-center text-slate-200">
            Here are some of the projects I've worked on recently.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <ProjectCard
                linkName="/projects/cv"
                imgSrc="cv-tn.png"
                imgAlt="CV Thumbnail"
                projectTitle="CV"
            />
            <ProjectCard
                linkName="/projects/casino-nova"
                imgSrc="casino-nova-tn.png"
                imgAlt="Casino Nova Thumbnail"
                projectTitle="Casino Nova"
            />
            <ProjectCard
                linkName="/projects/munamii-cakery"
                imgSrc="munamii-cakery-tn.png"
                imgAlt="Munamii Cakery Thumbnail"
                projectTitle="Munamii Cakery"
            />
    </div>
</section>