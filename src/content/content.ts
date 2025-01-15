import type { SeoProps } from "../head";
export const pageProps: SeoProps = {
    title: "Bluesky Video Downloader",
    description:
        "Bluesky Video Downloader is a free online tool that helps you to download high-quality MP4 videos from Bluesky social media.",
    image: "https://www.saveplays.com/images/bluesky-downloader.png",
    images: [
        {
            url: "https://www.saveplays.com/images/bluesky-downloader.png",
            width: 1200,
            height: 630,
            alt: "Bluesky Video Downloader by SavePlays",
        },
    ],
    lang: "en",
    keywords: [
        "Bluesky Downloader",
        "Bluesky Video Downloader",
        "Download Bluesky Videos",
        "Bluesky MP4 Downloader",
        "Free Bluesky Downloader",
    ],
    noindex: false,
    nofollow: false,
    type: "website",
    locale: "en_US",
    structuredData: [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Bluesky Video Downloader",
            description:
                "Bluesky Video Downloader is a free online tool that helps you to download high-quality MP4 videos from Bluesky social media.",
            image: "https://www.saveplays.com/images/bluesky-downloader.png",
            url: "https://www.saveplays.com/bluesky-downloader",
            review: {
                "@type": "Review",
                author: { "@type": "Person", name: "John Doe" },
                datePublished: "2025-01-11",
                reviewBody: "SavePlays' Bluesky Video Downloader is fast, reliable, and completely free. Highly recommended!",
                name: "Best Bluesky Downloader",
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

export const placeholder = "Paste your link here";
export const hero = {
    title: "Bluesky Video Downloader 🦋",
    description: "Download your favorite Bluesky videos with ease and in a High-Quality MP4 format!"
}

export const howTo = {
    title: "How to Use",
    alt: "How to Use Bluesky Video Downloader",
    steps: [
        {
            step: "Copy the URL",
            description: "Copy the URL of the Bluesky post containing the video you want to download.",
        },
        {
            step: "Paste the URL",
            description: "Paste the URL into the input field above.",
        },
        {
            step: "Process the Video",
            description: 'Click the Submit button.',
        },
        {
            step: "Wait for Processing",
            description: "Wait for the video to be processed. You'll see a progress bar indicating the download and processing status.",
        },
        {
            step: "Download the Video",
            description: 'Once processing is complete, click the green "Download Video" button to save the video to your device.',
        },
    ],
};

export const downloadResult = {
    select_quality: "Select Quality",
    download: "Download"
}

export type _downloadResult = typeof downloadResult;
export type heroType = typeof hero;
export type howToType = typeof howTo;