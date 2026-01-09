<script lang="ts">
    import ProjectCard from '$lib/components/project-card.svelte';
</script>

<section class="flex flex-col items-center p-8 gap-8 lg:mb-4">
        <div class="flex items-center justify-center gap-8 group">
            <img src="/arden-logo-1.svg" alt="Arden Logo" class="h-52 ml-2 lg:h-64">
            <h1 class="text-6xl/12 text-shadow-sm lg:leading-10 rokkitt-font font-bold flex flex-col lg:flex-row lg:gap-4 tracking-wider text-slate-400 lg:border-b-5 border-slate-700 group-hover:border-amber-800 group-hover:pr-1 transform-border duration-700 cursor-default">
                <span class="lg:group-hover:translate-x-2 transform duration-700">Hello</span>
                <span>there</span>
            </h1>
        </div>
        <p class="text-[1.15rem] lg:text-xl rokkitt-font-regular tracking-wider text-center text-slate-200">My name is Arden and I am a fullstack developer. <br> Welcome to my portfolio.</p>
</section>

<section class="flex flex-col items-center">
    <h2 class="text-3xl rokkitt-font font-bold tracking-wider text-amber-600">Latest Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mb-8">
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