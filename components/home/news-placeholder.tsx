import { Newspaper } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/ui/section-header';

const placeholderArticles = [
  {
    title: 'Club News Coming Soon',
    date: 'Stay tuned',
    excerpt:
      'Match reports, player spotlights and club announcements will appear here.',
  },
  {
    title: 'Season Updates',
    date: 'Stay tuned',
    excerpt:
      'Follow our journey throughout the season with regular news and updates.',
  },
  {
    title: 'Community Stories',
    date: 'Stay tuned',
    excerpt:
      'Celebrating the people and moments that make Morecambe Girls FC special.',
  },
];

export function NewsPlaceholder() {
  return (
    <Section background="light" id="news">
      <SectionHeader
        title="Latest News"
        subtitle="Club news, match reports and community stories — coming soon."
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {placeholderArticles.map((article) => (
          <article
            key={article.title}
            className="flex flex-col rounded-sm border border-pitch-100 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-40 items-center justify-center rounded-sm bg-pitch-50">
              <Newspaper className="h-10 w-10 text-pitch-300" aria-hidden />
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-shrimp">
              {article.date}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-pitch-900">
              {article.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-pitch-600">
              {article.excerpt}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
