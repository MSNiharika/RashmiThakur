import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { EditorialText } from '@/components/ui/EditorialText'
import { PortraitFrame } from '@/components/ui/PortraitFrame'
import { images } from '@/data/images'
import { useHandloom } from '@/hooks/useHandloom'

export function HandloomSection({ preview = false }: { preview?: boolean }) {
  const { handloom } = useHandloom()

  return (
    <section className="bg-earth text-ivory">
      <div className="mx-auto grid max-w-page items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-28">
        <div className="lg:col-span-5">
          <PortraitFrame
            src={images.handloom.hero}
            alt="Rashmi Thakur wearing Indian handloom"
            focus="center 38%"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="label text-gold-soft">{preview ? '07 — Heritage' : 'Ambassador'}</p>
          <h2 className="mt-5 font-display text-5xl sm:text-7xl">{handloom.title}</h2>
          <p className="label mt-4 text-ivory">{handloom.subheading}</p>
          <FadeIn>
            <EditorialText className="mt-10 max-w-3xl text-ivory">{handloom.intro}</EditorialText>
          </FadeIn>
          <p className="mt-6 max-w-2xl text-ivory">{handloom.paragraphs[1]}</p>
          {preview ? (
            <div className="mt-10">
              <Button to="/handloom" variant="light">
                Explore handloom
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
