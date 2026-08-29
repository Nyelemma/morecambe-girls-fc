export const siteConfig = {
  name: 'Morecambe Girls FC',
  shortName: 'MGFC',
  tagline: 'Inspiring the Next Generation of Footballers',
  description:
    'Morecambe Girls FC is a grassroots girls football club in Morecambe, Lancaster and Heysham, offering a pathway from Wild Cats through to U16. Part of the Morecambe FC family.',
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
    kingsAward: 'https://kavs.dcms.gov.uk/',
  },
  trainingAreas: ['Morecambe', 'Lancaster', 'Heysham'] as const,
  areasServed: [
    'Morecambe',
    'Lancaster',
    'Heysham',
    'Bare',
    'Carnforth',
    'Lancashire',
  ] as const,
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
  {
    label: 'Our Teams',
    href: '/teams',
    children: [
      { label: 'Wild Cats', href: '/wild-cats' },
      { label: 'Under 7s', href: '/teams/u7' },
      { label: 'Under 8s', href: '/teams/u8' },
      { label: 'Under 9s', href: '/teams/u9' },
      { label: 'Under 10s', href: '/teams/u10' },
      { label: 'Under 11s', href: '/teams/u11' },
      { label: 'Under 12s', href: '/teams/u12' },
      { label: 'Under 13s', href: '/teams/u13' },
      { label: 'Under 14s', href: '/teams/u14' },
      { label: 'Under 15s', href: '/teams/u15' },
      { label: 'U16s', href: '/teams/u16' },
    ],
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
  highlight?: string;
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
    slug: 'u10-red',
    name: 'U10 Red',
    shortName: 'U10 Red',
    ageRange: 'Under 10',
    description:
      'Building match confidence and technical skills through training and competitive football.',
  },
  {
    slug: 'u10-blues',
    name: 'U10 Blues',
    shortName: 'U10 Blues',
    ageRange: 'Under 10',
    description:
      'Building match confidence and technical skills through training and competitive football.',
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
    description:
      'A highly competitive squad playing in the North West Super League, preparing players for the demands of youth football.',
    highlight: 'North West Super League',
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
    description:
      'Elite grassroots football with professional standards — Lancashire County Cup finalists.',
    highlight: 'Lancs Cup Finalists',
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
    logo: '/sponsors/cadman-and-forrest-logo.jpg',
  },
  {
    name: 'Element',
    tier: 'Club Sponsor',
    href: 'https://www.element.com/',
    logo: '/sponsors/element-logo.png',
  },
  {
    name: 'Grahams Consultants',
    tier: 'Club Sponsor',
    href: 'https://www.grahamsconsultants.co.uk/',
    logo: '/sponsors/grahams-consultants-logo.png',
    logoBg: 'dark',
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
    logo: '/sponsors/mb-baron-logo.jpg',
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
    logo: '/sponsors/transport-recovery-logo.jpg',
  },
  {
    name: 'Turner Scott',
    tier: 'Club Sponsor',
    href: 'https://www.turnerscott.co.uk/',
    logo: '/sponsors/turner-scott-logo.svg',
    logoBg: 'dark',
  },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
  links?: readonly { label: string; href: string }[];
};

export const faqItems: readonly FaqItem[] = [
  {
    question: 'How do I join Morecambe Girls FC?',
    answer:
      'Get in touch via our contact page or email us at info@morecambegirlsfc.co.uk. Tell us your daughter\'s age and experience level, and we\'ll guide you to the right team or Wild Cats session. All new players are welcome to attend a taster session.',
    links: [
      { label: 'Contact Morecambe Girls FC', href: '/contact' },
      { label: 'View our teams', href: '/teams' },
    ],
  },
  {
    question: 'What age groups does Morecambe Girls FC offer?',
    answer:
      'We offer teams from Wild Cats (ages 5–11) through to U16. Our age groups include Under 7s, Under 8s, Under 9s, U10 Red and Blues, Under 11 Reds and Blues, Under 12s, U13 Reds and Blues, U14 Reds and Blues, U15 Reds and Blues, and U16s — giving girls a clear pathway from first steps in football to competitive youth football.',
    links: [
      { label: 'Girls football teams in Morecambe', href: '/teams' },
      { label: 'Wild Cats programme', href: '/wild-cats' },
    ],
  },
  {
    question: 'Where do Morecambe Girls FC train?',
    answer:
      'We train and play across Morecambe, Lancaster and Heysham, using a range of venues including facilities linked to Morecambe FC. Girls from nearby communities such as Bare and Carnforth also play with the club. Because sessions take place at various locations, exact training times and venues are shared with parents when you register.',
    links: [{ label: 'Ask about current session details', href: '/contact' }],
  },
  {
    question: 'What is Wild Cats?',
    answer:
      'Wild Cats is Morecambe Girls FC\'s fun, non-competitive football programme for girls aged 5–11. It is designed for first steps in the game, with no league pressure — just enjoyable sessions led by FA-qualified coaches. It is also a natural stepping stone into our age-group teams.',
    links: [{ label: 'Wild Cats football in Morecambe', href: '/wild-cats' }],
  },
  {
    question: 'Does my daughter need previous football experience?',
    answer:
      'No. Girls of all abilities are welcome, including complete beginners. Wild Cats is the usual starting point for girls taking their first steps, and our coaches are experienced in helping new players build confidence before they join a team.',
    links: [
      { label: 'Learn about Wild Cats', href: '/wild-cats' },
      { label: 'See age-group teams', href: '/teams' },
    ],
  },
  {
    question: 'Can beginners join?',
    answer:
      'Absolutely. We welcome girls of all abilities, including complete beginners. Our Wild Cats programme is perfect for girls taking their first steps in football, and our coaches are experienced in helping new players settle in.',
    links: [{ label: 'Register interest', href: '/contact' }],
  },
  {
    question: 'What equipment do players need?',
    answer:
      'Players need football boots (moulded studs for grass, trainers for astroturf), shin pads, a water bottle and suitable training kit. Match kit is provided by the club. Download our Welcome Pack for a full kit list and club information.',
  },
  {
    question: 'How much does girls football cost at Morecambe Girls FC?',
    answer:
      'Fees vary by age group and cover coaching, league registration and club membership. Full details are included in our Welcome Pack. We are committed to keeping football accessible and can discuss support options where needed.',
    links: [{ label: 'Contact the club about fees', href: '/contact' }],
  },
  {
    question: 'How do I contact Morecambe Girls FC?',
    answer:
      'Use our contact form, email info@morecambegirlsfc.co.uk, or call Chairman Nick Barrett on 07814 276448. For team-specific questions, include the age group in your message and we will connect you with the right coach.',
    links: [{ label: 'Contact page', href: '/contact' }],
  },
  {
    question: 'Is Morecambe Girls FC linked to Morecambe FC?',
    answer:
      'Yes. Morecambe Girls FC is proud to be part of the Morecambe FC family, sharing the club\'s values, colours and commitment to developing football in our community.',
    links: [{ label: 'About the club', href: '/about' }],
  },
];

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
