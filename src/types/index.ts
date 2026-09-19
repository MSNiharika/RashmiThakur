export type NavItem = {
  label: string
  path: string
}

export type SocialNetwork =
  | 'instagram'
  | 'linkedin'
  | 'facebook'
  | 'youtube'
  | 'whatsapp'
  | 'email'
  | 'x'

export type SocialLink = {
  id: SocialNetwork
  label: string
  href: string
}

export type ContactPurpose =
  | 'Brand Collaboration'
  | 'Speaking Engagement'
  | 'Media Inquiry'
  | 'Cultural Initiative'
  | 'Social Impact Collaboration'
  | 'Other'

export type SeoMeta = {
  title: string
  description: string
  path: string
  ogImage?: string
}

export type Profile = {
  name: string
  firstName: string
  lastName: string
  primaryTitle: string
  secondaryTitles: string[]
  supportingMessage: string[]
  alternativeStatement: string
  shortBio: string
  biography: string[]
  personalStatement: string
}

export type JourneyKind = 'pageant' | 'advocacy' | 'leadership'

export type JourneyItem = {
  id: string
  year: string | null
  title: string
  subtitle?: string
  location?: string
  kind: JourneyKind
  image?: string
  description?: string
}

export type ImpactArea = {
  id: string
  number: string
  title: string
  description: string
  image: string
  href: string
}

export type LeadershipRole = {
  id: string
  organization: string
  position: string
  location?: string
  focus: string[]
  image: string
  summary: string
}

export type HandloomContent = {
  title: string
  subheading: string
  ambassadorTitle: string
  intro: string
  paragraphs: string[]
  sections: {
    id: string
    title: string
    body: string
    image: string
  }[]
}

export type PortfolioCategory =
  | 'all'
  | 'fashion'
  | 'beauty'
  | 'pageants'
  | 'editorial'
  | 'cultural'
  | 'international'
  | 'social-impact'
  | 'leadership'
  | 'handloom'

export type PortfolioItem = {
  id: string
  title: string
  category: Exclude<PortfolioCategory, 'all'>
  image: string
  alt: string
  caption: string
  featured?: boolean
  aspect: '3/4' | '4/5' | '1/1' | '16/9' | '4/3' | '2/3'
  placeholder?: boolean
}

export type Award = {
  id: string
  year: string | null
  title: string
  organization?: string
}

export type MediaCategory = 'news' | 'interviews' | 'magazines' | 'tv' | 'events'

export type MediaItem = {
  id: string
  publication: string
  title: string
  date: string | null
  image: string
  description: string
  url: string | null
  category: MediaCategory
  placeholder?: boolean
}

export type VideoProvider = 'youtube' | 'vimeo' | 'mp4' | 'placeholder'

export type VideoItem = {
  id: string
  title: string
  category: string
  provider: VideoProvider
  url: string
  poster: string
  description: string
}

export type HeroMedia = {
  image: string
  video?: string
  alt: string
}

export type SiteImages = {
  hero: HeroMedia
  aboutPortrait: { src: string; alt: string }
  beyondTheCrown: { src: string; alt: string }
  pillars: Record<'peace' | 'women' | 'heritage', { src: string; alt: string }>
  impact: Record<string, { src: string; alt: string }>
  leadership: Record<string, { src: string; alt: string }>
  handloom: { hero: string; gallery: string[] }
  statement: { src: string; alt: string }
  map: { src: string; alt: string }
  og: string
}
