import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';
import { sportsTeamSchema } from '@/lib/schema';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { CtaBanner } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata = createPageMetadata({
  title: 'Wild Cats Football in Morecambe | Morecambe Girls FC',
  description:
    'Wild Cats football in Morecambe for girls aged 5–11. Fun, non-competitive sessions at Morecambe Girls FC. No experience needed — beginners welcome.',
  path: '/wild-cats',
  keywords: [
    'Wild Cats football Morecambe',
    'girls football beginners Morecambe',
    'junior girls football Morecambe',
  ],
  ogImage: '/gallery/wildcats-training.jpg',
  ogImageAlt: 'Girls enjoying a Wild Cats football session in Morecambe',
});

const benefits = [
  {
    title: 'Fun First',
    description:
      'Sessions are designed to be enjoyable above all else, using games and activities that keep girls engaged and excited to return.',
  },
  {
    title: 'Qualified Coaches',
    description:
      'All Wild Cats sessions are led by FA-qualified coaches who understand how to work with young players.',
  },
  {
    title: 'Safe Environment',
    description:
      'We prioritise player welfare with appropriate safeguarding policies, first aid provision and a supportive atmosphere.',
  },
  {
    title: 'Pathway to Teams',
    description:
      'Wild Cats is the perfect stepping stone to our age-group teams, from Under 7s through to U16, when girls are ready for more structured football.',
  },
];

export default function WildCatsPage() {
  return (
    <>
      <JsonLd
        data={sportsTeamSchema({
          name: 'Morecambe Girls FC Wild Cats',
          description:
            'Wild Cats football in Morecambe for girls aged 5–11. Fun, non-competitive sessions at Morecambe Girls FC.',
          path: '/wild-cats',
          image: '/gallery/wildcats-training.jpg',
        })}
      />
      <PageHero
        title="Wild Cats"
        subtitle="Fun football in Morecambe for girls aged 5–11 — no experience needed."
        image="/gallery/wildcats-training.jpg"
        imageAlt="Young girls enjoying a Wild Cats football session"
        size="large"
        overlay="dark"
      />

      <Section>
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Teams', path: '/teams' },
            { name: 'Wild Cats', path: '/wild-cats' },
          ]}
        />
        <div className="mx-auto max-w-3xl">
          <SectionHeader title="What is Wild Cats?" />
          <div className="space-y-4 text-pitch-600 leading-relaxed">
            <p>
              Wild Cats is a nationwide initiative supported by The FA, designed
              to give girls their first experience of football. At Morecambe Girls
              FC, our Wild Cats programme offers weekly sessions in Morecambe
              and the surrounding area where girls can learn basic skills, make
              new friends and discover a love for the game.
            </p>
            <p>
              There are no league matches or competitive pressure — just fun,
              engaging football in a welcoming environment. It&apos;s the ideal
              starting point for girls who have never kicked a ball before, as
              well as those who already enjoy playing with friends.
            </p>
          </div>
        </div>
      </Section>

      <Section background="light">
        <SectionHeader
          title="Who Is It For?"
          subtitle="Girls aged 5–11 of all abilities — complete beginners especially welcome."
          align="center"
        />
        <div className="mx-auto max-w-3xl rounded-sm bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-lg leading-relaxed text-pitch-700">
            Whether your daughter has never played football or already enjoys
            kicking a ball in the garden, Wild Cats is for her. We group sessions
            by age and ability to ensure every girl gets the most from their
            experience.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Benefits"
          subtitle="Why Wild Cats is the perfect introduction to football."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-sm border border-pitch-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-pitch-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pitch-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="dark">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            title="How to Join"
            subtitle="Getting started is easy — just get in touch and we'll welcome your daughter to her first session."
            align="center"
            light
          />
          <ol className="mt-8 space-y-4 text-left text-white/80">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-display text-sm font-bold text-pitch-900">
                1
              </span>
              <span className="pt-1">
                Contact us via the form below or email to register your interest
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-display text-sm font-bold text-pitch-900">
                2
              </span>
              <span className="pt-1">
                Attend a free taster session to see if Wild Cats is right for your daughter
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-display text-sm font-bold text-pitch-900">
                3
              </span>
              <span className="pt-1">
                Complete registration and download our Welcome Pack for all the details
              </span>
            </li>
          </ol>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="gold" size="lg">
              Register Interest
            </Button>
            <Button
              href={siteConfig.welcomePack.path}
              download={siteConfig.welcomePack.filename}
              variant="outline"
              size="lg"
            >
              Download Welcome Pack
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <CtaBanner
          title="Give Football a Go"
          description="Wild Cats sessions are running now. Spaces are limited — register your interest today."
          primaryLabel="Get in Touch"
          primaryHref="/contact"
          secondaryLabel="View Age-Group Teams"
          secondaryHref="/teams"
        />
      </Section>
    </>
  );
}
