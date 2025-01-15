import type { SeoProps } from "../head";
import type { _downloadResult, heroType, howToType } from "./content";
export const pageProps: SeoProps = {
    title: "أداة تحميل فيديو بلوسكاي",
    description:
        "أداة تحميل فيديو بلوسكاي هي أداة مجانية عبر الإنترنت تساعدك على تحميل فيديوهات MP4 عالية الجودة من شبكة بلوسكاي الاجتماعية.",
    image: "https://www.saveplays.com/images/bluesky-downloader.png",
    images: [
        {
            url: "https://www.saveplays.com/images/bluesky-downloader.png",
            width: 1200,
            height: 630,
            alt: "أداة تحميل فيديو بلوسكاي من SavePlays",
        },
    ],
    lang: "ar",
    keywords: [
        "أداة تحميل بلوسكاي",
        "أداة تحميل فيديو بلوسكاي",
        "تحميل فيديوهات بلوسكاي",
        "تحميل MP4 من بلوسكاي",
        "أداة تحميل مجانية بلوسكاي",
    ],
    noindex: false,
    nofollow: false,
    type: "website",
    locale: "ar_AE",
    structuredData: [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "أداة تحميل فيديو بلوسكاي",
            description:
                "أداة تحميل فيديو بلوسكاي هي أداة مجانية عبر الإنترنت تساعدك على تحميل فيديوهات MP4 عالية الجودة من شبكة بلوسكاي الاجتماعية.",
            image: "https://www.saveplays.com/images/bluesky-downloader.png",
            url: "https://www.saveplays.com/bluesky-downloader",
            review: {
                "@type": "Review",
                author: { "@type": "Person", name: "جون دو" },
                datePublished: "2025-01-11",
                reviewBody: "أداة تحميل فيديو بلوسكاي من SavePlays سريعة، موثوقة، ومجانية تمامًا. أنصح بها بشدة!",
                name: "أفضل أداة تحميل بلوسكاي",
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
export const placeholder = "ألصق الرابط هنا";

export const hero: heroType = {
    title: "أداة تحميل فيديو بلوسكاي 🦋",
    description: "حمّل فيديوهاتك المفضلة من بلوسكاي بسهولة وبصيغة MP4 عالية الجودة!"
}

export const howTo: howToType = {
    title: "كيفية الاستخدام",
    alt: "كيفية استخدام أداة تحميل فيديو بلوسكاي",
    steps: [
        {
            step: "انسخ الرابط",
            description: "انسخ رابط منشور بلوسكاي الذي يحتوي على الفيديو الذي تريد تحميله.",
        },
        {
            step: "الصق الرابط",
            description: "الصق الرابط في حقل الإدخال أعلاه.",
        },
        {
            step: "معالجة الفيديو",
            description: "اضغط على زر الإرسال.",
        },
        {
            step: "انتظر المعالجة",
            description: "انتظر حتى يتم معالجة الفيديو. سترى شريط تقدم يشير إلى حالة التحميل والمعالجة.",
        },
        {
            step: "حمل الفيديو",
            description: 'عند اكتمال المعالجة، اضغط على الزر الأخضر "تحميل الفيديو" لحفظ الفيديو على جهازك.',
        },
    ],
};


export const downloadResult: _downloadResult = {
    select_quality: "اختر الجودة",
    download: "تنزيل"
};