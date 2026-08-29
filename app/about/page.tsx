import Image from 'next/image';
import { createPageMetadata } from '@/lib/metadata';
import { clubValues, siteConfig } from '@/lib/site';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { CtaBanner } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { Award, ExternalLink } from 'lucide-react';

export const metadata = createPageMetadata({
  title: 'About Morecambe Girls FC | Girls Football Club',
  description:
    'Learn about Morecambe Girls FC, a community girls football club in Morecambe and Lancaster. Our mission, values and pathway from Wild Cats to U16.',
  path: '/about',
  keywords: [
    'About Morecambe Girls FC',
    'girls football club Morecambe',
    'girls football Lancashire',
  ],
  ogImage: '/gallery/stadium-training.jpg',
  ogImageAlt: 'Morecambe Girls FC players training at the stadium',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Morecambe Girls FC"
        subtitle="A community girls football club with professional ambitions, proudly part of the Morecambe FC family."
        image="/gallery/stadium-training.jpg"
        imageAlt="Morecambe Girls FC players training together"
      />

      <Section>
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]}
        />
        <div className="mx-auto max-w-3xl">
          <SectionHeader title="Our Story" />
          <div className="prose-pitch space-y-4 text-pitch-600 leading-relaxed">
            <p>
              Morecambe Girls FC was established with a clear vision: to provide
              girls in our community with the same opportunities, coaching
              standards and sense of pride that boys have enjoyed for
              generations. As part of the {siteConfig.parentClub.name} family,
              we carry the club&apos;s iconic red and white colours and share
              its commitment to community football.
            </p>
            <p>
              From our Wild Cats programme for girls taking their first steps in
              football, through to competitive U16 league football, we offer a
              complete pathway for player development. Our qualified coaches
              create a positive environment where girls can thrive — technically,
              tactically and personally.
            </p>
            <p>
              We believe football has the power to build confidence, friendships
              and life skills. Every girl who pulls on a Morecambe shirt becomes
              part of something bigger than themselves.
            </p>
            <p>
              We train and play across Morecambe, Lancaster and Heysham, and
              welcome girls from nearby communities including Bare and
              Carnforth. The aim is simple: give girls throughout the district
              a place to play football and belong.
            </p>
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-sm border border-gold/30 bg-white p-8 text-center shadow-sm md:flex-row md:gap-8 md:p-10 md:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold/15">
            <Award className="h-8 w-8 text-gold-600" aria-hidden />
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold-600">
              National Recognition
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold uppercase tracking-wide text-pitch-900">
              King&apos;s Award for Voluntary Service
            </h2>
            <p className="mt-3 text-pitch-600 leading-relaxed">
              In 2023, Morecambe Girls FC received The King&apos;s Award for
              Voluntary Service — the highest national honour for local volunteer
              groups in the UK, equivalent to an MBE — in recognition of
              nurturing an inclusive community and promoting physical and mental
              wellbeing through girls&apos; football.
            </p>
            <a
              href={siteConfig.links.kingsAward}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-shrimp transition-colors hover:text-shrimp-600"
            >
              View the King&apos;s Award for Voluntary Service
              <ExternalLink className="h-4 w-4" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm pitch-frame">
            <Image
              src="/gallery/trophy-celebration.jpg"
              alt="Morecambe Girls FC players celebrating a tournament win with medals and a trophy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionHeader
              title="Moments to Remember"
              subtitle="Silverware, smiles and season highlights — just some of the memories our girls have made together."
            />
            <p className="text-pitch-600 leading-relaxed">
              From tournament wins to first steps on the pitch, every season
              brings new moments our players and families are proud of. These
              are the memories that make Morecambe Girls FC feel like a family.
            </p>
          </div>
        </div>
      </Section>

      <Section background="light">
        <SectionHeader
          title="Our Mission"
          subtitle="To inspire, develop and empower the next generation of female footballers in Morecambe and the surrounding area."
          align="center"
        />
        <div className="mx-auto max-w-3xl rounded-sm border border-pitch-100 bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-xl font-medium leading-relaxed text-pitch-700 md:text-2xl">
            &ldquo;To provide every girl in our community with the opportunity to
            play football in a safe, supportive and ambitious environment —
            developing skills for the pitch and for life.&rdquo;
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do on and off the pitch."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clubValues.map((value) => (
            <div
              key={value.title}
              className="rounded-sm border-t-4 border-gold bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-pitch-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pitch-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="light">
        <SectionHeader
          title="Player Development"
          subtitle="A structured pathway from first kick to competitive football."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Wild Cats',
              text: 'Fun, non-competitive sessions introducing girls aged 5–11 to football fundamentals.',
            },
            {
              step: '02',
              title: 'Youth Teams',
              text: 'Age-group teams from U7 to U16 — including U10 Red and Blues — with structured training and league competition.',
            },
            {
              step: '03',
              title: 'Beyond U16',
              text: 'Preparing players for adult football, college programmes and further opportunities.',
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <span className="font-display text-5xl font-bold text-pitch-200">
                {item.step}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-pitch-900">
                {item.title}
              </h3>
              <p className="mt-2 text-pitch-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/teams" variant="primary">
            View Our Teams
          </Button>
          <Button href="/wild-cats" variant="ghost">
            Wild Cats Programme
          </Button>
        </div>
      </Section>

      <Section>
        <CtaBanner
          title="Join the Family"
          description="Ready to be part of Morecambe Girls FC? We'd love to welcome you."
          primaryLabel="Contact Us"
          primaryHref="/contact"
        />
      </Section>
    </>
  );
}
