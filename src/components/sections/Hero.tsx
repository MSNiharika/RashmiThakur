import { Button } from '@/components/ui/Button'
import { SmartImage } from '@/components/ui/SmartImage'
import { images } from '@/data/images'
import { profile } from '@/data/profile'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 48])
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1])

  const media = images.hero.video ? (
    <video
      className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
      autoPlay
      muted
      loop
      playsInline
      poster={images.hero.image}
      aria-label={images.hero.alt}
    >
      <source src={images.hero.video} />
    </video>
  ) : (
    <SmartImage
      src={images.hero.image}
      alt={images.hero.alt}
      loading="eager"
      fetchPriority="high"
      className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
    />
  )

  return (
    <>
      <section ref={ref} className="relative h-[100svh] overflow-hidden bg-ink">
        <div className="absolute inset-0 overflow-hidden lg:left-[40%]">
          <motion.div style={{ y, scale }} className="absolute inset-0">
            {media}
          </motion.div>
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                'linear-gradient(to top, rgba(12,11,10,0.9) 0%, rgba(12,11,10,0.28) 48%, rgba(12,11,10,0.18) 100%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 lg:block"
            style={{
              background: 'linear-gradient(to right, #0C0B0A, rgba(12,11,10,0))',
            }}
          />
        </div>

        <div className="relative z-10 flex h-full w-full max-w-page flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:w-[44%] lg:px-12 lg:pb-24">
          <p className="label mb-6 text-gold-soft">
            Beauty · Leadership · Peace · Culture
          </p>
          <h1 className="font-serif text-6xl leading-[0.88] text-ivory sm:text-7xl lg:text-[6.2rem]">
            {profile.firstName}
            <span className="block">{profile.lastName}</span>
          </h1>
          <p className="label mt-8 text-ivory">{profile.primaryTitle}</p>
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-ivory">
        <div className="mx-auto flex max-w-page flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p className="max-w-xl font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
            {profile.supportingMessage.join(' ')}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/journey">Explore her journey</Button>
            <Button to="/portfolio" variant="ghost">
              View portfolio
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
