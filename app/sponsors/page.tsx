import { createPageMetadata } from '@/lib/metadata';
import {
  sponsors,
  sponsorshipBenefits,
  sponsorshipOpportunities,
} from '@/lib/site';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { SponsorLogo } from '@/components/cards/sponsor-logo';
import { CtaBanner } from '@/components/ui/section-header';
import { Check } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

export const metadata = createPageMetadata({
  title: 'Sponsors | Support Girls Football in Morecambe',
  description:
    'Meet the local businesses supporting Morecambe Girls FC and find out how to sponsor girls football in Morecambe, Lancaster and Heysham.',
  path: '/sponsors',
  keywords: [
    'Morecambe Girls FC sponsors',
    'sponsor girls football Morecambe',
    'community football sponsors Lancashire',
  ],
  ogImage: '/gallery/trophy-celebration.jpg',
  ogImageAlt: 'Morecambe Girls FC players celebrating with a trophy',
});

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        title="Our Sponsors"
        subtitle="Thank you to the businesses who believe in girls' football in Morecambe."
        image="/gallery/trophy-celebration.jpg"
        imageAlt="Morecambe Girls FC players celebrating a tournament win"
      />

      <Section>
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Sponsors', path: '/sponsors' },
          ]}
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-pitch-600">
            Morecambe Girls FC is grateful to the local businesses and
            organisations who support our club. Their generosity helps us
            provide quality coaching, kit and facilities for girls across
            every age group. Together, we&apos;re growing the game in our
            community.
          </p>
        </div>
      </Section>

      <Section background="light">
        <SectionHeader
          title="Current Sponsors"
          subtitle="We're proud to partner with these local businesses."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {sponsors.map((sponsor) => (
            <SponsorLogo
              key={sponsor.name}
              name={sponsor.name}
              tier={sponsor.tier}
              href={sponsor.href}
              logo={sponsor.logo}
              logoBg={sponsor.logoBg}
            />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-pitch-500">
          Thank you to every business supporting girls&apos; football in
          Morecambe, Lancaster and Heysham.
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              title="Why Sponsor Us?"
              subtitle="Partner with a growing, ambitious club making a real difference."
            />
            <ul className="space-y-3">
              {sponsorshipBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden />
                  <span className="text-pitch-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader title="Sponsorship Packages" />
            <div className="space-y-4">
              {sponsorshipOpportunities.map((opportunity) => (
                <div
                  key={opportunity.title}
                  className="rounded-sm border border-pitch-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-pitch-900">
                    {opportunity.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-pitch-600">
                    {opportunity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <CtaBanner
          title="Become a Sponsor"
          description="Support girls' football in Morecambe and gain valuable exposure for your business. Packages are flexible — let's find the right fit."
          primaryLabel="Enquire About Sponsorship"
          primaryHref="/contact"
        />
      </Section>
    </>
  );
}
