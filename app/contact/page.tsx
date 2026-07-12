import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { ContactForm } from '@/components/forms/contact-form';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

export const metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Get in touch with Morecambe Girls FC for player registration, general enquiries or sponsorship opportunities.',
  path: '/contact',
});

const enquiryTypes = [
  {
    title: 'General Enquiries',
    description:
      'Questions about the club, training schedules or anything else — we\'re here to help.',
    email: siteConfig.email,
  },
  {
    title: 'Player Registration',
    description:
      'Interested in joining a team or Wild Cats? Tell us your daughter\'s age and we\'ll guide you through registration.',
    email: siteConfig.email,
  },
  {
    title: 'Sponsorship Enquiries',
    description:
      'Interested in supporting girls\' football? We\'d love to discuss sponsorship packages with you.',
    email: siteConfig.email,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you — whether you're a parent, player or potential sponsor."
        image="https://images.unsplash.com/photo-1489944440615-453fc7b73bce?w=1920&q=80"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeader title="Get in Touch" />
            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 text-pitch-600 transition-colors hover:text-shrimp"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-shrimp" aria-hidden />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-start gap-3 text-pitch-600">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-shrimp" aria-hidden />
                <address className="not-italic">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.postcode}
                </address>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-pitch-900">
                Follow Us
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-pitch-50 text-pitch-700 transition-colors hover:bg-shrimp hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-pitch-50 text-pitch-700 transition-colors hover:bg-shrimp hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-pitch-50 text-pitch-700 transition-colors hover:bg-shrimp hover:text-white"
                  aria-label="Twitter / X"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {enquiryTypes.map((type) => (
                <div
                  key={type.title}
                  className="rounded-sm border border-pitch-100 bg-pitch-50 p-4"
                >
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-pitch-900">
                    {type.title}
                  </h3>
                  <p className="mt-1 text-sm text-pitch-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section background="light">
        <SectionHeader
          title="Find Us"
          subtitle="Training and home fixtures take place at venues across the Morecambe area."
          align="center"
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-sm border border-pitch-100 shadow-sm">
          <div className="flex aspect-[16/7] items-center justify-center bg-pitch-100">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 text-pitch-400" aria-hidden />
              <p className="mt-3 font-display text-lg font-semibold uppercase tracking-wide text-pitch-600">
                Google Maps
              </p>
              <p className="mt-1 text-sm text-pitch-500">
                {siteConfig.address.city}, {siteConfig.address.postcode}
              </p>
              <p className="mt-2 text-xs text-pitch-400">
                Map embed placeholder — replace with Google Maps iframe
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
