import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';

export const metadata = createPageMetadata({
  title: 'Privacy Policy | Morecambe Girls FC',
  description: `Privacy policy for ${siteConfig.name}. How we collect, use and protect your personal information.`,
  path: '/privacy',
  robots: { index: true, follow: true },
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle your personal information."
        size="default"
      />

      <Section>
        <div className="prose-pitch mx-auto max-w-3xl space-y-6 text-pitch-600 leading-relaxed">
          <p className="text-sm text-pitch-500">
            Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </p>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-pitch-900">
              Introduction
            </h2>
            <p className="mt-3">
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo; or
              &ldquo;us&rdquo;) is committed to protecting your privacy. This
              policy explains how we collect, use and safeguard personal
              information when you visit our website or contact us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-pitch-900">
              Information We Collect
            </h2>
            <p className="mt-3">
              We may collect information you provide directly, including your
              name, email address, phone number and any message content when
              you use our contact form or register interest in joining the club.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-pitch-900">
              How We Use Your Information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>To respond to your enquiries</li>
              <li>To process player registration interest</li>
              <li>To communicate club news and updates (with your consent)</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-pitch-900">
              Data Protection
            </h2>
            <p className="mt-3">
              We take appropriate measures to protect your personal information
              against unauthorised access, alteration or disclosure. We do not
              sell or share your data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-pitch-900">
              Your Rights
            </h2>
            <p className="mt-3">
              Under UK data protection law, you have the right to access, correct
              or request deletion of your personal data. To exercise these
              rights, contact us at{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-shrimp hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-pitch-900">
              Contact
            </h2>
            <p className="mt-3">
              For any questions about this privacy policy, please contact{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-shrimp hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <p className="rounded-sm border border-pitch-100 bg-pitch-50 p-4 text-sm text-pitch-500">
            This is a placeholder privacy policy. A full policy should be
            reviewed by the club committee and updated before launch.
          </p>
        </div>
      </Section>
    </>
  );
}
