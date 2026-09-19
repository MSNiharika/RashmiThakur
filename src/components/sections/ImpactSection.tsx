import { FadeIn } from '@/components/animation/FadeIn'
import { ParallaxImage } from '@/components/animation/ParallaxImage'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SmartImage } from '@/components/ui/SmartImage'
import { useImpact } from '@/hooks/useImpact'
import { Link } from 'react-router-dom'

export function ImpactSection({ preview = false }: { preview?: boolean }) {
  const { areas } = useImpact()

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <SectionHeading
          kicker={preview ? '05 — Impact' : 'Advocacy'}
          title="Creating Impact Beyond the Spotlight"
          description="Work that sits beyond the stage: dialogue, dignity, livelihood and heritage."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {areas.map((area, index) => (
            <FadeIn key={area.id} delay={index * 0.05}>
              <Link to={area.href} className="group block">
                <ParallaxImage className={index % 2 === 0 ? 'aspect-[16/10]' : 'aspect-[16/11]'}>
                  <SmartImage
                    src={area.image}
                    alt={area.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </ParallaxImage>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="label text-gold">{area.number}</p>
                    <h3 className="mt-2 font-serif text-3xl sm:text-4xl">{area.title}</h3>
                    <p className="mt-3 max-w-md text-stone">{area.description}</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        {preview ? (
          <div className="mt-14">
            <Button to="/impact">Explore impact</Button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
