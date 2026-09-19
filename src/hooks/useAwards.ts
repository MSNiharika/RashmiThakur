import { awards } from '@/data/awards'

export function useAwards() {
  return { awards, isLoading: false as const }
}
