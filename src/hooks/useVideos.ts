import { videos } from '@/data/videos'

export function useVideos() {
  return { videos, isLoading: false as const }
}
