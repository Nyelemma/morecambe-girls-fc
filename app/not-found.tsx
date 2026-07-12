import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-pitch-50 py-24">
      <Container className="text-center">
        <p className="font-display text-8xl font-bold text-shrimp/20">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-pitch-900">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pitch-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or doesn&apos;t exist yet.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/teams" variant="ghost">
            View Teams
          </Button>
        </div>
      </Container>
    </div>
  );
}
