import type { SeoProps } from "../head";
import type { _downloadResult, heroType, howToType } from "./content";
export const placeholder = "Collez votre lien ici";
export const pageProps: SeoProps = {
    title: "Téléchargeur de Vidéos Bluesky",
    description:
        "Le Téléchargeur de Vidéos Bluesky est un outil en ligne gratuit qui vous aide à télécharger des vidéos MP4 de haute qualité depuis le réseau social Bluesky.",
    image: "https://www.saveplays.com/images/bluesky-downloader.png",
    images: [
        {
            url: "https://www.saveplays.com/images/bluesky-downloader.png",
            width: 1200,
            height: 630,
            alt: "Téléchargeur de Vidéos Bluesky par SavePlays",
        },
    ],
    lang: "fr",
    keywords: [
        "Téléchargeur Bluesky",
        "Téléchargeur de Vidéos Bluesky",
        "Télécharger Vidéos Bluesky",
        "Téléchargeur MP4 Bluesky",
        "Téléchargeur Gratuit Bluesky",
    ],
    noindex: false,
    nofollow: false,
    type: "website",
    locale: "fr_FR",
    structuredData: [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Téléchargeur de Vidéos Bluesky",
            description:
                "Le Téléchargeur de Vidéos Bluesky est un outil en ligne gratuit qui vous aide à télécharger des vidéos MP4 de haute qualité depuis le réseau social Bluesky.",
            image: "https://www.saveplays.com/images/bluesky-downloader.png",
            url: "https://www.saveplays.com/bluesky-downloader",
            review: {
                "@type": "Review",
                author: { "@type": "Person", name: "Jean Dupont" },
                datePublished: "2025-01-11",
                reviewBody: "Le Téléchargeur de Vidéos Bluesky de SavePlays est rapide, fiable et entièrement gratuit. Hautement recommandé !",
                name: "Meilleur Téléchargeur Bluesky",
                reviewRating: { "@type": "Rating", bestRating: "5", ratingValue: "5", worstRating: "1" },
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "200",
            },
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2025-12-31",
            },
        },
    ],
    twitter: {
        handle: "@SavePlays",
        site: "https://www.saveplays.com",
        cardType: "summary_large_image",
    },
};

export const hero: heroType = {
    title: "Téléchargeur de Vidéos Bluesky 🦋",
    description: "Téléchargez vos vidéos préférées de Bluesky facilement et au format MP4 de haute qualité !"
}

export const howTo: howToType = {
    title: "Comment Utiliser",
    alt: "Comment Utiliser le Téléchargeur de Vidéos Bluesky",
    steps: [
        {
            step: "Copiez l'URL",
            description: "Copiez l'URL de la publication Bluesky contenant la vidéo que vous souhaitez télécharger.",
        },
        {
            step: "Collez l'URL",
            description: "Collez l'URL dans le champ de saisie ci-dessus.",
        },
        {
            step: "Traitez la Vidéo",
            description: "Cliquez sur le bouton Soumettre.",
        },
        {
            step: "Attendez le Traitement",
            description: "Attendez que la vidéo soit traitée. Vous verrez une barre de progression indiquant l'état du téléchargement et du traitement.",
        },
        {
            step: "Téléchargez la Vidéo",
            description: 'Une fois le traitement terminé, cliquez sur le bouton vert "Télécharger la Vidéo" pour enregistrer la vidéo sur votre appareil.',
        },
    ],
};


export const downloadResult: _downloadResult = {
    select_quality: "Sélectionner la qualité",
    download: "Télécharger"
};