import { handloom, handloomGallery } from '@/data/handloom'

export function useHandloom() {
  return { handloom, gallery: handloomGallery, isLoading: false as const }
}
