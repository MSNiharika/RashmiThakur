import { profile } from '@/data/profile'
import { configuredSocials, seo, site } from '@/data/site'
import type { SeoMeta } from '@/types'

export function canonicalUrl(path: string) {
  const trimmed = path === '/' ? '/' : path.replace(/\/+$/, '')
  return `${site.url}${trimmed}`
}

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: site.url,
    jobTitle: profile.primaryTitle,
    description: profile.shortBio,
    nationality: {
      '@type': 'Country',
      name: 'India',
    },
    sameAs: configuredSocials.map((link) => link.href),
  }
}

export function pageJsonLd(meta: SeoMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: meta.title,
    description: meta.description,
    url: canonicalUrl(meta.path),
    isPartOf: {
      '@type': 'WebSite',
      name: `${profile.name}`,
      url: site.url,
    },
  }
}

export const defaultMeta = seo.home
