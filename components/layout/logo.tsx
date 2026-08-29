import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  variant?: 'default' | 'light';
  showTagline?: boolean;
  badgeSize?: 'sm' | 'md' | 'lg';
};

const badgeSizes = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
};

export function Logo({
  className,
  variant = 'default',
  showTagline = false,
  badgeSize = 'md',
}: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={cn('group flex items-center gap-3', className)}>
      <Image
        src={siteConfig.brand.logo}
        alt="Morecambe Girls FC club badge"
        width={64}
        height={64}
        className={cn(
          'shrink-0 object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-105',
          badgeSizes[badgeSize]
        )}
        priority
      />
      <div className="flex flex-col">
        <span
          className={cn(
            'font-display text-lg font-bold uppercase leading-tight tracking-wide md:text-xl',
            isLight ? 'text-white' : 'text-pitch-900'
          )}
        >
          Morecambe Girls FC
        </span>
        {showTagline && (
          <span
            className={cn(
              'text-xs font-medium uppercase tracking-widest',
              isLight ? 'text-gold-300' : 'text-pitch-600'
            )}
          >
            Part of the {siteConfig.parentClub.name} Family
          </span>
        )}
      </div>
    </Link>
  );
}
