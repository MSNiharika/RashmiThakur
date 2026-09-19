import { MasonryGallery } from '@/components/gallery/MasonryGallery'
import { Container } from '@/components/ui/Container'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { seo } from '@/data/site'

export default function Portfolio() {
  return (
    <>
      <Meta meta={seo.portfolio} />
      <PageHero
        kicker="Portfolio"
        title="A visual journey"
        description="Fashion, beauty, pageants, editorial, cultural, international, social impact, leadership and handloom."
      />
      <section className="bg-ivory pb-24 lg:pb-32">
        <Container>
          <MasonryGallery />
        </Container>
      </section>
    </>
  )
}
