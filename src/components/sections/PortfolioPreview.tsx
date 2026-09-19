import { MasonryGallery } from '@/components/gallery/MasonryGallery'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function PortfolioPreview() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <SectionHeading
          kicker="09 — Portfolio"
          title="A Visual Journey"
          description="A curated set of frames. Real photographs replace these placeholders without changing the layout."
        />
        <div className="mt-14">
          <MasonryGallery limit={8} />
        </div>
        <div className="mt-12">
          <Button to="/portfolio">View full portfolio</Button>
        </div>
      </Container>
    </section>
  )
}
