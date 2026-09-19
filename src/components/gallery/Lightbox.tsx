import { SmartImage } from '@/components/ui/SmartImage'
import type { PortfolioItem } from '@/types'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef } from 'react'

type LightboxProps = {
  items: PortfolioItem[]
  index: number | null
  onClose: () => void
  onIndex: (index: number) => void
}

export function Lightbox({ items, index, onClose, onIndex }: LightboxProps) {
  const reduce = useReducedMotion()
  const touchX = useRef<number | null>(null)
  const open = index !== null
  const item = index !== null ? items[index] : null

  const go = useCallback(
    (direction: number) => {
      if (index === null || items.length === 0) return
      const next = (index + direction + items.length) % items.length
      onIndex(next)
    },
    [index, items.length, onIndex],
  )

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, go])

  return (
    <AnimatePresence>
      {open && item ? (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-[rgba(12,11,10,0.96)]"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-4 text-ivory sm:px-8">
            <p className="label text-gold-soft">{item.caption}</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-none p-2 text-ivory"
              aria-label="Close lightbox"
              autoFocus
            >
              <X className="size-5" />
            </button>
          </div>
          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-10 sm:px-16"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              touchX.current = event.changedTouches[0]?.clientX ?? null
            }}
            onTouchEnd={(event) => {
              if (touchX.current === null) return
              const delta = (event.changedTouches[0]?.clientX ?? 0) - touchX.current
              if (delta > 50) go(-1)
              if (delta < -50) go(1)
              touchX.current = null
            }}
          >
            <button
              type="button"
              className="absolute left-2 hidden p-3 text-ivory/80 hover:text-ivory sm:block"
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft className="size-8" />
            </button>
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-[78vh] max-w-5xl"
            >
              <SmartImage
                src={item.image}
                alt={item.alt}
                className="max-h-[78vh] w-auto object-contain"
              />
            </motion.div>
            <button
              type="button"
              className="absolute right-2 hidden p-3 text-ivory/80 hover:text-ivory sm:block"
              onClick={() => go(1)}
              aria-label="Next image"
            >
              <ChevronRight className="size-8" />
            </button>
          </div>
          <p className="px-5 pb-6 text-center font-serif text-2xl text-ivory sm:text-3xl">
            {item.title}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
