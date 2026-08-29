import Image from 'next/image';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';

export function WildCatsPreview() {
  return (
    <Section background="dark" id="wild-cats">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-sm pitch-frame">
          <Image
            src="/wild-cats-homepage.jpg"
            alt="Young girls enjoying Wild Cats football in Morecambe"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Ages 5–11
          </p>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            Wild Cats
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Wild Cats is our entry-level programme for girls aged 5–11 who want to
            try football for the first time or develop their skills in a fun,
            non-competitive environment.
          </p>
          <ul className="mt-6 space-y-3 text-white/75">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Fun, engaging sessions led by qualified coaches
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              No experience needed — all abilities welcome
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              A perfect first step before joining a team
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/wild-cats" variant="gold">
              Find Out More
            </Button>
            <Button href="/contact" variant="outline">
              Register Interest
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
