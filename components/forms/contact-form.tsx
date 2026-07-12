'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type EnquiryType = 'general' | 'registration' | 'sponsorship';

const enquiryOptions: { value: EnquiryType; label: string }[] = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'registration', label: 'Player Registration' },
  { value: 'sponsorship', label: 'Sponsorship Enquiry' },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [enquiryType, setEnquiryType] = useState<EnquiryType>('general');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-lg border border-pitch-100 bg-white p-10 text-center shadow-sm">
        <CheckCircle className="h-12 w-12 text-shrimp" aria-hidden />
        <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-pitch-900">
          Message Sent
        </h3>
        <p className="mt-2 max-w-sm text-pitch-600">
          Thank you for getting in touch. A member of our team will respond to
          your enquiry as soon as possible.
        </p>
        <Button
          variant="ghost"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-pitch-100 bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      <fieldset className="mb-6">
        <legend className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-pitch-900">
          Enquiry Type
        </legend>
        <div className="flex flex-wrap gap-2">
          {enquiryOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setEnquiryType(option.value)}
              className={cn(
                'rounded-sm px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider transition-colors',
                enquiryType === option.value
                  ? 'bg-shrimp text-white'
                  : 'bg-pitch-50 text-pitch-600 hover:bg-pitch-100'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-pitch-700">
            Your Name <span className="text-shrimp">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-sm border border-pitch-200 px-4 py-3 text-pitch-900 transition-colors focus:border-shrimp focus:outline-none focus:ring-2 focus:ring-shrimp/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-pitch-700">
            Email Address <span className="text-shrimp">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-sm border border-pitch-200 px-4 py-3 text-pitch-900 transition-colors focus:border-shrimp focus:outline-none focus:ring-2 focus:ring-shrimp/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-pitch-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-sm border border-pitch-200 px-4 py-3 text-pitch-900 transition-colors focus:border-shrimp focus:outline-none focus:ring-2 focus:ring-shrimp/20"
          />
        </div>
        <div>
          <label htmlFor="age-group" className="mb-1.5 block text-sm font-medium text-pitch-700">
            Age Group (if applicable)
          </label>
          <select
            id="age-group"
            name="age-group"
            className="w-full rounded-sm border border-pitch-200 px-4 py-3 text-pitch-900 transition-colors focus:border-shrimp focus:outline-none focus:ring-2 focus:ring-shrimp/20"
            defaultValue=""
          >
            <option value="" disabled>
              Select age group
            </option>
            <option value="wild-cats">Wild Cats</option>
            {['U7', 'U8', 'U9', 'U10', 'U11', 'U12', 'U13', 'U14', 'U15', 'U16'].map(
              (age) => (
                <option key={age} value={age.toLowerCase()}>
                  {age}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-pitch-700">
          Message <span className="text-shrimp">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-sm border border-pitch-200 px-4 py-3 text-pitch-900 transition-colors focus:border-shrimp focus:outline-none focus:ring-2 focus:ring-shrimp/20"
          placeholder="Tell us how we can help..."
        />
      </div>

      <input type="hidden" name="enquiry-type" value={enquiryType} />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-pitch-500">
          Or email us directly at{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-shrimp hover:underline">
            {siteConfig.email}
          </a>
        </p>
        <Button type="submit" variant="primary">
          <Send className="h-4 w-4" />
          Send Message
        </Button>
      </div>
    </form>
  );
}
