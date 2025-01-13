import type { SeoProps } from "../head";
import type { _downloadResult, heroType, howToType } from "./content";
export const pageProps: SeoProps = {
    title: "Bluesky Video Downloader",
    description:
        "Der Bluesky Video Downloader ist ein kostenloses Online-Tool, mit dem Sie hochwertige MP4-Videos von der Bluesky Social-Media-Plattform herunterladen können.",
    image: "https://www.saveplays.com/images/bluesky-downloader.png",
    images: [
        {
            url: "https://www.saveplays.com/images/bluesky-downloader.png",
            width: 1200,
            height: 630,
            alt: "Bluesky Video Downloader von SavePlays",
        },
    ],
    lang: "de",
    keywords: [
        "Bluesky Downloader",
        "Bluesky Video Downloader",
        "Bluesky Video herunterladen",
        "Bluesky MP4 Downloader",
        "Kostenloser Bluesky Downloader",
    ],
    noindex: false,
    nofollow: false,
    type: "website",
    locale: "de_DE",
    structuredData: [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Bluesky Video Downloader",
            description:
                "Der Bluesky Video Downloader ist ein kostenloses Online-Tool, mit dem Sie hochwertige MP4-Videos von der Bluesky Social-Media-Plattform herunterladen können.",
            image: "https://www.saveplays.com/images/bluesky-downloader.png",
            url: "https://www.saveplays.com/bluesky-downloader",
            review: {
                "@type": "Review",
                author: { "@type": "Person", name: "Max Mustermann" },
                datePublished: "2025-01-11",
                reviewBody: "Der Bluesky Video Downloader von SavePlays ist schnell, zuverlässig und komplett kostenlos. Sehr empfehlenswert!",
                name: "Bester Bluesky Downloader",
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
    title: "Bluesky Video Downloader 🦋",
    description: "Laden Sie Ihre Lieblingsvideos von Bluesky ganz einfach in hochwertigem MP4-Format herunter!"
};

export const howTo: howToType = {
    title: "Anleitung",
    alt: "Wie man den Bluesky Video Downloader verwendet",
    steps: [
        {
            step: "Link kopieren",
            description: "Kopieren Sie den Link des Bluesky-Posts, der das gewünschte Video enthält.",
        },
        {
            step: "Link einfügen",
            description: "Fügen Sie den Link in das obige Eingabefeld ein.",
        },
        {
            step: "Video verarbeiten",
            description: "Klicken Sie auf den 'Absenden'-Button.",
        },
        {
            step: "Warten Sie auf die Verarbeitung",
            description: "Warten Sie, bis das Video verarbeitet wurde. Ein Fortschrittsbalken zeigt den Fortschritt an.",
        },
        {
            step: "Video herunterladen",
            description: "Nach Abschluss klicken Sie auf die grüne Schaltfläche 'Video herunterladen'.",
        },
    ],
};



export const downloadResult: _downloadResult = {
    select_quality: "Qualität auswählen",
    download: "Herunterladen"
};