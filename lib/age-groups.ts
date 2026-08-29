export type AgeGroup = {
  slug: string;
  name: string;
  shortName: string;
  ageRange: string;
  href: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  focus: string;
  image: string;
  imageAlt: string;
  teamSlugs: readonly string[];
};

export const ageGroups: AgeGroup[] = [
  {
    slug: 'u7',
    name: 'Under 7s',
    shortName: 'U7',
    ageRange: 'Under 7',
    href: '/teams/u7',
    title: 'Morecambe Girls U7 Football',
    description:
      'Join Morecambe Girls FC Under 7s — junior girls football in Morecambe for young players building confidence, friendships and a love of the game.',
    h1: 'Under 7s Girls Football',
    intro:
      'Our Under 7s is the first age-group team at Morecambe Girls FC. Sessions focus on enjoyment, confidence and the basics of football, so girls from Morecambe, Lancaster, Heysham and nearby communities can start playing with friends.',
    focus:
      'Training introduces ball control, movement and teamwork in a supportive environment. Exact session times and venues are shared with families when you register, as the club trains across Morecambe, Lancaster and Heysham.',
    image: '/gallery/team-fun.jpg',
    imageAlt: 'Young Morecambe Girls FC players enjoying a session together',
    teamSlugs: ['under-7s'],
  },
  {
    slug: 'u8',
    name: 'Under 8s',
    shortName: 'U8',
    ageRange: 'Under 8',
    href: '/teams/u8',
    title: 'Morecambe Girls U8 Football',
    description:
      'Morecambe Girls U8 football — structured training and matches for girls developing fundamental skills at Morecambe Girls FC.',
    h1: 'Under 8s Girls Football',
    intro:
      'The Under 8s help girls take the next step from first kicks into more structured training and matches. Players learn the fundamentals while staying part of a welcoming Morecambe girls football club.',
    focus:
      'Coaches develop passing, movement and match awareness at an age-appropriate pace. If your daughter is new to football, we can also advise whether Under 8s or Wild Cats is the better starting point.',
    image: '/gallery/wildcats-training.jpg',
    imageAlt: 'Girls taking part in a Morecambe Girls FC training session',
    teamSlugs: ['under-8s'],
  },
  {
    slug: 'u9',
    name: 'Under 9s',
    shortName: 'U9',
    ageRange: 'Under 9',
    href: '/teams/u9',
    title: 'Morecambe Girls U9 Football',
    description:
      'Morecambe Girls U9 football at Morecambe Girls FC — growing technical ability, teamwork and match confidence in Lancashire.',
    h1: 'Under 9s Girls Football',
    intro:
      'Our Under 9s develop technical ability and teamwork on and off the pitch. The squad is part of the club pathway for girls football in Morecambe and the surrounding district.',
    focus:
      'Players build confidence in small-sided football, learn to work as a team and prepare for the next age groups. Training and match details are confirmed with parents after registration.',
    image: '/gallery/match-action.jpg',
    imageAlt: 'Morecambe Girls FC players in match action',
    teamSlugs: ['under-9s'],
  },
  {
    slug: 'u10',
    name: 'Under 10s',
    shortName: 'U10',
    ageRange: 'Under 10',
    href: '/teams/u10',
    title: 'Morecambe Girls U10 Football',
    description:
      'Morecambe Girls U10 football — U10 Red and U10 Blues squads at Morecambe Girls FC, building match confidence through training and competitive football.',
    h1: 'Under 10s Girls Football',
    intro:
      'Morecambe Girls FC has two Under 10 squads — U10 Red and U10 Blues. Both teams help girls build match confidence and technical skills through weekly training and competitive football.',
    focus:
      'The two squads give more girls the chance to play regularly. When you enquire, tell us your daughter’s age and playing experience and we will help you find the right U10 team.',
    image: '/gallery/match-action.jpg',
    imageAlt: 'Morecambe Girls FC junior players competing in a match',
    teamSlugs: ['u10-red', 'u10-blues'],
  },
  {
    slug: 'u11',
    name: 'Under 11s',
    shortName: 'U11',
    ageRange: 'Under 11',
    href: '/teams/u11',
    title: 'Morecambe Girls U11 Football',
    description:
      'Morecambe Girls U11 football — Under 11 Reds and Blues at Morecambe Girls FC, developing tactical awareness in competitive league football.',
    h1: 'Under 11s Girls Football',
    intro:
      'The Under 11 Reds and Under 11 Blues play competitive league football while continuing to develop tactical awareness and match intelligence.',
    focus:
      'This age group is an important step in the club pathway, bridging junior development and more demanding youth football. Contact us to ask about current availability in either U11 squad.',
    image: '/gallery/stadium-training.jpg',
    imageAlt: 'Morecambe Girls FC players training on the pitch',
    teamSlugs: ['under-11-reds', 'under-11-blues'],
  },
  {
    slug: 'u12',
    name: 'Under 12s',
    shortName: 'U12',
    ageRange: 'Under 12',
    href: '/teams/u12',
    title: 'Morecambe Girls U12 Football',
    description:
      'Morecambe Girls U12 football — league football and individual development for girls at Morecambe Girls FC in Lancashire.',
    h1: 'Under 12s Girls Football',
    intro:
      'Our Under 12s compete in league football while coaches nurture each player’s potential. The team is part of Morecambe Girls FC’s pathway from Wild Cats through to U16.',
    focus:
      'Players continue to develop technique, decision-making and game understanding. Fixture information is shared with registered families rather than published as a public list.',
    image: '/gallery/team-photo.jpg',
    imageAlt: 'Morecambe Girls FC squad together on the pitch',
    teamSlugs: ['under-12s'],
  },
  {
    slug: 'u13',
    name: 'Under 13s',
    shortName: 'U13',
    ageRange: 'Under 13',
    href: '/teams/u13',
    title: 'Morecambe Girls U13 Football',
    description:
      'Morecambe Girls U13 football — U13 Reds play in the North West Super League, with U13 Blues preparing players for the demands of youth football.',
    h1: 'Under 13s Girls Football',
    intro:
      'The Under 13s include U13 Reds, a highly competitive squad playing in the North West Super League, and U13 Blues, who prepare players for the demands of youth football.',
    focus:
      'Both squads are part of Morecambe Girls FC’s youth pathway. If you are looking for U13 girls football in Morecambe or Lancaster, get in touch and we will advise on the right next step.',
    image: '/gallery/trophy-celebration.jpg',
    imageAlt: 'Morecambe Girls FC players celebrating a tournament win',
    teamSlugs: ['u13-reds', 'u13-blues'],
  },
  {
    slug: 'u14',
    name: 'Under 14s',
    shortName: 'U14',
    ageRange: 'Under 14',
    href: '/teams/u14',
    title: 'Morecambe Girls U14 Football',
    description:
      'Morecambe Girls U14 football — U14 Reds are Lancashire County Cup finalists, with U14 Blues offering elite grassroots football at Morecambe Girls FC.',
    h1: 'Under 14s Girls Football',
    intro:
      'Our Under 14s play elite grassroots football with professional standards. U14 Reds are Lancashire County Cup finalists, and U14 Blues give more players the chance to compete at this age group.',
    focus:
      'Training focuses on high standards, teamwork and preparing players for older youth football. Enquire through the contact page and include U14 in your message.',
    image: '/gallery/trophy-celebration.jpg',
    imageAlt: 'Morecambe Girls FC players with medals and a trophy',
    teamSlugs: ['u14-reds', 'u14-blues'],
  },
  {
    slug: 'u15',
    name: 'Under 15s',
    shortName: 'U15',
    ageRange: 'Under 15',
    href: '/teams/u15',
    title: 'Morecambe Girls U15 Football',
    description:
      'Morecambe Girls U15 football — U15 Reds and Blues offering high-performance training and competitive league fixtures at Morecambe Girls FC.',
    h1: 'Under 15s Girls Football',
    intro:
      'The Under 15 Reds and Under 15 Blues provide high-performance training and competitive league fixtures for girls approaching the top of the junior pathway.',
    focus:
      'Players are supported to develop as footballers and teammates, with a clear route towards U16 and opportunities beyond grassroots youth football.',
    image: '/gallery/stadium-training.jpg',
    imageAlt: 'Morecambe Girls FC youth players during a training session',
    teamSlugs: ['u15-reds', 'u15-blues'],
  },
  {
    slug: 'u16',
    name: 'U16s',
    shortName: 'U16',
    ageRange: 'Under 16',
    href: '/teams/u16',
    title: 'Morecambe Girls U16 Football',
    description:
      'Morecambe Girls U16 football — the senior youth team at Morecambe Girls FC, preparing players for adult football in Lancashire.',
    h1: 'Under 16s Girls Football',
    intro:
      'The U16s are our senior youth team, preparing players for adult football, college programmes and further opportunities after junior football.',
    focus:
      'This is the final age group in the Morecambe Girls FC pathway. Girls from Morecambe, Lancaster, Heysham and further into Lancashire are welcome to enquire about availability.',
    image: '/gallery/team-photo.jpg',
    imageAlt: 'Morecambe Girls FC senior youth players in club colours',
    teamSlugs: ['u16s'],
  },
];

export function getAgeGroup(slug: string): AgeGroup | undefined {
  return ageGroups.find((group) => group.slug === slug);
}

export function getAgeGroupForTeam(teamSlug: string): AgeGroup | undefined {
  return ageGroups.find((group) => group.teamSlugs.includes(teamSlug));
}

export function getTeamPageHref(teamSlug: string, isWildCats?: boolean): string {
  if (isWildCats) {
    return '/wild-cats';
  }

  return getAgeGroupForTeam(teamSlug)?.href ?? '/teams';
}
