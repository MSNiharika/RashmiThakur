import { FadeIn } from '@/components/animation/FadeIn'
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
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '2 / 3' }}>
                  <SmartImage
                    src={area.image}
                    alt={area.title}
                    focus="center 42%"
                    className="ken-burns absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="media-veil" />
                  <span className="media-copy absolute inset-x-0 bottom-0 z-[1] p-5 text-ivory">
                    <span className="label text-gold-soft">{area.number}</span>
                    <span className="mt-2 block font-serif italic text-3xl">{area.title}</span>
                  </span>
                </div>
                <p className="mt-4 max-w-md text-charcoal">{area.description}</p>
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
