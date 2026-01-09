import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async () => {
	return {
		metaData: {
			title: "Arden's Portfolio | About",
			description: `A page with information about Arden Haldorson.`,
			url: 'https://arh-lexicon-portfolio.netlify.app/about'
		}
	};
};
