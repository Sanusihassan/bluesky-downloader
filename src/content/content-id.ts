import type { SeoProps } from "../head";
import type { _downloadResult, heroType, howToType } from "./content";
export const placeholder = "Tempelkan tautan Anda di sini";
export const pageProps: SeoProps = {
    title: "Bluesky Video Downloader",
    description:
        "Bluesky Video Downloader adalah alat online gratis yang membantu Anda mengunduh video MP4 berkualitas tinggi dari platform media sosial Bluesky.",
    image: "https://www.saveplays.com/images/bluesky-downloader.png",
    images: [
        {
            url: "https://www.saveplays.com/images/bluesky-downloader.png",
            width: 1200,
            height: 630,
            alt: "Bluesky Video Downloader oleh SavePlays",
        },
    ],
    lang: "id",
    keywords: [
        "Bluesky downloader",
        "Bluesky video downloader",
        "Unduh video Bluesky",
        "Bluesky MP4 downloader",
        "Bluesky downloader gratis",
    ],
    noindex: false,
    nofollow: false,
    type: "website",
    locale: "id_ID",
    structuredData: [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Bluesky Video Downloader",
            description:
                "Bluesky Video Downloader adalah alat online gratis yang membantu Anda mengunduh video MP4 berkualitas tinggi dari platform media sosial Bluesky.",
            image: "https://www.saveplays.com/images/bluesky-downloader.png",
            url: "https://www.saveplays.com/bluesky-downloader",
            review: {
                "@type": "Review",
                author: { "@type": "Person", name: "Budi Santoso" },
                datePublished: "2025-01-11",
                reviewBody: "Bluesky Video Downloader dari SavePlays cepat, dapat diandalkan, dan benar-benar gratis. Sangat direkomendasikan!",
                name: "Downloader terbaik untuk Bluesky",
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
    description: "Unduh video Bluesky favorit Anda dengan mudah dalam format MP4 berkualitas tinggi!"
};

export const howTo: howToType = {
    title: "Cara Menggunakan",
    alt: "Cara menggunakan Bluesky Video Downloader",
    steps: [
        {
            step: "Salin Tautan",
            description: "Salin tautan dari postingan Bluesky yang berisi video yang ingin Anda unduh.",
        },
        {
            step: "Tempelkan Tautan",
            description: "Tempelkan tautan ke dalam kotak input di atas.",
        },
        {
            step: "Proses Video",
            description: "Klik tombol Submit.",
        },
        {
            step: "Tunggu Proses Selesai",
            description: "Tunggu hingga video selesai diproses. Anda akan melihat bilah progres.",
        },
        {
            step: "Unduh Video",
            description: "Setelah selesai, klik tombol hijau 'Unduh Video'.",
        },
    ],
};


export const downloadResult: _downloadResult = {
    select_quality: "Pilih Kualitas",
    download: "Unduh"
};