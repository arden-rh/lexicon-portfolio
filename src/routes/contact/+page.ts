import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async () => {
	return {
		metaData: {
			title: 'Arden Portfolio | Contact',
			description: `A brief description about how to get in touch with Arden.`,
			url: `https://www.arden.se/contact`
		}
	};
};
