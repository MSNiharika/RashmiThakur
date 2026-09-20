import type { SiteImages } from '@/types'

/**
 * Each photograph is stored once under /images/photos/{index}.jpg
 * and referenced from a single content slot.
 */
export const images: SiteImages = {
  hero: {
    image: '/images/photos/012.jpg',
    video: '',
    alt: 'Rashmi Thakur in a cream gown with red petal embroidery',
  },
  aboutPortrait: {
    src: '/images/photos/028.jpg',
    alt: 'Rashmi Thakur in a black blazer, photographed outdoors',
  },
  beyondTheCrown: {
    src: '/images/photos/031.jpg',
    alt: 'Rashmi Thakur in a black blazer, photographed outdoors',
  },
  pillars: {
    peace: {
      src: '/images/photos/020.jpg',
      alt: 'Rashmi Thakur speaking at a public forum',
    },
    women: {
      src: '/images/photos/083.jpg',
      alt: 'Rashmi Thakur holding the She Power Award',
    },
    heritage: {
      src: '/images/photos/014.jpg',
      alt: 'Rashmi Thakur seated on stone steps in a magenta handloom saree',
    },
  },
  impact: {
    peace: {
      src: '/images/photos/087.jpg',
      alt: 'Rashmi Thakur speaking at a microphone in public',
    },
    women: {
      src: '/images/photos/089.jpg',
      alt: 'Rashmi Thakur speaking on stage at a public forum',
    },
    community: {
      src: '/images/photos/030.jpg',
      alt: 'Rashmi Thakur receiving a community honour on stage',
    },
    artisan: {
      src: '/images/photos/097.jpg',
      alt: 'Rashmi Thakur in a purple and orange handloom saree',
    },
  },
  leadership: {
    wwf: {
      src: '/images/photos/020.jpg',
      alt: 'Rashmi Thakur speaking at a microphone',
    },
    kalam: {
      src: '/images/photos/002.jpg',
      alt: 'Rashmi Thakur receiving an honour in a public ceremony',
    },
  },
  handloom: {
    hero: '/images/photos/046.jpg',
    gallery: [],
  },
  statement: {
    src: '/images/photos/025.jpg',
    alt: 'Rashmi Thakur in a red dress beside water',
  },
  map: {
    src: '/images/photos/021.jpg',
    alt: 'Rashmi Thakur on an international red carpet in a magenta gown',
  },
  portfolioHero: {
    src: '/images/photos/012.jpg',
    alt: 'Rashmi Thakur in a cream gown with red petal embroidery',
  },
  og: '/images/photos/012.jpg',
}

export const aboutSectionImages = [
  {
    src: '/images/photos/000.jpg',
    alt: 'Rashmi Thakur in a traditional red and black saree',
  },
  {
    src: '/images/photos/028.jpg',
    alt: 'Rashmi Thakur in a black blazer, photographed outdoors',
  },
  {
    src: '/images/photos/005.jpg',
    alt: 'Rashmi Thakur at a community gathering',
  },
  {
    src: '/images/photos/087.jpg',
    alt: 'Rashmi Thakur speaking in public',
  },
  {
    src: '/images/photos/022.jpg',
    alt: 'Rashmi Thakur in a white and red saree at a cultural event',
  },
  {
    src: '/images/photos/078.jpg',
    alt: 'Rashmi Thakur in a white and red saree',
  },
  {
    src: '/images/photos/021.jpg',
    alt: 'Rashmi Thakur in a magenta gown on an international red carpet',
  },
] as const
