import { ageGroups } from './age-groups';
import { faqItems, siteConfig } from './site';

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

function absoluteUrl(path: string): string {
  if (path.startsWith('http')) {
    return path;
  }

  return `${siteConfig.url}${path}`;
}

export function organizationSchema() {
  return {
    '@type': ['SportsOrganization', 'SportsClub'],
    '@id': organizationId,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, 'Morecambe Girls Football Club'],
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.brand.logo),
    image: absoluteUrl('/gallery/team-photo.jpg'),
    email: siteConfig.email,
    telephone: siteConfig.contacts.chairman.phoneHref.replace('tel:', ''),
    description: siteConfig.description,
    sport: 'Football',
    areaServed: siteConfig.areasServed.map((name) => ({
      '@type': 'Place',
      name,
    })),
    memberOf: {
      '@type': 'SportsOrganization',
      name: siteConfig.parentClub.name,
      url: siteConfig.parentClub.url,
    },
    award: "King's Award for Voluntary Service 2023",
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
    ],
    subOrganization: ageGroups.map((group) => ({
      '@type': 'SportsTeam',
      '@id': `${siteConfig.url}${group.href}#team`,
      name: `${siteConfig.name} ${group.name}`,
      sport: 'Football',
      url: `${siteConfig.url}${group.href}`,
    })),
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'en-GB',
    publisher: { '@id': organizationId },
  };
}

export function siteGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema(), websiteSchema()],
  };
}

export function breadcrumbSchema(
  items: readonly { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function sportsTeamSchema(options: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    '@id': `${absoluteUrl(options.path)}#team`,
    name: options.name,
    sport: 'Football',
    url: absoluteUrl(options.path),
    description: options.description,
    image: absoluteUrl(options.image ?? '/gallery/team-photo.jpg'),
    parentOrganization: { '@id': organizationId },
    location: {
      '@type': 'Place',
      name: 'Morecambe, Lancaster and Heysham',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Morecambe',
        addressRegion: 'Lancashire',
        addressCountry: 'GB',
      },
    },
  };
}

export function teamsCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Morecambe Girls FC teams',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Wild Cats',
        url: `${siteConfig.url}/wild-cats`,
      },
      ...ageGroups.map((group, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: `${siteConfig.name} ${group.name}`,
        url: `${siteConfig.url}${group.href}`,
      })),
    ],
  };
}
