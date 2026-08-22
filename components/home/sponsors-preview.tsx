import { sponsors } from '@/lib/site';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { SponsorLogo } from '@/components/cards/sponsor-logo';
import { Button } from '@/components/ui/button';

export function SponsorsPreview() {
  return (
    <Section id="sponsors">
      <SectionHeader
        title="Our Sponsors"
        subtitle="We're grateful to the local businesses who support girls' football in Morecambe. Could your business be next?"
        align="center"
      />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {sponsors.slice(0, 6).map((sponsor) => (
          <SponsorLogo
            key={sponsor.name}
            name={sponsor.name}
            tier={sponsor.tier}
            href={sponsor.href}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/sponsors" variant="primary" size="lg">
          Become a Sponsor
        </Button>
      </div>
    </Section>
  );
}
