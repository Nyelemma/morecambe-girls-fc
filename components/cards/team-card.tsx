import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Team } from '@/lib/site';
import { cn } from '@/lib/utils';

type TeamCardProps = {
  team: Team;
  className?: string;
};

export function TeamCard({ team, className }: TeamCardProps) {
  const href = team.isWildCats ? '/wild-cats' : `/teams/${team.slug}`;

  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-club',
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={team.image}
          alt={`${team.name} team`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pitch/90 via-pitch/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">
            {team.ageRange}
          </p>
          <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
            {team.shortName}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex-1 text-sm leading-relaxed text-pitch-600">
          {team.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wider text-shrimp transition-colors group-hover:text-shrimp-600">
          View Team
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
