import { MasonryGallery } from '@/components/gallery/MasonryGallery'
import { Container } from '@/components/ui/Container'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { images } from '@/data/images'
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
      <div className="bg-ivory px-5 pb-4 sm:px-8 lg:px-12">
        <img
          src={images.portfolioHero.src}
          alt={images.portfolioHero.alt}
          className="mx-auto max-h-[88vh] w-full max-w-5xl object-contain"
        />
      </div>
      <section className="bg-ivory pb-24 pt-6 lg:pb-32">
        <Container>
          <MasonryGallery />
        </Container>
      </section>
    </>
  )
}
