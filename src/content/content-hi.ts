import type { SeoProps } from "../head";
import type { _downloadResult, heroType, howToType } from "./content";

export const pageProps: SeoProps = {
    title: "ब्लूस्काई वीडियो डाउनलोडर",
    description:
        "ब्लूस्काई वीडियो डाउनलोडर एक मुफ्त ऑनलाइन उपकरण है जो आपको ब्लूस्काई सोशल मीडिया से उच्च-गुणवत्ता वाले MP4 वीडियो डाउनलोड करने में मदद करता है।",
    image: "https://www.saveplays.com/images/bluesky-downloader.png",
    images: [
        {
            url: "https://www.saveplays.com/images/bluesky-downloader.png",
            width: 1200,
            height: 630,
            alt: "सेवप्ले द्वारा ब्लूस्काई वीडियो डाउनलोडर",
        },
    ],
    lang: "hi",
    keywords: [
        "ब्लूस्काई डाउनलोडर",
        "ब्लूस्काई वीडियो डाउनलोडर",
        "ब्लूस्काई वीडियो डाउनलोड करें",
        "ब्लूस्काई MP4 डाउनलोडर",
        "मुफ्त ब्लूस्काई डाउनलोडर",
    ],
    noindex: false,
    nofollow: false,
    type: "website",
    locale: "hi_IN",
    structuredData: [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "ब्लूस्काई वीडियो डाउनलोडर",
            description:
                "ब्लूस्काई वीडियो डाउनलोडर एक मुफ्त ऑनलाइन उपकरण है जो आपको ब्लूस्काई सोशल मीडिया से उच्च-गुणवत्ता वाले MP4 वीडियो डाउनलोड करने में मदद करता है।",
            image: "https://www.saveplays.com/images/bluesky-downloader.png",
            url: "https://www.saveplays.com/bluesky-downloader",
            review: {
                "@type": "Review",
                author: { "@type": "Person", name: "जॉन डो" },
                datePublished: "2025-01-11",
                reviewBody: "सेवप्ले का ब्लूस्काई वीडियो डाउनलोडर तेज़, विश्वसनीय और पूरी तरह से मुफ्त है। अत्यधिक अनुशंसित!",
                name: "सर्वश्रेष्ठ ब्लूस्काई डाउनलोडर",
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
    title: "ब्लूस्काई वीडियो डाउनलोडर 🦋",
    description: "अपने पसंदीदा ब्लूस्काई वीडियो आसानी से और उच्च-गुणवत्ता MP4 प्रारूप में डाउनलोड करें!"
}

export const howTo: howToType = {
    title: "कैसे उपयोग करें",
    alt: "ब्लूस्काई वीडियो डाउनलोडर का उपयोग कैसे करें",
    steps: [
        {
            step: "URL कॉपी करें",
            description: "ब्लूस्काई पोस्ट का URL कॉपी करें जिसमें वह वीडियो हो जिसे आप डाउनलोड करना चाहते हैं।",
        },
        {
            step: "URL पेस्ट करें",
            description: "URL को ऊपर दिए गए इनपुट फ़ील्ड में पेस्ट करें।",
        },
        {
            step: "वीडियो प्रोसेस करें",
            description: "सबमिट बटन पर क्लिक करें।",
        },
        {
            step: "प्रोसेसिंग का इंतजार करें",
            description: "वीडियो प्रोसेस होने का इंतजार करें। आप प्रगति को दिखाने वाली बार देखेंगे।",
        },
        {
            step: "वीडियो डाउनलोड करें",
            description: 'प्रोसेसिंग पूरी होने पर, हरे "वीडियो डाउनलोड करें" बटन पर क्लिक करें।',
        },
    ],
};

export const downloadResult: _downloadResult = {
    select_quality: "गुणवत्ता चुनें",
    download: "डाउनलोड करें"
};