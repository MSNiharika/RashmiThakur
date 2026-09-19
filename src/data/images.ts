import type { SiteImages } from '@/types'

/**
 * Central image map.
 * To replace a placeholder:
 * 1. Add the file under public/images/...
 * 2. Update the matching path below.
 * Do not use photographs of other people as stand-ins.
 */
export const images: SiteImages = {
  hero: {
    image: '/images/hero/portrait.png',
    video: '',
    alt: 'Portrait of Rashmi Thakur',
  },
  aboutPortrait: {
    src: '/images/about/portrait.svg',
    alt: 'Placeholder portrait for the About page',
  },
  beyondTheCrown: {
    src: '/images/about/beyond.svg',
    alt: 'Placeholder portrait for Beyond the Crown',
  },
  pillars: {
    peace: {
      src: '/images/pillars/peace.svg',
      alt: 'Placeholder visual for the Peace pillar',
    },
    women: {
      src: '/images/pillars/women.svg',
      alt: 'Placeholder visual for the Women pillar',
    },
    heritage: {
      src: '/images/pillars/heritage.svg',
      alt: 'Placeholder visual for the Heritage pillar',
    },
  },
  impact: {
    peace: { src: '/images/impact/peace.svg', alt: 'Placeholder for peace advocacy' },
    women: { src: '/images/impact/women.svg', alt: "Placeholder for women's leadership" },
    community: {
      src: '/images/impact/community.svg',
      alt: 'Placeholder for community development',
    },
    artisan: { src: '/images/impact/artisan.svg', alt: 'Placeholder for artisan welfare' },
  },
  leadership: {
    wwf: {
      src: '/images/leadership/world-women-federation.svg',
      alt: 'Placeholder for World Women Federation',
    },
    kalam: {
      src: '/images/leadership/kalam-smriti.svg',
      alt: 'Placeholder for Dr. Kalam Smriti International Governing Council',
    },
  },
  handloom: {
    hero: '/images/handloom/hero.svg',
    gallery: [
      '/images/handloom/gallery-01.svg',
      '/images/handloom/gallery-02.svg',
      '/images/handloom/gallery-03.svg',
      '/images/handloom/gallery-04.svg',
    ],
  },
  statement: {
    src: '/images/statement/statement.svg',
    alt: 'Atmospheric background for a personal statement',
  },
  map: {
    src: '/images/presence/map.svg',
    alt: 'Decorative world map highlighting India and Malaysia',
  },
  og: '/images/og.svg',
}
