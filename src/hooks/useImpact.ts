import { impactAreas, impactPageSections, pillars } from '@/data/impact'

export function useImpact() {
  return {
    areas: impactAreas,
    pillars,
    sections: impactPageSections,
    isLoading: false as const,
  }
}
