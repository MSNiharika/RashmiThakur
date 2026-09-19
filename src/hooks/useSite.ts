import { configuredSocials, navigation, seo, site } from '@/data/site'

export function useSite() {
  return { site, navigation, seo, socials: configuredSocials }
}
