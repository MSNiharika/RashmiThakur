import type { ImpactArea } from '@/types'

export const impactAreas: ImpactArea[] = [
  {
    id: 'peace',
    number: '01',
    title: 'Global Peace',
    description:
      'Promoting global dialogue, harmony and humanitarian values.',
    image: '/images/photos/087.jpg',
    href: '/impact',
  },
  {
    id: 'women',
    number: '02',
    title: "Women's Leadership",
    description:
      'Supporting women’s empowerment, leadership and human rights advocacy.',
    image: '/images/photos/089.jpg',
    href: '/impact',
  },
  {
    id: 'community',
    number: '03',
    title: 'Community Development',
    description:
      'Supporting initiatives focused on community development and sustainable livelihoods.',
    image: '/images/photos/030.jpg',
    href: '/impact',
  },
  {
    id: 'artisan',
    number: '04',
    title: 'Artisan Welfare',
    description:
      'Supporting Indian handloom communities and preservation of textile heritage.',
    image: '/images/photos/097.jpg',
    href: '/handloom',
  },
]

export const impactPageSections = [
  {
    id: 'peace',
    title: 'Peace',
    image: '/images/photos/087.jpg',
    body: 'Her advocacy is grounded in global peace dialogue — encouraging conversation, harmony and humanitarian values across cultures and communities.',
  },
  {
    id: 'women',
    title: "Women's Empowerment",
    image: '/images/photos/105.jpg',
    body: 'Through leadership platforms and public advocacy, she supports women’s empowerment, leadership development and human rights.',
  },
  {
    id: 'community',
    title: 'Community Development',
    image: '/images/photos/106.jpg',
    body: 'Her work includes support for community development and sustainable livelihoods, with an emphasis on dignity, opportunity and cultural continuity.',
  },
  {
    id: 'artisan',
    title: 'Artisan Welfare',
    image: '/images/photos/097.jpg',
    body: 'As Indian Handloom Ambassador, she works closely with artisan communities, focusing on the welfare of handloom weavers and the visibility of their craft.',
  },
  {
    id: 'mental-health',
    title: 'Mental Health Awareness',
    image: '/images/photos/013.jpg',
    body: 'Mental health awareness is part of her advocacy, approached with care, dignity and a commitment to more inclusive public conversation.',
  },
  {
    id: 'heritage',
    title: 'Cultural Heritage Preservation',
    image: '/images/photos/104.jpg',
    body: 'She advocates for the preservation of India’s cultural heritage — particularly handloom traditions — as living knowledge held by artisan communities.',
  },
] as const

export const pillars = [
  {
    id: 'peace',
    number: '01',
    title: 'Peace',
    description:
      'Global dialogue, harmony and humanitarian initiatives.',
    image: '/images/photos/020.jpg',
    href: '/impact',
  },
  {
    id: 'women',
    number: '02',
    title: 'Women',
    description:
      'Women’s leadership, empowerment and human rights advocacy.',
    image: '/images/photos/083.jpg',
    href: '/leadership',
  },
  {
    id: 'heritage',
    number: '03',
    title: 'Heritage',
    description:
      'Indian handloom, artisan welfare and cultural preservation.',
    image: '/images/photos/014.jpg',
    href: '/handloom',
  },
] as const
