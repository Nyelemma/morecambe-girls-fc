import { teams } from '@/lib/site';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { TeamCard } from '@/components/cards/team-card';
import { Button } from '@/components/ui/button';

export function TeamsPreview() {
  const featuredTeams = teams.filter((t) =>
    ['wild-cats', 'under-7s', 'under-11-reds', 'u13-reds', 'u16s'].includes(t.slug)
  );

  return (
    <Section id="teams">
      <SectionHeader
        title="Our Teams"
        subtitle="From Wild Cats to U16, we offer age-appropriate girls football in Morecambe for every stage of the journey."
        align="center"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredTeams.map((team) => (
          <TeamCard key={team.slug} team={team} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/teams" variant="primary" size="lg">
          View All Teams
        </Button>
      </div>
    </Section>
  );
}
