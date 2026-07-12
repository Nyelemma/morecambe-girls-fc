import type { MetadataRoute } from 'next';
import { siteConfig, teams } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/teams',
    '/wild-cats',
    '/sponsors',
    '/faq',
    '/contact',
    '/privacy',
  ];

  const teamPages = teams
    .filter((team) => !team.isWildCats)
    .map((team) => `/teams/${team.slug}`);

  const allPages = [...staticPages, ...teamPages];

  return allPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/teams/') ? 0.7 : 0.8,
  }));
}
