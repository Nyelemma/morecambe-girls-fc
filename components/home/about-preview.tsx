import { ArrowRight } from 'lucide-react';
import { clubValues } from '@/lib/site';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

export function AboutPreview() {
  return (
    <Section background="light" id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            title="About Our Club"
            subtitle="Morecambe Girls FC is a community-driven club dedicated to developing young female footballers in a positive, professional environment."
          />
          <p className="mb-4 text-pitch-600 leading-relaxed">
            Founded with the ambition to grow girls&apos; football in Morecambe,
            our club offers a clear pathway from first steps in the game through
            to competitive youth football. We share the values and colours of
            Morecambe FC, creating a sense of belonging that extends from the
            grassroots to the professional game.
          </p>
          <p className="mb-8 text-pitch-600 leading-relaxed">
            Our qualified coaches focus on technical development, teamwork and
            enjoyment — ensuring every player feels valued, challenged and
            inspired to reach their potential.
          </p>
          <Button href="/about" variant="primary">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {clubValues.map((value) => (
            <div
              key={value.title}
              className="rounded-sm border border-pitch-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-pitch-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pitch-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
