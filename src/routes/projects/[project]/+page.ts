import type { ProjectData } from '$lib/types';
import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async ({ params }) => {
	const { project } = params;

	const projectData: Record<string, ProjectData> = {
		cv: {
			title: 'CV Website',
			blurb: 'A personal CV website built with basic HTML, CSS, and JavaScript.',
			links: {
				website: 'https://arden-rh.github.io/lexicon-simple-cv/',
				repository: 'https://github.com/arden-rh/lexicon-simple-cv'
			},
			images: {
				heroImgSrc: '/project-images/cv/desktop/cv-dt-img-1.png',
				heroImgAlt: 'Screenshot of the CV project on desktop',
				img1Src: '/project-images/cv/mobile/cv-m-img-1.png',
				img1Alt: 'Screenshot of the CV project on mobile in dark mode',
				img2Src: '/project-images/cv/mobile/cv-m-img-2.png',
				img2Alt: 'Screenshot of the CV project on mobile in light mode'
			}
		},
		'casino-nova': {
			title: 'Casino Nova',
			blurb:
				'A responsive casino website with a slot machine game built using React, React Router, and SCSS.',
			links: {
				website: 'https://arh-lexicon-casino.netlify.app/',
				repository: 'https://github.com/arden-rh/lexicon-casino'
			},
			images: {
				heroImgSrc: '/project-images/casino-nova/desktop/casino-nova-dt-img-1.png',
				heroImgAlt: 'Screenshot of the Casino Nova home page on desktop',
				img1Src: '/project-images/casino-nova/mobile/casino-nova-m-img-1.png',
				img1Alt: 'Screenshot of the Casino Nova home page on mobile.',
				img2Src: '/project-images/casino-nova/mobile/casino-nova-m-img-2.png',
				img2Alt: 'Screenshot of the Casino Nova game page on mobile.',
				img3Src: '/project-images/casino-nova/mobile/casino-nova-m-vid-1.gif',
				img3Alt: 'GIF of the Casino Nova game page on mobile with game in progress.'
			}
		},
		'munamii-cakery': {
			title: 'Munamii Cakery',
			blurb: 'A responsive bakery website built with React, React Router, and SCSS.',
			links: {
				website: 'https://arh-lexicon-bakery.netlify.app/',
				repository: 'https://github.com/arden-rh/lexicon-bakery'
			},
			images: {
				heroImgSrc: '/project-images/munamii-cakery/desktop/munamii-cakery-dt-img-1.png',
				heroImgAlt: 'Screenshot of the Munamii Cakery home page on desktop',
				img1Src: '/project-images/munamii-cakery/mobile/munamii-cakery-m-img-1.png',
				img1Alt: 'Screenshot of the Munamii Cakery home page on mobile.',
				img2Src: '/project-images/munamii-cakery/mobile/munamii-cakery-m-img-2.png',
				img2Alt: 'Screenshot of the Munamii Cakery product page on mobile, showing cupcakes.',
				img3Src: '/project-images/munamii-cakery/mobile/munamii-cakery-m-img-3.png',
				img3Alt:
					'Screenshot of the Munamii Cakery product page on mobile, showing an individual product (wedding cake).'
			}
		}
	};

	const currentProject = projectData[project];

	return {
		metaData: {
			title: "Arden's Portfolio | Projects | " + currentProject.title,
			description: `A page with information about the project ${currentProject.title}.`
		},
		currentProject
	};
};
