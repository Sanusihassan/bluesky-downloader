import type { SeoProps } from "../head";
import type { _downloadResult, heroType, howToType } from "./content";

export const pageProps: SeoProps = {
    title: "Bluesky Видео Загрузчик",
    description:
        "Bluesky Видео Загрузчик — это бесплатный онлайн-инструмент, который помогает скачивать высококачественные MP4-видео с платформы социальной сети Bluesky.",
    image: "https://www.saveplays.com/images/bluesky-downloader.png",
    images: [
        {
            url: "https://www.saveplays.com/images/bluesky-downloader.png",
            width: 1200,
            height: 630,
            alt: "Bluesky Видео Загрузчик от SavePlays",
        },
    ],
    lang: "ru",
    keywords: [
        "Bluesky загрузчик",
        "Bluesky видео загрузчик",
        "Скачать видео с Bluesky",
        "Bluesky MP4 загрузчик",
        "Бесплатный Bluesky загрузчик",
    ],
    noindex: false,
    nofollow: false,
    type: "website",
    locale: "ru_RU",
    structuredData: [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Bluesky Видео Загрузчик",
            description:
                "Bluesky Видео Загрузчик — это бесплатный онлайн-инструмент, который помогает скачивать высококачественные MP4-видео с платформы социальной сети Bluesky.",
            image: "https://www.saveplays.com/images/bluesky-downloader.png",
            url: "https://www.saveplays.com/bluesky-downloader",
            review: {
                "@type": "Review",
                author: { "@type": "Person", name: "Иван Иванов" },
                datePublished: "2025-01-11",
                reviewBody: "Bluesky Видео Загрузчик от SavePlays — это быстро, надежно и абсолютно бесплатно. Рекомендую!",
                name: "Лучший загрузчик для Bluesky",
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
    title: "Bluesky Видео Загрузчик 🦋",
    description: "Легко скачивайте свои любимые видео с Bluesky в формате MP4 высокого качества!"
};

export const howTo: howToType = {
    title: "Как использовать",
    alt: "Как пользоваться Bluesky Видео Загрузчиком",
    steps: [
        {
            step: "Скопируйте ссылку",
            description: "Скопируйте ссылку на пост Bluesky, который содержит нужное вам видео.",
        },
        {
            step: "Вставьте ссылку",
            description: "Вставьте ссылку в поле ввода выше.",
        },
        {
            step: "Обработайте видео",
            description: "Нажмите кнопку «Отправить».",
        },
        {
            step: "Дождитесь обработки",
            description: "Подождите, пока видео будет обработано. Вы увидите индикатор прогресса.",
        },
        {
            step: "Скачайте видео",
            description: 'После обработки нажмите зеленую кнопку "Скачать видео".',
        },
    ],
};


export const downloadResult: _downloadResult = {
    select_quality: "Выберите качество",
    download: "Скачать"
};