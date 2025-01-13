import type { SeoProps } from "../head";
import type { _downloadResult, heroType, howToType } from "./content";
export const pageProps: SeoProps = {
    title: "ব্লুস্কাই ভিডিও ডাউনলোডার",
    description:
        "ব্লুস্কাই ভিডিও ডাউনলোডার একটি বিনামূল্যের অনলাইন টুল যা আপনাকে ব্লুস্কাই সোশ্যাল মিডিয়া থেকে উচ্চ-মানের MP4 ভিডিও ডাউনলোড করতে সাহায্য করে।",
    image: "https://www.saveplays.com/images/bluesky-downloader.png",
    images: [
        {
            url: "https://www.saveplays.com/images/bluesky-downloader.png",
            width: 1200,
            height: 630,
            alt: "সেভপ্লেস দ্বারা ব্লুস্কাই ভিডিও ডাউনলোডার",
        },
    ],
    lang: "bn",
    keywords: [
        "ব্লুস্কাই ডাউনলোডার",
        "ব্লুস্কাই ভিডিও ডাউনলোডার",
        "ব্লুস্কাই ভিডিও ডাউনলোড করুন",
        "ব্লুস্কাই MP4 ডাউনলোডার",
        "বিনামূল্যের ব্লুস্কাই ডাউনলোডার",
    ],
    noindex: false,
    nofollow: false,
    type: "website",
    locale: "bn_BD",
    structuredData: [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "ব্লুস্কাই ভিডিও ডাউনলোডার",
            description:
                "ব্লুস্কাই ভিডিও ডাউনলোডার একটি বিনামূল্যের অনলাইন টুল যা আপনাকে ব্লুস্কাই সোশ্যাল মিডিয়া থেকে উচ্চ-মানের MP4 ভিডিও ডাউনলোড করতে সাহায্য করে।",
            image: "https://www.saveplays.com/images/bluesky-downloader.png",
            url: "https://www.saveplays.com/bluesky-downloader",
            review: {
                "@type": "Review",
                author: { "@type": "Person", name: "জন ডো" },
                datePublished: "2025-01-11",
                reviewBody: "সেভপ্লেস-এর ব্লুস্কাই ভিডিও ডাউনলোডার দ্রুত, নির্ভরযোগ্য এবং সম্পূর্ণ বিনামূল্যের। অত্যন্ত সুপারিশযোগ্য!",
                name: "সেরা ব্লুস্কাই ডাউনলোডার",
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
    title: "ব্লুস্কাই ভিডিও ডাউনলোডার 🦋",
    description: "আপনার প্রিয় ব্লুস্কাই ভিডিও সহজে এবং উচ্চ-মানের MP4 ফরম্যাটে ডাউনলোড করুন!"
}

export const howTo: howToType = {
    title: "ব্যবহার কিভাবে করবেন",
    alt: "ব্লুস্কাই ভিডিও ডাউনলোডার কিভাবে ব্যবহার করবেন",
    steps: [
        {
            step: "URL কপি করুন",
            description: "ব্লুস্কাই পোস্টের URL কপি করুন যেখানে আপনি যে ভিডিওটি ডাউনলোড করতে চান তা রয়েছে।",
        },
        {
            step: "URL পেস্ট করুন",
            description: "উপরে দেওয়া ইনপুট ফিল্ডে URL টি পেস্ট করুন।",
        },
        {
            step: "ভিডিও প্রসেস করুন",
            description: "সাবমিট বোতামে ক্লিক করুন।",
        },
        {
            step: "প্রসেসিং এর জন্য অপেক্ষা করুন",
            description: "ভিডিও প্রসেসিং শেষ হওয়া পর্যন্ত অপেক্ষা করুন। আপনি একটি প্রগ্রেস বার দেখতে পাবেন।",
        },
        {
            step: "ভিডিও ডাউনলোড করুন",
            description: 'প্রসেসিং শেষ হলে, "ভিডিও ডাউনলোড করুন" বোতামে ক্লিক করুন।',
        },
    ],
};

export const downloadResult: _downloadResult = {
    select_quality: "গুণমান নির্বাচন করুন",
    download: "ডাউনলোড করুন"
};