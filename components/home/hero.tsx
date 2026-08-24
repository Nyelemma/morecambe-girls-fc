import Image from 'next/image';
import { ArrowRight, Award } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pitch-frame">
      <Image
        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80"
        alt="Girls playing football"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div className="absolute inset-0 bg-pitch-lines opacity-20" aria-hidden />

      <Container className="relative z-10 w-full pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-3xl">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            {siteConfig.name}
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.1] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            From Wild Cats to U16, we provide a welcoming pathway for girls of
            all abilities across Morecambe, Lancaster and Heysham to develop
            their skills, make lifelong friends and fall in love with football.
            Proudly part of the {siteConfig.parentClub.name} family.
          </p>
          <a
            href={siteConfig.links.kingsAward}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-sm bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white"
          >
            <Award className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            Winners of The King&apos;s Award for Voluntary Service 2023
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="gold" size="lg">
              Join Our Club
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
          <Button
            href="/teams"
            variant="ghost"
            size="lg"
            className="mt-4 text-white hover:bg-white/10 hover:text-white"
          >
            View Our Teams
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" aria-hidden />
    </section>
  );
}
