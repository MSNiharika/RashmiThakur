import { FadeIn } from '@/components/animation/FadeIn'
import { ParallaxImage } from '@/components/animation/ParallaxImage'
import { Button } from '@/components/ui/Button'
import { EditorialText } from '@/components/ui/EditorialText'
import { SmartImage } from '@/components/ui/SmartImage'
import { images } from '@/data/images'
import { useHandloom } from '@/hooks/useHandloom'

export function HandloomSection({ preview = false }: { preview?: boolean }) {
  const { handloom } = useHandloom()

  return (
    <section className="relative isolate overflow-hidden bg-earth text-ivory">
      <ParallaxImage className="absolute inset-0" strength={30}>
        <SmartImage
          src={images.handloom.hero}
          alt="Placeholder for Indian handloom photography"
          className="h-full min-h-[90vh] w-full object-cover opacity-55"
        />
      </ParallaxImage>
      <div className="absolute inset-0 bg-[rgba(12,11,10,0.58)]" />
      <div className="textile-overlay absolute inset-0 opacity-60" />
      <div className="relative mx-auto flex min-h-[90vh] max-w-page flex-col justify-end px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <p className="label text-gold-soft">{preview ? '07 — Heritage' : 'Ambassador'}</p>
        <h2 className="mt-5 font-serif text-5xl sm:text-7xl lg:text-8xl">{handloom.title}</h2>
        <p className="label mt-4 text-ivory/70">{handloom.subheading}</p>
        <FadeIn>
          <EditorialText className="mt-10 max-w-3xl text-ivory">
            {handloom.intro}
          </EditorialText>
        </FadeIn>
        <p className="mt-6 max-w-2xl text-ivory/75">{handloom.paragraphs[1]}</p>
        {preview ? (
          <div className="mt-10">
            <Button to="/handloom" variant="light">
              Explore handloom
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
