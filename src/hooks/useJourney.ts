import { journeyItems } from '@/data/journey'

export function useJourney() {
  return { items: journeyItems, isLoading: false as const }
}
