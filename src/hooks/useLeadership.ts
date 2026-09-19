import { leadershipRoles } from '@/data/leadership'

export function useLeadership() {
  return { roles: leadershipRoles, isLoading: false as const }
}
