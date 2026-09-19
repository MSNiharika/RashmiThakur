import { FadeIn } from '@/components/animation/FadeIn'
import { HandloomSection } from '@/components/sections/HandloomSection'
import { Container } from '@/components/ui/Container'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { SmartImage } from '@/components/ui/SmartImage'
import { useHandloom } from '@/hooks/useHandloom'
import { seo } from '@/data/site'
import { useState } from 'react'
import { Lightbox } from '@/components/gallery/Lightbox'
import type { PortfolioItem } from '@/types'

export default function Handloom() {
  const { handloom, gallery } = useHandloom()
  const [active, setActive] = useState<number | null>(null)
  const lightboxItems: PortfolioItem[] = gallery.map((item) => ({
    id: item.id,
    title: item.caption,
    category: 'handloom',
    image: item.src,
    alt: item.alt,
    caption: item.caption,
    aspect: '4/5',
    placeholder: true,
  }))

  return (
    <>
      <Meta meta={seo.handloom} />
      <PageHero
        kicker="Heritage"
        title={handloom.title}
        description={handloom.subheading}
      />
      <HandloomSection />
      {handloom.sections.map((section, index) => (
        <section
          key={section.id}
          className={index % 2 === 0 ? 'bg-ivory' : 'bg-ivory-soft'}
        >
          <Container className="grid items-center gap-12 py-20 lg:grid-cols-12">
            <FadeIn className={index % 2 ? 'lg:col-span-5 lg:col-start-8' : 'lg:col-span-5'}>
              <p className="label text-gold">0{index + 1}</p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{section.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-stone">{section.body}</p>
            </FadeIn>
            <div className={index % 2 ? 'lg:col-span-6 lg:col-start-1 lg:row-start-1' : 'lg:col-span-6 lg:col-start-7'}>
              <SmartImage
                src={section.image}
                alt=""
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </Container>
        </section>
      ))}
      <section className="bg-ivory py-24">
        <Container>
          <h2 className="font-serif text-4xl sm:text-5xl">Image Gallery</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <button
                key={item.id}
                type="button"
                data-cursor="view"
                onClick={() => setActive(index)}
                className="overflow-hidden"
              >
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </Container>
      </section>
      <Lightbox
        items={lightboxItems}
        index={active}
        onClose={() => setActive(null)}
        onIndex={setActive}
      />
    </>
  )
}
