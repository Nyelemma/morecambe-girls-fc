import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ageGroups, getAgeGroup } from '@/lib/age-groups';
import { teams } from '@/lib/site';
import { createPageMetadata } from '@/lib/metadata';
import { sportsTeamSchema } from '@/lib/schema';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { CtaBanner } from '@/components/ui/section-header';
import { TeamCard } from '@/components/cards/team-card';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';

type TeamPageProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ageGroups.map((group) => ({ slug: group.slug }));
}

export function generateMetadata({ params }: TeamPageProps) {
  const group = getAgeGroup(params.slug);

  if (!group) {
    return {};
  }

  return createPageMetadata({
    title: `${group.title} | Morecambe Girls FC`,
    description: group.description,
    path: group.href,
    keywords: [
      `girls football ${group.shortName} Morecambe`,
      `${group.name} Morecambe Girls FC`,
      `junior girls football Morecambe`,
    ],
    ogImage: group.image,
    ogImageAlt: group.imageAlt,
  });
}

function getSquads(slugs: readonly string[]) {
  return teams.filter((team) => slugs.includes(team.slug));
}

export default function AgeGroupPage({ params }: TeamPageProps) {
  const group = getAgeGroup(params.slug);

  if (!group) {
    notFound();
  }

  const squads = getSquads(group.teamSlugs);
  const nearbyGroups = ageGroups.filter((item) => item.slug !== group.slug);

  return (
    <>
      <JsonLd
        data={sportsTeamSchema({
          name: `Morecambe Girls FC ${group.name}`,
          description: group.description,
          path: group.href,
          image: group.image,
        })}
      />
      <PageHero
        title={group.h1}
        subtitle={`${group.name} at Morecambe Girls FC — girls football in Morecambe and across Lancaster and Heysham.`}
        image={group.image}
        imageAlt={group.imageAlt}
        overlay="dark"
      />

      <Section>
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Teams', path: '/teams' },
            { name: group.name, path: group.href },
          ]}
        />
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title={`${group.name} at Morecambe Girls FC`}
            subtitle={`A dedicated ${group.ageRange.toLowerCase()} girls football team in the Morecambe Girls FC pathway.`}
          />
          <div className="space-y-4 text-pitch-600 leading-relaxed">
            <p>{group.intro}</p>
            <p>{group.focus}</p>
            <p>
              We do not publish a public fixture list here. Training times,
              venues and upcoming matches are shared with registered families.
              To enquire about joining, contact the club and mention{' '}
              {group.shortName}.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Enquire about {group.shortName}
            </Button>
            <Button href="/faq" variant="ghost">
              Read the FAQ
            </Button>
          </div>
        </div>
      </Section>

      {squads.length > 1 && (
        <Section background="light">
          <SectionHeader
            title={`${group.shortName} Squads`}
            subtitle="More than one squad at this age group, so more girls can play regularly."
            align="center"
          />
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {squads.map((team) => (
              <TeamCard key={team.slug} team={team} linked={false} />
            ))}
          </div>
        </Section>
      )}

      <Section background={squads.length > 1 ? undefined : 'light'}>
        <SectionHeader
          title="Training, fixtures and development"
          subtitle="Useful information while we keep session details with registered families."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Training',
              text: 'Sessions take place across Morecambe, Lancaster and Heysham. Exact days, times and venues are confirmed when you register.',
            },
            {
              title: 'Fixtures',
              text: 'Match details are shared with the team. If you are new to the club, ask us about the current playing programme for this age group.',
            },
            {
              title: 'Player development',
              text: 'Coaches focus on enjoyment, technical progress and teamwork — from first matches through to more competitive youth football.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-sm border border-pitch-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-pitch-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pitch-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Other age groups"
          subtitle="Explore the full Morecambe Girls FC pathway, from Wild Cats to U16."
        />
        <p className="mb-6 text-pitch-600">
          Looking for a different age group? See{' '}
          <Link href="/teams" className="font-medium text-shrimp hover:underline">
            all girls football teams
          </Link>
          , our{' '}
          <Link href="/wild-cats" className="font-medium text-shrimp hover:underline">
            Wild Cats programme
          </Link>
          , or{' '}
          <Link href="/contact" className="font-medium text-shrimp hover:underline">
            contact the club
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          {nearbyGroups.map((item) => (
            <Button key={item.slug} href={item.href} variant="ghost" size="sm">
              {item.shortName}
            </Button>
          ))}
        </div>
      </Section>

      <Section background="light">
        <CtaBanner
          title={`Join ${group.name}`}
          description={`Enquire about ${group.shortName} girls football at Morecambe Girls FC. Tell us your daughter's age and we will help you take the next step.`}
          primaryLabel="Contact the Club"
          primaryHref="/contact"
          secondaryLabel="View All Teams"
          secondaryHref="/teams"
        />
      </Section>
    </>
  );
}
