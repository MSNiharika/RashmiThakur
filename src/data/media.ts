import type { MediaItem } from '@/types'

/**
 * Only verified public coverage is listed with URLs.
 */
export const mediaItems: MediaItem[] = [
  {
    id: 'the-hindu-2016',
    publication: 'The Hindu',
    title: 'Minister lauds beauty pageant runner-up',
    date: '2016',
    image: '/images/photos/004.jpg',
    description:
      'Coverage of Rashmi Thakur’s first runner-up position at Miss Asia International 2016 in Malaysia.',
    url: 'https://www.thehindu.com/news/cities/Hyderabad/Minister-lauds-beauty-pageant-runner-up/article16107971.ece',
    category: 'news',
  },
  {
    id: 'ragalahari-ikat-2016',
    publication: 'Ragalahari',
    title: 'Miss Planet India inaugurates Pochampally IKAT Art Mela',
    date: '2016',
    image: '/images/photos/037.jpg',
    description:
      'Public appearance at the Pochampally IKAT Art Mela, in conversation with India’s handloom tradition.',
    url: 'https://www.ragalahari.com/localevents/102213/miss-planet-india-rashmi-thakur-pochampally-ikat-art-mela-2016.aspx',
    category: 'events',
  },
]
