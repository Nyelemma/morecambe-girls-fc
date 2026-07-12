import { Section } from '@/components/layout/section';
import { CtaBanner } from '@/components/ui/section-header';

export function ContactCta() {
  return (
    <Section>
      <CtaBanner
        title="Ready to Join?"
        description="Whether you're a parent looking to register your daughter, a volunteer wanting to get involved, or a business interested in sponsorship — we'd love to hear from you."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View FAQ"
        secondaryHref="/faq"
      />
    </Section>
  );
}
