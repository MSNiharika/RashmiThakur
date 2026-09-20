import { FadeIn } from '@/components/animation/FadeIn'
import { Container } from '@/components/ui/Container'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { PortraitFrame } from '@/components/ui/PortraitFrame'
import { useImpact } from '@/hooks/useImpact'
import { seo } from '@/data/site'

export default function Impact() {
  const { sections } = useImpact()

  return (
    <>
      <Meta meta={seo.impact} />
      <PageHero
        kicker="Impact"
        title="Creating impact beyond the spotlight"
        description="Peace, women’s empowerment, community development, artisan welfare, mental health awareness and cultural heritage preservation."
      />
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={index % 2 === 0 ? 'bg-ivory' : 'bg-ivory-soft'}
        >
          <Container className="grid items-center gap-12 py-20 lg:grid-cols-12">
            <div className={index % 2 ? 'lg:col-span-5 lg:col-start-8' : 'lg:col-span-5'}>
              <PortraitFrame src={section.image} alt="" focus="center 42%" />
            </div>
            <FadeIn
              className={
                index % 2 ? 'lg:col-span-6 lg:col-start-1 lg:row-start-1' : 'lg:col-span-6 lg:col-start-7'
              }
            >
              <p className="label text-gold">0{index + 1}</p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{section.title}</h2>
              <p className="mt-6 font-serif italic text-xl leading-relaxed text-charcoal">{section.body}</p>
            </FadeIn>
          </Container>
        </section>
      ))}
    </>
  )
}
