import Link from 'next/link';
import { JsonLd } from './json-ld';
import { breadcrumbSchema } from '@/lib/schema';

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-pitch-500">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden>/</span>}
                {isLast ? (
                  <span className="font-medium text-pitch-700">{item.name}</span>
                ) : (
                  <Link href={item.path} className="transition-colors hover:text-shrimp">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
