import type { MetadataRoute } from 'next';
import { ageGroups } from '@/lib/age-groups';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = (
    [
      { path: '', changeFrequency: 'weekly', priority: 1 },
      { path: '/teams', changeFrequency: 'weekly', priority: 0.9 },
      { path: '/wild-cats', changeFrequency: 'monthly', priority: 0.9 },
      { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
      { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
      { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
      { path: '/sponsors', changeFrequency: 'monthly', priority: 0.6 },
      { path: '/privacy', changeFrequency: 'yearly', priority: 0.2 },
    ] as const
  ).map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const teamPages: MetadataRoute.Sitemap = ageGroups.map((group) => ({
    url: `${siteConfig.url}${group.href}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...teamPages];
}
