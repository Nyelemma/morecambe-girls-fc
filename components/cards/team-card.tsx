import { Trophy } from 'lucide-react';
import type { Team } from '@/lib/site';
import { cn } from '@/lib/utils';

type TeamCardProps = {
  team: Team;
  className?: string;
};

export function TeamCard({ team, className }: TeamCardProps) {
  return (
    <article
      className={cn(
        'relative flex flex-col overflow-hidden rounded-sm border border-pitch-100 bg-white p-6 shadow-sm',
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gold" aria-hidden />
      <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold-600">
        {team.ageRange}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-pitch-900">
        {team.shortName}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-pitch-600">
        {team.description}
      </p>
      {team.highlight && (
        <p className="mt-4 inline-flex items-center gap-1.5 self-start rounded-sm bg-shrimp/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-shrimp">
          <Trophy className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {team.highlight}
        </p>
      )}
    </article>
  );
}
