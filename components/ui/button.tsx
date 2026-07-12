import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  download?: string;
  className?: string;
  children: React.ReactNode;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-shrimp text-white hover:bg-shrimp-600 focus-visible:ring-shrimp shadow-club',
  secondary:
    'bg-pitch text-white hover:bg-pitch-800 focus-visible:ring-pitch',
  outline:
    'border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white',
  ghost:
    'text-shrimp hover:bg-shrimp-50 focus-visible:ring-shrimp',
  gold:
    'bg-gold text-pitch-900 hover:bg-gold-400 focus-visible:ring-gold shadow-club',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm font-semibold',
  lg: 'px-8 py-4 text-base font-semibold',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  download,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-sm font-display uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          className={classes}
          download={download}
          {...(download
            ? {}
            : { target: '_blank', rel: 'noopener noreferrer' })}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
