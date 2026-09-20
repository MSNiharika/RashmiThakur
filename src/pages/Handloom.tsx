import { FadeIn } from '@/components/animation/FadeIn'
import { HandloomSection } from '@/components/sections/HandloomSection'
import { Container } from '@/components/ui/Container'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { PortraitFrame } from '@/components/ui/PortraitFrame'
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
    placeholder: false,
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
              <p className="mt-6 font-serif italic text-xl leading-relaxed text-charcoal">{section.body}</p>
            </FadeIn>
            <div className={index % 2 ? 'lg:col-span-6 lg:col-start-1 lg:row-start-1' : 'lg:col-span-6 lg:col-start-7'}>
              <PortraitFrame src={section.image} alt="" focus="center 42%" />
            </div>
          </Container>
        </section>
      ))}
      {gallery.length > 0 ? (
      <section className="bg-ivory py-24">
        <Container>
          <h2 className="font-serif italic text-4xl sm:text-5xl">Image Gallery</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className="group relative overflow-hidden"
              >
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  focus="center 28%"
                  className="ken-burns aspect-[4/5] w-full object-cover"
                />
                <span className="media-veil" />
                <span className="media-copy absolute inset-x-0 bottom-0 z-[1] p-3 text-left text-ivory">
                  <span className="font-serif italic text-lg">{item.caption}</span>
                </span>
              </button>
            ))}
          </div>
        </Container>
      </section>
      ) : null}
      <Lightbox
        items={lightboxItems}
        index={active}
        onClose={() => setActive(null)}
        onIndex={setActive}
      />
    </>
  )
}
