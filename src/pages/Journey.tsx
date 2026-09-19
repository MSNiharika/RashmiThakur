import { Timeline } from '@/components/sections/JourneyPreview'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { seo } from '@/data/site'

export default function Journey() {
  return (
    <>
      <Meta meta={seo.journey} />
      <PageHero
        kicker="Journey"
        title="From the crown to a cause"
        description="National titles, an international stage, and the work that followed — peace, leadership, culture and handloom."
      />
      <section className="bg-ivory pb-24 lg:pb-32">
        <Container>
          <Timeline />
        </Container>
      </section>
    </>
  )
}
