import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2
        className={cn(
          'section-heading',
          light && 'text-white',
          align === 'center' && 'mx-auto'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'section-subheading',
            light && 'text-white/80',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

type CtaBannerProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-sm bg-shrimp px-8 py-12 text-center md:px-16 md:py-16">
      <div className="absolute inset-0 bg-pitch-lines opacity-20" aria-hidden />
      <div className="relative">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="gold" size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline" size="lg">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
