import { FilterBar } from '@/components/gallery/FilterBar'
import { Lightbox } from '@/components/gallery/Lightbox'
import { SmartImage } from '@/components/ui/SmartImage'
import { usePortfolio } from '@/hooks/usePortfolio'
import { cn } from '@/lib/cn'
import type { PortfolioCategory, PortfolioItem } from '@/types'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'

const aspectClass: Record<PortfolioItem['aspect'], string> = {
  '3/4': 'aspect-[3/4]',
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '2/3': 'aspect-[2/3]',
}

function galleryFrame(isAll: boolean, count: number) {
  if (isAll) return 'masonry mt-10'
  if (count <= 1) return 'mt-10 w-full max-w-[22rem] sm:max-w-[26rem]'
  if (count === 2) {
    return 'mt-10 grid max-w-4xl grid-cols-1 items-stretch gap-x-6 gap-y-10 sm:grid-cols-2'
  }
  return 'mt-10 grid grid-cols-1 items-stretch gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'
}

export function MasonryGallery({
  featuredOnly = false,
  limit,
}: {
  featuredOnly?: boolean
  limit?: number
}) {
  const { categories, all } = usePortfolio()
  const [category, setCategory] = useState<PortfolioCategory>('all')
  const [active, setActive] = useState<number | null>(null)
  const reduce = useReducedMotion()

  const items = useMemo(() => {
    let next = category === 'all' ? all : all.filter((item) => item.category === category)
    if (featuredOnly) next = next.filter((item) => item.featured)
    if (limit) next = next.slice(0, limit)
    return next
  }, [all, category, featuredOnly, limit])

  const isAll = category === 'all'

  return (
    <div>
      <FilterBar
        label="Portfolio categories"
        items={categories}
        value={category}
        onChange={(id) => {
          setCategory(id as PortfolioCategory)
          setActive(null)
        }}
      />
      <div key={category} className={galleryFrame(isAll, items.length)}>
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            className={cn(
              'group relative flex w-full flex-col overflow-hidden text-left',
              isAll && 'masonry-item',
            )}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActive(index)}
            aria-label={item.caption}
          >
            <div
              className={cn(
                'relative overflow-hidden',
                isAll ? aspectClass[item.aspect] : 'aspect-[4/5]',
              )}
            >
              <SmartImage
                src={item.image}
                alt={item.alt}
                className="ken-burns h-full w-full object-cover object-top"
              />
            </div>
            <span className="mt-3 flex justify-end">
              <span className="label text-stone">{item.caption}</span>
            </span>
          </motion.button>
        ))}
      </div>
      <Lightbox
        items={items}
        index={active}
        onClose={() => setActive(null)}
        onIndex={setActive}
      />
    </div>
  )
}
