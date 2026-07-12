export const siteConfig = {
  name: 'Morecambe Girls FC',
  shortName: 'MGFC',
  tagline: 'Inspiring the Next Generation of Footballers',
  description:
    'Morecambe Girls FC is a thriving grassroots girls\' football club in Lancashire, offering pathways from Wild Cats through to U16. Part of the Morecambe FC family.',
  url: 'https://www.morecombegirlsfc.co.uk',
  email: 'info@morecombegirlsfc.co.uk',
  phone: '',
  address: {
    line1: 'Mazuma Stadium',
    line2: 'Christie Way',
    city: 'Morecambe',
    county: 'Lancashire',
    postcode: 'LA4 4TB',
    country: 'United Kingdom',
  },
  social: {
    facebook: 'https://facebook.com/morecombegirlsfc',
    instagram: 'https://instagram.com/morecombegirlsfc',
    twitter: 'https://twitter.com/morecombegirlsfc',
  },
  parentClub: {
    name: 'Morecambe FC',
    url: 'https://www.morecambe.com',
  },
  brand: {
    logo: '/morecambe-fc-badge.png',
    colors: {
      red: '#941D1E',
      gold: '#C5A076',
      white: '#FFFFFF',
    },
  },
  welcomePack: {
    path: '/welcome-pack.pdf',
    filename: 'Morecambe-Girls-FC-Welcome-Pack.pdf',
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Our Teams',
    href: '/teams',
    children: [], // populated after teams array
  },
  { label: 'Wild Cats', href: '/wild-cats' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export type Team = {
  slug: string;
  name: string;
  shortName: string;
  ageRange: string;
  description: string;
  image: string;
  isWildCats?: boolean;
};

export const teams: Team[] = [
  {
    slug: 'wild-cats',
    name: 'Wild Cats',
    shortName: 'Wild Cats',
    ageRange: 'Ages 5–11',
    description:
      'Fun, non-competitive football sessions designed to introduce girls to the beautiful game in a safe, supportive environment.',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    isWildCats: true,
  },
  {
    slug: 'under-7s',
    name: 'Under 7s',
    shortName: 'Under 7s',
    ageRange: 'Under 7',
    description: 'Building confidence, friendships and a love for football.',
    image:
      'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80',
  },
  {
    slug: 'under-8s',
    name: 'Under 8s',
    shortName: 'Under 8s',
    ageRange: 'Under 8',
    description: 'Developing fundamental skills through structured training and matches.',
    image:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
  },
  {
    slug: 'under-9s',
    name: 'Under 9s',
    shortName: 'Under 9s',
    ageRange: 'Under 9',
    description: 'Growing technical ability and teamwork on and off the pitch.',
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
  },
  {
    slug: 'under-11-reds',
    name: 'Under 11 Reds',
    shortName: 'Under 11 Reds',
    ageRange: 'Under 11',
    description: 'Developing tactical awareness and match intelligence in competitive league football.',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
  },
  {
    slug: 'under-11-blues',
    name: 'Under 11 Blues',
    shortName: 'Under 11 Blues',
    ageRange: 'Under 11',
    description: 'Developing tactical awareness and match intelligence in competitive league football.',
    image:
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80',
  },
  {
    slug: 'under-12s',
    name: 'Under 12s',
    shortName: 'Under 12s',
    ageRange: 'Under 12',
    description: 'Competing in league football while nurturing individual potential.',
    image:
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80',
  },
  {
    slug: 'u13-reds',
    name: 'U13 Reds',
    shortName: 'U13 Reds',
    ageRange: 'Under 13',
    description: 'Preparing players for the demands of youth football.',
    image:
      'https://images.unsplash.com/photo-1508098682722-e99b9f0a9335?w=800&q=80',
  },
  {
    slug: 'u13-blues',
    name: 'U13 Blues',
    shortName: 'U13 Blues',
    ageRange: 'Under 13',
    description: 'Preparing players for the demands of youth football.',
    image:
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80',
  },
  {
    slug: 'u14-reds',
    name: 'U14 Reds',
    shortName: 'U14 Reds',
    ageRange: 'Under 14',
    description: 'Elite grassroots football with professional standards.',
    image:
      'https://images.unsplash.com/photo-1489944440615-453fc7b73bce?w=800&q=80',
  },
  {
    slug: 'u14-blues',
    name: 'U14 Blues',
    shortName: 'U14 Blues',
    ageRange: 'Under 14',
    description: 'Elite grassroots football with professional standards.',
    image:
      'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
  },
  {
    slug: 'u15-reds',
    name: 'U15 Reds',
    shortName: 'U15 Reds',
    ageRange: 'Under 15',
    description: 'High-performance training and competitive league fixtures.',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
  },
  {
    slug: 'u15-blues',
    name: 'U15 Blues',
    shortName: 'U15 Blues',
    ageRange: 'Under 15',
    description: 'High-performance training and competitive league fixtures.',
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
  },
  {
    slug: 'u16s',
    name: 'U16s',
    shortName: 'U16s',
    ageRange: 'Under 16',
    description: 'Our senior youth team, preparing players for adult football.',
    image:
      'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
  },
];

export const competitiveTeams = teams.filter((team) => !team.isWildCats);

const ourTeamsNav = navLinks.find((link) => link.label === 'Our Teams');
if (ourTeamsNav) {
  ourTeamsNav.children = competitiveTeams.map((team) => ({
    label: team.name,
    href: `/teams/${team.slug}`,
  }));
}

export const clubValues = [
  {
    title: 'Ambition',
    description:
      'We encourage every player to dream big and strive to be the best version of themselves.',
  },
  {
    title: 'Community',
    description:
      'Football brings people together. We are proud to be part of the Morecambe community.',
  },
  {
    title: 'Development',
    description:
      'From first kick to competitive league football, we invest in every player\'s journey.',
  },
  {
    title: 'Inclusivity',
    description:
      'Girls of all abilities are welcome. We believe football is for everyone.',
  },
] as const;

export const sponsors = [
  { name: 'Local Business 1', tier: 'Principal Partner' },
  { name: 'Local Business 2', tier: 'Gold Sponsor' },
  { name: 'Local Business 3', tier: 'Gold Sponsor' },
  { name: 'Local Business 4', tier: 'Silver Sponsor' },
  { name: 'Local Business 5', tier: 'Silver Sponsor' },
  { name: 'Local Business 6', tier: 'Community Partner' },
] as const;

export const faqItems = [
  {
    question: 'How do I join Morecambe Girls FC?',
    answer:
      'Get in touch via our contact page or email us at info@morecombegirlsfc.co.uk. Tell us your daughter\'s age and experience level, and we\'ll guide you to the right team or Wild Cats session. All new players are welcome to attend a taster session.',
  },
  {
    question: 'What age groups do you offer?',
    answer:
      'We offer teams from Wild Cats (ages 5–11) through to U16. Our age groups include Under 7s, Under 8s, Under 9s, Under 11 Reds and Blues, Under 12s, U13 Reds and Blues, U14 Reds and Blues, U15 Reds and Blues, and U16s — giving girls a clear pathway from first steps in football to competitive youth football.',
  },
  {
    question: 'Where do you train and play?',
    answer:
      'Training and home fixtures take place at venues across the Morecambe area, including facilities linked to Morecambe FC. Exact training times and locations are shared with parents when you register. Contact us for current session details.',
  },
  {
    question: 'What equipment do players need?',
    answer:
      'Players need football boots (moulded studs for grass, trainers for astroturf), shin pads, a water bottle and suitable training kit. Match kit is provided by the club. Download our Welcome Pack for a full kit list and club information.',
  },
  {
    question: 'Can beginners join?',
    answer:
      'Absolutely! We welcome girls of all abilities, including complete beginners. Our Wild Cats programme is perfect for girls taking their first steps in football, and our coaches are experienced in helping new players build confidence.',
  },
  {
    question: 'How do I contact a coach?',
    answer:
      'For general enquiries, use our contact form or email info@morecombegirlsfc.co.uk. For team-specific questions, include the age group in your message and we\'ll connect you with the right coach.',
  },
  {
    question: 'How much does it cost to play?',
    answer:
      'Fees vary by age group and cover coaching, league registration and club membership. Full details are included in our Welcome Pack. We are committed to keeping football accessible and can discuss support options where needed.',
  },
  {
    question: 'Is Morecambe Girls FC linked to Morecambe FC?',
    answer:
      'Yes. Morecambe Girls FC is proud to be part of the Morecambe FC family, sharing the club\'s values, colours and commitment to developing football in our community.',
  },
] as const;

export const sponsorshipBenefits = [
  'Brand visibility across our website, social media and matchday materials',
  'Association with a growing, ambitious girls\' football club',
  'Community engagement and positive local PR',
  'Opportunities to support youth development in Lancashire',
  'Flexible packages to suit businesses of all sizes',
] as const;

export const sponsorshipOpportunities = [
  {
    title: 'Principal Partner',
    description:
      'Premium visibility as our headline sponsor, with logo placement on kits, website and all club communications.',
  },
  {
    title: 'Team Sponsor',
    description:
      'Sponsor a specific age group team with branding on training kit and team page on our website.',
  },
  {
    title: 'Community Partner',
    description:
      'Support the club and gain recognition across our digital channels and matchday programme.',
  },
] as const;

export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((team) => team.slug === slug);
}

export const teamPlaceholderSections = [
  'Coaches',
  'Fixtures',
  'League',
  'Gallery',
  'News',
  'Contact',
] as const;
