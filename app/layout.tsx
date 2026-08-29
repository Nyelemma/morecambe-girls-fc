import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Source_Sans_3 } from 'next/font/google';
import { siteConfig } from '@/lib/site';
import { siteGraphSchema } from '@/lib/schema';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { JsonLd } from '@/components/seo/json-ld';
import './globals.css';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Morecambe Girls FC | Girls Football in Morecambe',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Morecambe Girls FC',
    'girls football Morecambe',
    'girls football club Morecambe',
    'girls football Lancaster',
    'girls football Lancashire',
    'junior girls football Morecambe',
    'youth girls football Morecambe',
    'Wild Cats football Morecambe',
    'Morecambe FC girls',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: 'Morecambe Girls FC | Girls Football in Morecambe',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/gallery/team-photo.jpg',
        width: 1200,
        height: 800,
        alt: 'Morecambe Girls FC squad posing together on the pitch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morecambe Girls FC | Girls Football in Morecambe',
    description: siteConfig.description,
    images: ['/gallery/team-photo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: siteConfig.brand.logo,
    apple: siteConfig.brand.logo,
  },
};

export const viewport: Viewport = {
  themeColor: '#981915',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${barlow.variable} ${sourceSans.variable}`}
    >
      <body>
        <JsonLd data={siteGraphSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-shrimp focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
