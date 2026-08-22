import { createPageMetadata } from '@/lib/metadata';
import { clubValues, siteConfig } from '@/lib/site';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { CtaBanner } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

export const metadata = createPageMetadata({
  title: 'About Us',
  description:
    'Learn about Morecambe Girls FC — our mission, values and commitment to developing young female footballers in Lancashire.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A community club with professional ambitions, proudly part of the Morecambe FC family."
        image="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&q=80"
      />

      <Section>
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
              text: 'Age-group teams from U7 to U16 with structured training and league competition.',
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
