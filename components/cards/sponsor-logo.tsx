import Image from 'next/image';

type SponsorLogoProps = {
  name: string;
  tier?: string;
  href?: string;
  logo?: string;
};

export function SponsorLogo({ name, tier, href, logo }: SponsorLogoProps) {
  const content = (
    <>
      <div
        className="flex h-16 w-full items-center justify-center rounded-sm bg-pitch-50"
        aria-hidden
      >
        {logo ? (
          <div className="relative h-14 w-14">
            <Image
              src={logo}
              alt=""
              fill
              className="object-contain"
              sizes="56px"
            />
          </div>
        ) : (
          <span className="font-display text-lg font-bold uppercase tracking-wider text-pitch-300">
            {href ? name : 'Logo'}
          </span>
        )}
      </div>
      <p className="mt-3 font-display text-sm font-semibold uppercase tracking-wide text-pitch-800">
        {name}
      </p>
      {tier && <p className="mt-1 text-xs text-pitch-500">{tier}</p>}
    </>
  );

  const className =
    'flex flex-col items-center justify-center rounded-sm border border-pitch-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`Visit ${name} website (opens in a new tab)`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
