import { createPageMetadata } from '@/lib/metadata';
import { teams } from '@/lib/site';
import { teamsCollectionSchema } from '@/lib/schema';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { TeamCard } from '@/components/cards/team-card';
import { CtaBanner } from '@/components/ui/section-header';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata = createPageMetadata({
  title: 'Girls Football Teams in Morecambe | Morecambe Girls FC',
  description:
    'Explore Morecambe Girls FC teams from Wild Cats to U16. Find U7, U8, U9, U10, U11, U12, U13, U14, U15 and U16 girls football in Morecambe and Lancaster.',
  path: '/teams',
  keywords: [
    'girls football teams Morecambe',
    'junior girls football Morecambe',
    'youth girls football Morecambe',
  ],
  ogImage: '/gallery/match-action.jpg',
  ogImageAlt: 'Morecambe Girls FC players in match action',
});

export default function TeamsPage() {
  return (
    <>
      <JsonLd data={teamsCollectionSchema()} />
      <PageHero
        title="Girls Football Teams"
        subtitle="A complete pathway from Wild Cats to U16, with girls football teams for every age group in Morecambe, Lancaster and Heysham."
        image="/gallery/match-action.jpg"
        imageAlt="Morecambe Girls FC players competing in a match"
        overlay="dark"
      />

      <Section>
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Teams', path: '/teams' },
          ]}
        />
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
