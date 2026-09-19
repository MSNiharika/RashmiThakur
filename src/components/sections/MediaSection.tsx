import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SmartImage } from '@/components/ui/SmartImage'
import { useMedia } from '@/hooks/useMedia'
import type { MediaItem } from '@/types'
import { ArrowUpRight } from 'lucide-react'

export function MediaCard({ item }: { item: MediaItem }) {
  const inner = (
    <article className="group grid gap-6 border-b border-charcoal/10 py-8 md:grid-cols-12">
      <div className="overflow-hidden md:col-span-4">
        <SmartImage
          src={item.image}
          alt={item.title}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="md:col-span-8">
        <p className="label text-gold">
          {item.publication}
          {item.date ? ` · ${item.date}` : ''}
        </p>
        <h3 className="mt-3 font-serif text-3xl sm:text-4xl">{item.title}</h3>
        <p className="mt-4 max-w-xl text-stone">{item.description}</p>
        {item.url ? (
          <p className="mt-5 inline-flex items-center gap-2 text-sm tracking-wide">
            Read
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </p>
        ) : (
          <p className="label mt-5 text-stone">To be added</p>
        )}
      </div>
    </article>
  )

  if (!item.url) return inner

  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  )
}

export function MediaSection({ preview = false }: { preview?: boolean }) {
  const { all } = useMedia()
  const items = preview ? all.filter((item) => !item.placeholder).slice(0, 3) : all

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <SectionHeading
          kicker={preview ? '11 — Press' : 'Press'}
          title="In the Media"
          description="Selected public coverage. Additional interviews, magazines and broadcasts can be added from the media data file."
        />
        <div className="mt-10">
          {items.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.04}>
              <MediaCard item={item} />
            </FadeIn>
          ))}
        </div>
        {preview ? (
          <div className="mt-12">
            <Button to="/media">Explore media</Button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
