import { notFound } from 'next/navigation';
import { createPageMetadata } from '@/lib/metadata';
import {
  competitiveTeams,
  getTeamBySlug,
  teamPlaceholderSections,
} from '@/lib/site';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { CtaBanner } from '@/components/ui/section-header';

type TeamPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return competitiveTeams.map((team) => ({ slug: team.slug }));
}

export async function generateMetadata({ params }: TeamPageProps) {
  const { slug } = params;
  const team = getTeamBySlug(slug);

  if (!team || team.isWildCats) {
    return { title: 'Team Not Found' };
  }

  return createPageMetadata({
    title: team.name,
    description: `${team.name} — ${team.description} Part of Morecambe Girls FC.`,
    path: `/teams/${team.slug}`,
  });
}

export default function TeamPage({ params }: TeamPageProps) {
  const { slug } = params;
  const team = getTeamBySlug(slug);

  if (!team || team.isWildCats) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={team.name}
        subtitle={team.ageRange}
        image={team.image}
        overlay="shrimp"
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-pitch-600">
            {team.description}
          </p>
          <p className="mt-6 rounded-sm border border-gold/30 bg-gold/10 px-6 py-4 font-medium text-pitch-800">
            More information about this team is coming soon. Check back shortly
            for fixtures, coaching staff, player information and news.
          </p>
        </div>
      </Section>

      <Section background="light">
        <h2 className="mb-8 text-center font-display text-2xl font-bold uppercase tracking-wide text-pitch-900 md:text-3xl">
          Coming Soon
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamPlaceholderSections.map((section) => (
            <div
              key={section}
              className="flex flex-col items-center rounded-sm border border-dashed border-pitch-200 bg-white p-8 text-center"
            >
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-pitch-400">
                {section}
              </h3>
              <p className="mt-2 text-sm text-pitch-500">Content coming soon</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/teams" variant="ghost">
            All Teams
          </Button>
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </Section>

      <Section background="light">
        <CtaBanner
          title={`Interested in ${team.shortName}?`}
          description="Register your interest and we'll be in touch with training times and registration details."
          primaryLabel="Get in Touch"
          primaryHref="/contact"
        />
      </Section>
    </>
  );
}
