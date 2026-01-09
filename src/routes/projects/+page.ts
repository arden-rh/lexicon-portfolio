import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async () => {
	return {
		metaData: {
			title: "Arden's Portfolio | Projects",
			description: `A page with information about Arden's projects.`,
		}
	};
};
