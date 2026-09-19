import { FilterBar } from '@/components/gallery/FilterBar'
import { MediaCard } from '@/components/sections/MediaSection'
import { VideoSection } from '@/components/sections/VideoSection'
import { Container } from '@/components/ui/Container'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { useMedia } from '@/hooks/useMedia'
import { seo } from '@/data/site'
import type { MediaCategory } from '@/types'
import { useMemo, useState } from 'react'

const filters: { id: 'all' | MediaCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'news', label: 'News' },
  { id: 'interviews', label: 'Interviews' },
  { id: 'magazines', label: 'Magazines' },
  { id: 'tv', label: 'TV' },
  { id: 'events', label: 'Events' },
]

export default function Media() {
  const { all } = useMedia()
  const [category, setCategory] = useState<'all' | MediaCategory>('all')
  const items = useMemo(
    () => (category === 'all' ? all : all.filter((item) => item.category === category)),
    [all, category],
  )

  return (
    <>
      <Meta meta={seo.media} />
      <PageHero
        kicker="Media"
        title="In the media"
        description="News, interviews, magazines, television and events. External links open in a new tab."
      />
      <section className="bg-ivory pb-8">
        <Container>
          <FilterBar
            label="Media categories"
            items={filters}
            value={category}
            onChange={(id) => setCategory(id as 'all' | MediaCategory)}
          />
          <div className="mt-8">
            {items.length === 0 ? (
              <p className="py-16 text-stone">No coverage in this category yet.</p>
            ) : (
              items.map((item) => <MediaCard key={item.id} item={item} />)
            )}
          </div>
        </Container>
      </section>
      <VideoSection />
    </>
  )
}
