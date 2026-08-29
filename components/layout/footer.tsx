import Link from 'next/link';
import { Award, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { siteConfig, navLinks } from '@/lib/site';
import { Logo } from './logo';
import { Container } from './container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pitch text-white">
      <Container className="section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" showTagline badgeSize="lg" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Inspiring girls&apos; football across Morecambe, Lancaster,
              Heysham, Bare and Carnforth. Proudly part of the{' '}
              {siteConfig.parentClub.name} family.
            </p>
            <a
              href={siteConfig.links.kingsAward}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-white"
            >
              <Award className="h-4 w-4 shrink-0" aria-hidden />
              King&apos;s Award for Voluntary Service 2023
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              Contact
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contacts.chairman.phoneHref}
                  className="flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span>
                    {siteConfig.contacts.chairman.name}, {siteConfig.contacts.chairman.role}
                    <br />
                    {siteConfig.contacts.chairman.phone}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              Club &amp; FA Links
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={siteConfig.links.clubShop}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Club Shop
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.safeguarding}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  FA Safeguarding
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.parentsCodeOfConduct}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Parent &amp; Spectator Code
                </a>
              </li>
            </ul>

            <h2 className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-gold">
              Follow Us
            </h2>
            <div className="mt-3 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-gold hover:text-pitch-900"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-gold hover:text-pitch-900"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-gold hover:text-pitch-900"
                aria-label="Twitter / X"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-white/50">
              With thanks to our sponsors for supporting girls&apos; football
              in Morecambe, Lancaster and Heysham.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Affiliated with{' '}
            <a
              href={siteConfig.parentClub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {siteConfig.parentClub.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
