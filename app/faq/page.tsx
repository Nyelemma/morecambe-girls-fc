import { createPageMetadata } from '@/lib/metadata';
import { faqItems, siteConfig } from '@/lib/site';
import { faqPageSchema } from '@/lib/schema';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Accordion } from '@/components/ui/accordion';
import { CtaBanner } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata = createPageMetadata({
  title: 'Join Morecambe Girls FC | Age Groups & FAQ',
  description:
    'Answers for parents joining Morecambe Girls FC: age groups, Wild Cats, training in Morecambe, beginners, costs and how to get in touch.',
  path: '/faq',
  keywords: [
    'join Morecambe Girls FC',
    'girls football Morecambe FAQ',
    'how to join girls football Morecambe',
  ],
  ogImage: '/gallery/team-fun.jpg',
  ogImageAlt: 'Morecambe Girls FC players together after a session',
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers for parents looking to join girls football in Morecambe."
        image="/gallery/team-fun.jpg"
        imageAlt="Morecambe Girls FC players together after a session"
        size="default"
      />

      <Section>
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]}
        />
        <SectionHeader
          title="Common Questions"
          subtitle="Can't find what you're looking for? Get in touch and we'll be happy to help."
        />
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqItems} />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
          <Button
            href={siteConfig.welcomePack.path}
            download={siteConfig.welcomePack.filename}
            variant="ghost"
          >
            Download Welcome Pack
          </Button>
        </div>
      </Section>

      <Section background="light">
        <CtaBanner
          title="Still Have Questions?"
          description="Our team is here to help. Send us a message and we'll get back to you as soon as possible."
          primaryLabel="Get in Touch"
          primaryHref="/contact"
        />
      </Section>
    </>
  );
}
