import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useAwards } from '@/hooks/useAwards'
import { formatYear } from '@/lib/cn'

export function AwardList({ preview = false }: { preview?: boolean }) {
  const { awards } = useAwards()

  return (
    <section className="bg-ivory-soft py-24 lg:py-32">
      <Container>
        <SectionHeading
          kicker={preview ? '10 — Honours' : 'Honours'}
          title="Recognition"
          description="Selected awards and honours. Dates appear only where they are known."
        />
        <ol className="mt-16 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {awards.map((award, index) => (
            <FadeIn key={award.id} delay={index * 0.04}>
              <li className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
                <p className="font-serif text-4xl text-gold md:col-span-3">
                  {formatYear(award.year)}
                </p>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-3xl sm:text-4xl">{award.title}</h3>
                  {award.organization ? (
                    <p className="mt-2 text-stone">{award.organization}</p>
                  ) : null}
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
        {preview ? (
          <div className="mt-12">
            <Button to="/recognition">View recognition</Button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
