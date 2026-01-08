<script lang="ts">
    import ProjectCard from '$lib/components/project-card.svelte';
</script>

<section class="flex flex-col items-center p-8 gap-8 lg:mb-4">
        <div class="flex items-center justify-center gap-8">
            <img src="/arden-logo-1.svg" alt="Arden Logo" class="h-52 ml-2 lg:h-64" />
            <h1 class="text-6xl rokkitt-font font-bold flex flex-col lg:flex-row lg:gap-4 tracking-wider text-slate-400">
                <span>Hello</span>
                <span>there</span>
            </h1>
        </div>
        <p class="text-[1.15rem] rokkitt-font-regular tracking-wider text-center text-slate-200">My name is Arden and I am a fullstack developer. <br /> Welcome to my portfolio.</p>
</section>

<section class="flex flex-col items-center">
    <h2 class="text-3xl rokkitt-font font-bold tracking-wider text-amber-600">Latest Projects</h2>
        <!-- Project Cards will go here -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <!-- Example Project Card -->
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