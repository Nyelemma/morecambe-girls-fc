import { createPageMetadata } from '@/lib/metadata';
import { faqItems, siteConfig } from '@/lib/site';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Accordion } from '@/components/ui/accordion';
import { CtaBanner } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

export const metadata = createPageMetadata({
  title: 'FAQ',
  description:
    'Frequently asked questions about joining Morecambe Girls FC — age groups, training, equipment, costs and more.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="FAQ"
        subtitle="Answers to the questions parents and players ask most often."
        image="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920&q=80"
        size="default"
      />

      <Section>
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
