'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type AccordionItem = {
  question: string;
  answer: string;
  links?: readonly { label: string; href: string }[];
};

type AccordionProps = {
  items: readonly AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-pitch-100 rounded-lg border border-pitch-100 bg-white shadow-sm">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-pitch-50"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold uppercase tracking-wide text-pitch-900 md:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-gold-600 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
                aria-hidden
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-200',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-pitch-600 leading-relaxed">
                  {item.answer}
                </p>
                {item.links && item.links.length > 0 && (
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 px-6 pb-5 text-sm">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="font-medium text-shrimp hover:underline"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
