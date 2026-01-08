import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async () => {
	return {
		metaData: {
			title: 'Arden Portfolio | About',
			description: `A page with information about Arden Haldorson.`,
		}
	};
};
