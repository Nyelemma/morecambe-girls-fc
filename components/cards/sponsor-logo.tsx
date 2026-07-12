type SponsorLogoProps = {
  name: string;
  tier?: string;
};

export function SponsorLogo({ name, tier }: SponsorLogoProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-sm border border-pitch-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
      <div
        className="flex h-16 w-full items-center justify-center rounded-sm bg-pitch-50"
        aria-hidden
      >
        <span className="font-display text-lg font-bold uppercase tracking-wider text-pitch-300">
          Logo
        </span>
      </div>
      <p className="mt-3 font-display text-sm font-semibold uppercase tracking-wide text-pitch-800">
        {name}
      </p>
      {tier && (
        <p className="mt-1 text-xs text-pitch-500">{tier}</p>
      )}
    </div>
  );
}
