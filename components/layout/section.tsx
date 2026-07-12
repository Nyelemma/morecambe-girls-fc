import { cn } from '@/lib/utils';
import { Container } from './container';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'shrimp';
};

const backgroundStyles = {
  white: 'bg-white',
  light: 'bg-pitch-50',
  dark: 'bg-pitch text-white',
  shrimp: 'bg-shrimp text-white',
};

export function Section({
  children,
  className,
  id,
  background = 'white',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('section-padding', backgroundStyles[background], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
