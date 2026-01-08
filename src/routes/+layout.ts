import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
    return {
        metaData: {
            title: 'Arden Portfolio',
            description: `The personal portfolio of Arden Haldorson, a fullstack developer.`,
            url: `https://www.arden.se/`
        }
    };
};
