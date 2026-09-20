import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useJourney } from '@/hooks/useJourney'
import { formatYear } from '@/lib/cn'

export function Timeline({
  limit,
  showCta = false,
}: {
  limit?: number
  showCta?: boolean
}) {
  const { items } = useJourney()
  const visible = limit ? items.slice(0, limit) : items

  return (
    <div className="relative mt-16">
      <div className="absolute top-0 bottom-0 left-0 w-px bg-charcoal/10 md:left-1/2" />
      <ol className="space-y-14">
        {visible.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.04}>
            <li className="relative grid gap-4 md:grid-cols-2 md:gap-16">
              <div
                className={`md:text-right ${index % 2 === 1 ? 'md:col-start-2 md:text-left' : ''}`}
              >
                <p className="font-display text-5xl text-gold/80 sm:text-6xl">
                  {formatYear(item.year)}
                </p>
              </div>
              <div
                className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:text-right' : ''}`}
              >
                <p className="label text-gold">{item.kind}</p>
                <h3 className="mt-2 font-serif text-3xl sm:text-4xl">{item.title}</h3>
                {item.subtitle ? (
                  <p className="mt-2 text-lg italic text-charcoal">{item.subtitle}</p>
                ) : null}
                {item.location ? (
                  <p className="mt-1 text-sm tracking-wide text-stone">{item.location}</p>
                ) : null}
                {item.description ? (
                  <p className="mt-4 max-w-md text-charcoal md:inline-block">{item.description}</p>
                ) : null}
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
      {showCta ? (
        <div className="mt-16">
          <Button to="/journey">Explore the full journey</Button>
        </div>
      ) : null}
    </div>
  )
}

export function JourneyPreview() {
  return (
    <section className="bg-ivory-soft py-24 lg:py-32">
      <Container>
        <SectionHeading
          kicker="04 — Journey"
          title="From the Crown to a Cause"
          description="An editorial path from national and international platforms toward peace, leadership and cultural advocacy."
        />
        <Timeline limit={8} showCta />
      </Container>
    </section>
  )
}
