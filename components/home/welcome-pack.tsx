import { Download, FileText } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';

export function WelcomePack() {
  return (
    <Section background="light" id="welcome-pack">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-shrimp/10">
          <FileText className="h-8 w-8 text-shrimp" aria-hidden />
        </div>
        <h2 className="section-heading">Welcome Pack</h2>
        <p className="section-subheading mx-auto">
          Everything you need to know about joining Morecambe Girls FC — from kit
          requirements and training schedules to club policies and contact
          details.
        </p>
        <Button
          href={siteConfig.welcomePack.path}
          download={siteConfig.welcomePack.filename}
          variant="primary"
          size="lg"
          className="mt-8"
        >          <Download className="h-5 w-5" />
          Download Our Welcome Pack
        </Button>
        <p className="mt-4 text-sm text-pitch-500">
          PDF format · Free to download
        </p>
      </div>
    </Section>
  );
}
