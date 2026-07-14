import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface SEOProps {
    title: string;
    description?: string;
    path?: string;
    image?: string;
}

export function constructMetadata({
    title,
    description = siteConfig.description,
    path = '',
    image = siteConfig.ogImage,
}: SEOProps): Metadata {
    const url = `${siteConfig.url}${path}`;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            images: [{ url: image, width: 1200, height: 630 }],
            locale: 'ar_SA', // أو متغير حسب اللغة
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
        alternates: {
            canonical: url,
        },
    };
}
