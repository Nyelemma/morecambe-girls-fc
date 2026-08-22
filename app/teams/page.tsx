import { createPageMetadata } from '@/lib/metadata';
import { teams } from '@/lib/site';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { TeamCard } from '@/components/cards/team-card';
import { CtaBanner } from '@/components/ui/section-header';

export const metadata = createPageMetadata({
  title: 'Teams',
  description:
    'Explore all age groups at Morecambe Girls FC — from Wild Cats to U16. Find the right team for your daughter.',
  path: '/teams',
});

export default function TeamsPage() {
  return (
    <>
      <PageHero
        title="Our Teams"
        subtitle="A complete pathway from Wild Cats to U16, with teams for every age group."
        image={null}
        overlay="shrimp"
      />

      <Section>
        <SectionHeader
          title="Every Team & Age Group"
          subtitle="Our pathway gives girls a welcoming place to play and develop at every stage, from their first session through to U16 football."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <TeamCard key={team.slug} team={team} />
          ))}
        </div>
      </Section>

      <Section background="light">
        <CtaBanner
          title="Not Sure Which Team?"
          description="Get in touch and we'll help you find the right age group for your daughter."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          secondaryLabel="View FAQ"
          secondaryHref="/faq"
        />
      </Section>
    </>
  );
}
