import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Container } from './container';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string | null;
  size?: 'default' | 'large';
  overlay?: 'dark' | 'shrimp';
};

export function PageHero({
  title,
  subtitle,
  image = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80',
  size = 'default',
  overlay = 'dark',
}: PageHeroProps) {
  return (
    <header
      className={cn(
        'relative flex items-end overflow-hidden bg-pitch pitch-frame',
        size === 'large' ? 'min-h-[70vh]' : 'min-h-[40vh] md:min-h-[45vh]'
      )}
    >
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div
        className={cn(
          'absolute inset-0',
          overlay === 'shrimp' ? 'bg-hero-gradient' : 'bg-pitch/80'
        )}
        aria-hidden
      />
      <div className="absolute inset-0 bg-pitch-lines opacity-30" aria-hidden />
      <Container className="relative z-10 w-full pb-12 pt-32 md:pb-16 md:pt-40">
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Morecambe Girls FC
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-bold uppercase tracking-wide text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/85 md:text-xl">
            {subtitle}
          </p>
        )}
      </Container>
    </header>
  );
}
