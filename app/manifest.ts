import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: siteConfig.brand.colors.red,
    icons: [
      {
        src: siteConfig.brand.logo,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
