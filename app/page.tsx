import { Hero } from '@/components/home/hero';
import { AboutPreview } from '@/components/home/about-preview';
import { TeamsPreview } from '@/components/home/teams-preview';
import { WildCatsPreview } from '@/components/home/wild-cats-preview';
import { WelcomePack } from '@/components/home/welcome-pack';
import { SponsorsPreview } from '@/components/home/sponsors-preview';
import { NewsPlaceholder } from '@/components/home/news-placeholder';
import { ContactCta } from '@/components/home/contact-cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <TeamsPreview />
      <WildCatsPreview />
      <WelcomePack />
      <SponsorsPreview />
      <NewsPlaceholder />
      <ContactCta />
    </>
  );
}
