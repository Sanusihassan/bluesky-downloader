import type { SeoProps } from "../head";
import type { _downloadResult, heroType, howToType } from "./content";
export const placeholder = "Pega tu enlace aquí";
export const pageProps: SeoProps = {
    title: "Descargador de Videos Bluesky",
    description:
        "El Descargador de Videos Bluesky es una herramienta gratuita en línea que te ayuda a descargar videos MP4 de alta calidad desde la red social Bluesky.",
    image: "https://www.saveplays.com/images/bluesky-downloader.png",
    images: [
        {
            url: "https://www.saveplays.com/images/bluesky-downloader.png",
            width: 1200,
            height: 630,
            alt: "Descargador de Videos Bluesky por SavePlays",
        },
    ],
    lang: "es",
    keywords: [
        "Descargador de Bluesky",
        "Descargador de Videos Bluesky",
        "Descargar Videos de Bluesky",
        "Descargador MP4 de Bluesky",
        "Descargador Gratis de Bluesky",
    ],
    noindex: false,
    nofollow: false,
    type: "website",
    locale: "es_ES",
    structuredData: [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Descargador de Videos Bluesky",
            description:
                "El Descargador de Videos Bluesky es una herramienta gratuita en línea que te ayuda a descargar videos MP4 de alta calidad desde la red social Bluesky.",
            image: "https://www.saveplays.com/images/bluesky-downloader.png",
            url: "https://www.saveplays.com/bluesky-downloader",
            review: {
                "@type": "Review",
                author: { "@type": "Person", name: "Juan Pérez" },
                datePublished: "2025-01-11",
                reviewBody: "El Descargador de Videos Bluesky de SavePlays es rápido, confiable y completamente gratuito. ¡Altamente recomendado!",
                name: "Mejor Descargador de Bluesky",
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
    title: "Descargador de Videos Bluesky 🦋",
    description: "¡Descarga tus videos favoritos de Bluesky fácilmente y en formato MP4 de alta calidad!"
}

export const howTo: howToType = {
    title: "Cómo Usar",
    alt: "Cómo Usar el Descargador de Videos Bluesky",
    steps: [
        {
            step: "Copia la URL",
            description: "Copia la URL de la publicación de Bluesky que contiene el video que deseas descargar.",
        },
        {
            step: "Pega la URL",
            description: "Pega la URL en el campo de entrada arriba.",
        },
        {
            step: "Procesa el Video",
            description: 'Haz clic en el botón Enviar.',
        },
        {
            step: "Espera el Proceso",
            description: "Espera a que se procese el video. Verás una barra de progreso que indica el estado de descarga y procesamiento.",
        },
        {
            step: "Descarga el Video",
            description: 'Una vez completado el proceso, haz clic en el botón verde "Descargar Video" para guardar el video en tu dispositivo.',
        },
    ],
};

export const downloadResult: _downloadResult = {
    select_quality: "Seleccionar calidad",
    download: "Descargar"
};