import type { SeoProps } from "../head";
import type { _downloadResult, heroType, howToType } from "./content";
export const placeholder = "在此处粘贴您的链接";
export const pageProps: SeoProps = {
    title: "Bluesky 视频下载器",
    description:
        "Bluesky 视频下载器是一个免费的在线工具，帮助您从 Bluesky 社交媒体平台下载高质量的 MP4 视频。",
    image: "https://www.saveplays.com/images/bluesky-downloader.png",
    images: [
        {
            url: "https://www.saveplays.com/images/bluesky-downloader.png",
            width: 1200,
            height: 630,
            alt: "由 SavePlays 提供的 Bluesky 视频下载器",
        },
    ],
    lang: "zh",
    keywords: [
        "Bluesky 下载器",
        "Bluesky 视频下载器",
        "下载 Bluesky 视频",
        "Bluesky MP4 下载器",
        "免费 Bluesky 下载器",
    ],
    noindex: false,
    nofollow: false,
    type: "website",
    locale: "zh_CN",
    structuredData: [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Bluesky 视频下载器",
            description:
                "Bluesky 视频下载器是一个免费的在线工具，帮助您从 Bluesky 社交媒体平台下载高质量的 MP4 视频。",
            image: "https://www.saveplays.com/images/bluesky-downloader.png",
            url: "https://www.saveplays.com/bluesky-downloader",
            review: {
                "@type": "Review",
                author: { "@type": "Person", name: "张伟" },
                datePublished: "2025-01-11",
                reviewBody: "SavePlays 的 Bluesky 视频下载器快速、可靠且完全免费。强烈推荐！",
                name: "最佳 Bluesky 下载器",
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
    title: "Bluesky 视频下载器 🦋",
    description: "轻松下载您最喜爱的 Bluesky 视频，提供高质量 MP4 格式！"
}

export const howTo: howToType = {
    title: "如何使用",
    alt: "如何使用 Bluesky 视频下载器",
    steps: [
        {
            step: "复制链接",
            description: "复制包含您想下载的视频的 Bluesky 帖子的链接。",
        },
        {
            step: "粘贴链接",
            description: "将链接粘贴到上方的输入框中。",
        },
        {
            step: "处理视频",
            description: "点击提交按钮。",
        },
        {
            step: "等待处理",
            description: "等待视频处理完成。您会看到显示进度的进度条。",
        },
        {
            step: "下载视频",
            description: "处理完成后，点击绿色“下载视频”按钮保存视频。",
        },
    ],
};


export const downloadResult: _downloadResult = {
    select_quality: "选择质量",
    download: "下载"
};