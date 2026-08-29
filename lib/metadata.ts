import type { Metadata } from 'next';
import { siteConfig } from './site';

const defaultOgImage = {
  url: '/gallery/team-photo.jpg',
  width: 1200,
  height: 800,
  alt: 'Morecambe Girls FC squad posing together on the pitch',
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  robots?: Metadata['robots'];
};

export function createPageMetadata({
  title,
  description,
  path = '',
  keywords,
  ogImage,
  ogImageAlt,
  robots,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage
    ? {
        url: ogImage,
        width: 1200,
        height: 800,
        alt: ogImageAlt ?? title,
      }
    : defaultOgImage;
  const socialTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    robots,
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_GB',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}

export const homeMetadata = createPageMetadata({
  title: 'Morecambe Girls FC | Girls Football in Morecambe',
  description:
    'Morecambe Girls FC is a grassroots girls football club in Morecambe, Lancaster and Heysham. Join Wild Cats or teams from U7 to U16, part of the Morecambe FC family.',
  path: '',
  keywords: [
    'Morecambe Girls FC',
    'girls football Morecambe',
    'girls football club Morecambe',
    'youth girls football Morecambe',
    'girls football Lancashire',
  ],
});
