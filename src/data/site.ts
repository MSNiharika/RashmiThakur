import type { ContactPurpose, NavItem, SeoMeta, SocialLink } from '@/types'

/**
 * Central site configuration.
 * Update `url` before production deployment.
 * Leave social hrefs empty to hide them from the UI.
 */
export const site: {
  name: string
  url: string
  locale: string
  ogImage: string
  email: string
  phone: string
  formEndpoint: string
} = {
  name: 'Rashmi Thakur',
  url: 'https://www.rashmithakur.com',
  locale: 'en_IN',
  ogImage: '/images/photos/012.jpg',
  email: 'rraxshmi24@gmail.com',
  phone: '',
  formEndpoint: 'https://formsubmit.co/ajax/rraxshmi24@gmail.com',
}

export const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Journey', path: '/journey' },
  { label: 'Impact', path: '/impact' },
  { label: 'Leadership', path: '/leadership' },
  { label: 'Handloom', path: '/handloom' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Media', path: '/media' },
  { label: 'Contact', path: '/contact' },
]

export const footerNavigation: NavItem[] = [
  ...navigation,
  { label: 'Recognition', path: '/recognition' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms', path: '/terms' },
]

/**
 * Only links with a non-empty href are rendered.
 * Do not invent unpublished profile URLs.
 */
export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rraxshmithakur',
  },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/rraxshmi/' },
  { id: 'facebook', label: 'Facebook', href: '' },
  { id: 'youtube', label: 'YouTube', href: '' },
  { id: 'email', label: 'Email', href: '' },
]

export const contactPurposes: ContactPurpose[] = [
  'Brand Collaboration',
  'Speaking Engagement',
  'Media Inquiry',
  'Cultural Initiative',
  'Social Impact Collaboration',
  'Other',
]

export const seo: Record<string, SeoMeta> = {
  home: {
    path: '/',
    title: 'Rashmi Thakur — Global Peace Advocate',
    description:
      'Rashmi Thakur is a global peace advocate, social impact leader and cultural ambassador working across women’s leadership, humanitarian dialogue and Indian handloom heritage.',
  },
  about: {
    path: '/about',
    title: 'About — Rashmi Thakur',
    description:
      'The professional journey of Rashmi Thakur — from international pageant platforms to peace advocacy, women’s leadership and Indian cultural ambassadorship.',
  },
  journey: {
    path: '/journey',
    title: 'Journey — Rashmi Thakur',
    description:
      'An editorial timeline of Rashmi Thakur’s path from national pageant titles to global peace advocacy, leadership and cultural work.',
  },
  impact: {
    path: '/impact',
    title: 'Social Impact — Rashmi Thakur',
    description:
      'Peace dialogue, women’s empowerment, community development, artisan welfare, mental health awareness and cultural heritage preservation.',
  },
  leadership: {
    path: '/leadership',
    title: 'Leadership — Rashmi Thakur',
    description:
      'Leadership roles as President of the World Women Federation and Board Director at the Dr. Kalam Smriti International Governing Council.',
  },
  handloom: {
    path: '/handloom',
    title: 'Indian Handloom — Rashmi Thakur',
    description:
      'Rashmi Thakur, Indian Handloom Ambassador, works with artisan communities in Telangana and across India to preserve traditional textile heritage.',
  },
  portfolio: {
    path: '/portfolio',
    title: 'Portfolio — Rashmi Thakur',
    description:
      'A visual journey across fashion, beauty, pageants, editorial, cultural, leadership and handloom work.',
  },
  media: {
    path: '/media',
    title: 'Media — Rashmi Thakur',
    description:
      'Press, interviews and public appearances featuring Rashmi Thakur’s advocacy, leadership and cultural work.',
  },
  recognition: {
    path: '/recognition',
    title: 'Recognition — Rashmi Thakur',
    description:
      'Awards and honours recognising Rashmi Thakur’s work in social leadership and cultural advocacy.',
  },
  contact: {
    path: '/contact',
    title: 'Contact — Rashmi Thakur',
    description:
      'Collaborations, speaking engagements, brand partnerships, humanitarian initiatives, cultural programmes and media inquiries.',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy — Rashmi Thakur',
    description: 'Privacy policy for the official Rashmi Thakur website.',
  },
  terms: {
    path: '/terms',
    title: 'Terms — Rashmi Thakur',
    description: 'Terms of use for the official Rashmi Thakur website.',
  },
}

export const configuredSocials = socialLinks.filter((link) => link.href.length > 0)
