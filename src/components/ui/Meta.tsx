import { Helmet } from 'react-helmet-async'
import { absoluteUrl, canonicalUrl, pageJsonLd, personJsonLd } from '@/lib/seo'
import { site } from '@/data/site'
import { profile } from '@/data/profile'
import type { SeoMeta } from '@/types'

export function Meta({
  meta,
  includePerson = false,
}: {
  meta: SeoMeta
  includePerson?: boolean
}) {
  const url = canonicalUrl(meta.path)
  const image = absoluteUrl(meta.ogImage ?? site.ogImage)

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={site.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
      {includePerson ? (
        <script type="application/ld+json">{JSON.stringify(personJsonLd())}</script>
      ) : null}
      <script type="application/ld+json">{JSON.stringify(pageJsonLd(meta))}</script>
    </Helmet>
  )
}
