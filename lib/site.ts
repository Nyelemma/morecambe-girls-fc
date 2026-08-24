export const siteConfig = {
  name: 'Morecambe Girls FC',
  shortName: 'MGFC',
  tagline: 'Inspiring the Next Generation of Footballers',
  description:
    'Morecambe Girls FC is a thriving grassroots girls\' football club in Lancashire, offering pathways from Wild Cats through to U16. Part of the Morecambe FC family.',
  url: 'https://www.morecambegirlsfc.co.uk',
  email: 'info@morecambegirlsfc.co.uk',
  contacts: {
    chairman: {
      name: 'Nick Barrett',
      role: 'Chairman',
      phone: '07814 276448',
      phoneHref: 'tel:+447814276448',
    },
  },
  links: {
    clubShop: 'https://www.morecambegirlsfc.clubstore.uk/',
    safeguarding:
      'https://www.thefa.com/football-rules-governance/safeguarding',
    parentsCodeOfConduct:
      'https://www.thefa.com/-/media/cfa/essexfa/files/welfare/fa-respect-code-of-conduct-spectators-parents.ashx',
  },
  social: {
    facebook: 'https://facebook.com/morecambegirlsfc',
    instagram: 'https://instagram.com/morecambegirlsfc',
    twitter: 'https://twitter.com/morecambegirlsfc',
  },
  parentClub: {
    name: 'Morecambe FC',
    url: 'https://www.morecambe.com',
  },
  brand: {
    logo: '/morecambe-fc-badge.png',
    colors: {
      red: '#981915',
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
  { label: 'Our Teams', href: '/teams' },
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
    isWildCats: true,
  },
  {
    slug: 'under-7s',
    name: 'Under 7s',
    shortName: 'Under 7s',
    ageRange: 'Under 7',
    description: 'Building confidence, friendships and a love for football.',
  },
  {
    slug: 'under-8s',
    name: 'Under 8s',
    shortName: 'Under 8s',
    ageRange: 'Under 8',
    description: 'Developing fundamental skills through structured training and matches.',
  },
  {
    slug: 'under-9s',
    name: 'Under 9s',
    shortName: 'Under 9s',
    ageRange: 'Under 9',
    description: 'Growing technical ability and teamwork on and off the pitch.',
  },
  {
    slug: 'under-11-reds',
    name: 'Under 11 Reds',
    shortName: 'Under 11 Reds',
    ageRange: 'Under 11',
    description: 'Developing tactical awareness and match intelligence in competitive league football.',
  },
  {
    slug: 'under-11-blues',
    name: 'Under 11 Blues',
    shortName: 'Under 11 Blues',
    ageRange: 'Under 11',
    description: 'Developing tactical awareness and match intelligence in competitive league football.',
  },
  {
    slug: 'under-12s',
    name: 'Under 12s',
    shortName: 'Under 12s',
    ageRange: 'Under 12',
    description: 'Competing in league football while nurturing individual potential.',
  },
  {
    slug: 'u13-reds',
    name: 'U13 Reds',
    shortName: 'U13 Reds',
    ageRange: 'Under 13',
    description: 'Preparing players for the demands of youth football.',
  },
  {
    slug: 'u13-blues',
    name: 'U13 Blues',
    shortName: 'U13 Blues',
    ageRange: 'Under 13',
    description: 'Preparing players for the demands of youth football.',
  },
  {
    slug: 'u14-reds',
    name: 'U14 Reds',
    shortName: 'U14 Reds',
    ageRange: 'Under 14',
    description: 'Elite grassroots football with professional standards.',
  },
  {
    slug: 'u14-blues',
    name: 'U14 Blues',
    shortName: 'U14 Blues',
    ageRange: 'Under 14',
    description: 'Elite grassroots football with professional standards.',
  },
  {
    slug: 'u15-reds',
    name: 'U15 Reds',
    shortName: 'U15 Reds',
    ageRange: 'Under 15',
    description: 'High-performance training and competitive league fixtures.',
  },
  {
    slug: 'u15-blues',
    name: 'U15 Blues',
    shortName: 'U15 Blues',
    ageRange: 'Under 15',
    description: 'High-performance training and competitive league fixtures.',
  },
  {
    slug: 'u16s',
    name: 'U16s',
    shortName: 'U16s',
    ageRange: 'Under 16',
    description: 'Our senior youth team, preparing players for adult football.',
  },
];

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

export type Sponsor = {
  name: string;
  tier: string;
  href?: string;
  logo?: string;
  logoBg?: 'light' | 'dark';
};

export const sponsors: Sponsor[] = [
  {
    name: 'MN Coaching',
    tier: 'Club Sponsor',
    href: 'https://mncoaching.co.uk',
    logo: '/mn-coaching-logo.png',
  },
  {
    name: 'AJ Joinery',
    tier: 'Club Sponsor',
    href: 'https://ajjoinery.co/',
    logo: '/sponsors/aj-joinery-logo.jpg',
  },
  {
    name: 'Alpha Signs & Design',
    tier: 'Club Sponsor',
    href: 'https://www.alphasignsanddesign.co.uk/',
    logo: '/sponsors/alpha-signs-logo.png',
  },
  {
    name: 'Barratt Homes',
    tier: 'Club Sponsor',
    href: 'https://www.barratthomes.co.uk/',
    logo: '/sponsors/barratt-homes-logo.png',
    logoBg: 'dark',
  },
  {
    name: 'BDS Fuels',
    tier: 'Club Sponsor',
    href: 'https://www.bdsfuels.co.uk/',
    logo: '/sponsors/bds-fuels-logo.png',
  },
  {
    name: 'Cadman and Forrest',
    tier: 'Club Sponsor',
  },
  {
    name: 'Element',
    tier: 'Club Sponsor',
    href: 'https://www.element.com/',
    logo: '/sponsors/element-logo.png',
  },
  {
    name: 'Heysham Trucks',
    tier: 'Club Sponsor',
    href: 'https://heyshamtrucks.co.uk/',
    logo: '/sponsors/heysham-trucks-logo.png',
  },
  {
    name: 'Holcim',
    tier: 'Club Sponsor',
    href: 'https://www.holcim.co.uk/',
    logo: '/sponsors/holcim-logo.svg',
  },
  {
    name: 'Jack Pearson Electrical Services',
    tier: 'Club Sponsor',
    href: 'https://www.jp-es.co.uk/',
  },
  {
    name: 'Kendal Dance Academy',
    tier: 'Club Sponsor',
    href: 'https://www.kendaldanceacademy.co.uk/',
    logo: '/sponsors/kendal-dance-academy-logo.png',
  },
  {
    name: 'MB Baron',
    tier: 'Club Sponsor',
  },
  {
    name: 'Northwest Joinery',
    tier: 'Club Sponsor',
    href: 'https://www.gwnorthwest.com/',
    logo: '/sponsors/northwest-joinery-logo.png',
  },
  {
    name: 'SWS',
    tier: 'Club Sponsor',
    href: 'https://www.sws.co.uk/',
    logo: '/sponsors/sws-logo.png',
  },
  {
    name: 'Thermo Fisher',
    tier: 'Club Sponsor',
    href: 'https://www.thermofisher.com/uk/en/home.html',
    logo: '/sponsors/thermo-fisher-logo.svg',
  },
  {
    name: 'W J Crowe & Son Decorators',
    tier: 'Club Sponsor',
    href: 'https://www.wjcroweandsondecorators.co.uk/',
    logo: '/sponsors/wj-crowe-logo.png',
  },
  {
    name: 'Transport Recovery',
    tier: 'Club Sponsor',
  },
  {
    name: 'Turner Scott',
    tier: 'Club Sponsor',
    href: 'https://www.turnerscott.co.uk/',
    logo: '/sponsors/turner-scott-logo.svg',
    logoBg: 'dark',
  },
] as const;

export const faqItems = [
  {
    question: 'How do I join Morecambe Girls FC?',
    answer:
      'Get in touch via our contact page or email us at info@morecambegirlsfc.co.uk. Tell us your daughter\'s age and experience level, and we\'ll guide you to the right team or Wild Cats session. All new players are welcome to attend a taster session.',
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
      'For general enquiries, use our contact form or email info@morecambegirlsfc.co.uk. For team-specific questions, include the age group in your message and we\'ll connect you with the right coach.',
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
      'Sponsor a specific age group team with branding on training kit and recognition across our website.',
  },
  {
    title: 'Community Partner',
    description:
      'Support the club and gain recognition across our digital channels and matchday programme.',
  },
] as const;
