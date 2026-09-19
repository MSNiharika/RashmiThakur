import { FadeIn } from '@/components/animation/FadeIn'
import { ParallaxImage } from '@/components/animation/ParallaxImage'
import { SmartImage } from '@/components/ui/SmartImage'
import { images } from '@/data/images'
import { profile } from '@/data/profile'

export function QuoteSection() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden bg-ink">
      <ParallaxImage className="absolute inset-0" strength={24}>
        <SmartImage
          src={images.statement.src}
          alt={images.statement.alt}
          className="h-full min-h-[88vh] w-full object-cover"
        />
      </ParallaxImage>
      <div className="absolute inset-0 bg-[rgba(12,11,10,0.72)]" />
      <div className="relative mx-auto max-w-page px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <p className="label text-gold-soft">12 — Statement</p>
        <FadeIn>
          <blockquote className="mt-8 max-w-4xl font-serif text-3xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            {profile.personalStatement}
          </blockquote>
        </FadeIn>
        <p className="mt-10 font-serif text-2xl italic text-ivory/80">{profile.name}</p>
      </div>
    </section>
  )
}
