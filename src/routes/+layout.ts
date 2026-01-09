import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
    return {
        metaData: {
            title: "Arden's Portfolio",
            description: `The personal portfolio of Arden Haldorson, a fullstack developer.`,
            url: 'https://arh-lexicon-portfolio.netlify.app'
        }
    };
};
