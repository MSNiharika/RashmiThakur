import type { VideoItem } from '@/types'

/**
 * Add YouTube, Vimeo or MP4 URLs when films are available.
 * Empty `url` values render as elegant posters, never as fake players.
 */
export const videos: VideoItem[] = [
  {
    id: 'international-journey',
    title: 'International Journey',
    category: 'International Journey',
    provider: 'placeholder',
    url: '',
    poster: '/images/videos/international.svg',
    description: 'Film to be added.',
  },
  {
    id: 'peace-initiatives',
    title: 'Peace Initiatives',
    category: 'Peace Initiatives',
    provider: 'placeholder',
    url: '',
    poster: '/images/videos/peace.svg',
    description: 'Film to be added.',
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    category: 'Women Empowerment',
    provider: 'placeholder',
    url: '',
    poster: '/images/videos/women.svg',
    description: 'Film to be added.',
  },
  {
    id: 'indian-handloom',
    title: 'Indian Handloom',
    category: 'Indian Handloom',
    provider: 'placeholder',
    url: '',
    poster: '/images/videos/handloom.svg',
    description: 'Film to be added.',
  },
  {
    id: 'media',
    title: 'Media',
    category: 'Media',
    provider: 'placeholder',
    url: '',
    poster: '/images/videos/media.svg',
    description: 'Film to be added.',
  },
  {
    id: 'fashion-pageants',
    title: 'Fashion / Pageants',
    category: 'Fashion / Pageants',
    provider: 'placeholder',
    url: '',
    poster: '/images/videos/fashion.svg',
    description: 'Film to be added.',
  },
]
