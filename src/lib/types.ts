export interface ProjectData {
    title: string;
    blurb: string;
    description?: string;
    links?: {
        website?: string;
        repository?: string;
    },
    images: {
        heroImgSrc: string;
        heroImgAlt: string;
        img1Src?: string;
        img1Alt?: string;
        img2Src?: string;
        img2Alt?: string;
        img3Src?: string;
        img3Alt?: string;
    };
}