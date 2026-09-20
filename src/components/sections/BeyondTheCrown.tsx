import { FadeIn } from '@/components/animation/FadeIn'
import { ImageReveal } from '@/components/animation/ImageReveal'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { EditorialText } from '@/components/ui/EditorialText'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SmartImage } from '@/components/ui/SmartImage'
import { images } from '@/data/images'

export function BeyondTheCrown() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <SectionHeading kicker="02" title="Beyond the Crown" />
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 lg:pr-8">
            <EditorialText className="max-w-xl">
              A journey shaped by purpose, leadership, culture and social impact.
            </EditorialText>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-charcoal">
              Her journey spans international beauty platforms, global peace
              initiatives, women’s leadership and the preservation of India’s
              cultural heritage.
            </p>
            <FadeIn delay={0.15}>
              <div className="mt-10">
                <Button to="/about" variant="ghost" className="px-0">
                  Discover her story
                </Button>
              </div>
            </FadeIn>
          </div>
          <ImageReveal className="lg:col-span-6" delay={0.1}>
            <SmartImage
              src={images.beyondTheCrown.src}
              alt={images.beyondTheCrown.alt}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </ImageReveal>
        </div>
      </Container>
    </section>
  )
}
