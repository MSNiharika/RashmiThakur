import { mediaItems } from '@/data/media'
import type { MediaCategory } from '@/types'

export function useMedia(category: MediaCategory | 'all' = 'all') {
  const items =
    category === 'all'
      ? mediaItems
      : mediaItems.filter((item) => item.category === category)

  return { items, all: mediaItems, isLoading: false as const }
}
