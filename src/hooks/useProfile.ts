import { profile } from '@/data/profile'
import { images } from '@/data/images'

export function useProfile() {
  return { profile, images, isLoading: false as const }
}
