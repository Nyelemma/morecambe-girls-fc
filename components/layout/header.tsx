'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, FileCheck, Menu, ShieldCheck, ShoppingBag, X } from 'lucide-react';
import { navLinks, siteConfig, type NavLink } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';
import { Container } from './container';

function isLinkActive(pathname: string, href: string, children?: NavLink['children']) {
  if (href === '/') {
    return pathname === '/';
  }

  if (pathname.startsWith(href)) {
    return true;
  }

  return children?.some((child) => pathname.startsWith(child.href)) ?? false;
}

function DesktopNavDropdown({
  link,
  pathname,
}: {
  link: NavLink;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = isLinkActive(pathname, link.href, link.children);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          'inline-flex items-center gap-1 px-3 py-2 font-display text-sm font-semibold uppercase tracking-wider transition-colors',
          isActive ? 'text-gold' : 'text-white/80 hover:text-white'
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((current) => !current)}
      >
        {link.label}
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      {open && link.children && (
        <div className="absolute left-0 top-full z-50 min-w-[220px] pt-2">
          <div className="overflow-hidden rounded-sm border border-white/10 bg-pitch shadow-xl">
            <Link
              href={link.href}
              className="block border-b border-white/10 px-4 py-3 text-sm font-semibold text-gold transition-colors hover:bg-white/5"
            >
              View All Teams
            </Link>
            {link.children.map((child) => {
              const childActive = pathname === child.href;

              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    'block px-4 py-2.5 text-sm transition-colors',
                    childActive
                      ? 'bg-white/10 text-gold'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavDropdown({
  link,
  pathname,
}: {
  link: NavLink;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = isLinkActive(pathname, link.href, link.children);

  return (
    <div className="rounded-sm">
      <button
        type="button"
        className={cn(
          'flex w-full items-center justify-between rounded-sm px-4 py-3 font-display text-base font-semibold uppercase tracking-wider',
          isActive
            ? 'bg-white/10 text-gold'
            : 'text-white/80 hover:bg-white/5 hover:text-white'
        )}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {link.label}
        <ChevronDown
          className={cn('h-5 w-5 transition-transform', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      {open && link.children && (
        <div className="mt-1 space-y-1 pl-2">
          <Link
            href={link.href}
            className={cn(
              'block rounded-sm px-4 py-2.5 text-sm font-semibold',
              pathname === link.href
                ? 'bg-white/10 text-gold'
                : 'text-gold hover:bg-white/5'
            )}
          >
            View All Teams
          </Link>
          {link.children.map((child) => {
            const childActive = pathname === child.href;

            return (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  'block rounded-sm px-4 py-2.5 text-sm',
                  childActive
                    ? 'bg-white/10 text-gold'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                )}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || mobileOpen
          ? 'bg-pitch shadow-lg'
          : 'bg-pitch/90 backdrop-blur-sm'
      )}
    >
      <div className="border-b border-white/10 bg-pitch-900">
        <Container className="flex min-h-10 items-center justify-between gap-2 py-1.5">
          <nav className="flex items-center gap-1 sm:gap-4" aria-label="Club and FA resources">
            <a
              href={siteConfig.links.safeguarding}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm px-1.5 py-1 font-display text-xs font-semibold uppercase tracking-wide text-white/75 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <ShieldCheck className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span className="sm:hidden">Safety</span>
              <span className="hidden sm:inline">FA Safeguarding</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={siteConfig.links.parentsCodeOfConduct}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm px-1.5 py-1 font-display text-xs font-semibold uppercase tracking-wide text-white/75 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <FileCheck className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span className="sm:hidden">Conduct</span>
              <span className="hidden sm:inline">Parent &amp; Spectator Code</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </nav>
          <Button
            href={siteConfig.links.clubShop}
            external
            variant="gold"
            size="sm"
            className="shrink-0 px-3 py-1.5 text-xs"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden />
            Club Shop
          </Button>
        </Container>
      </div>

      <Container className="flex h-18 items-center justify-between py-4">
        <Logo variant="light" badgeSize="sm" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <DesktopNavDropdown
                  key={link.href}
                  link={link}
                  pathname={pathname}
                />
              );
            }

            const isActive = isLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 font-display text-sm font-semibold uppercase tracking-wider transition-colors',
                  isActive
                    ? 'text-gold'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="gold" size="sm">
            Join Our Club
          </Button>
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <nav
          className="max-h-[calc(100vh-7rem)] overflow-y-auto border-t border-white/10 bg-pitch lg:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <MobileNavDropdown
                    key={link.href}
                    link={link}
                    pathname={pathname}
                  />
                );
              }

              const isActive = isLinkActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-sm px-4 py-3 font-display text-base font-semibold uppercase tracking-wider',
                    isActive
                      ? 'bg-white/10 text-gold'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 px-4">
              <Button href="/contact" variant="gold" className="w-full">
                Join Our Club
              </Button>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
