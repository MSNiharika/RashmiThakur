import { Button } from '@/components/ui/Button'
import { SmartImage } from '@/components/ui/SmartImage'
import { images } from '@/data/images'
import { profile } from '@/data/profile'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

function LaunchText({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        initial={reduce ? false : { y: 56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.05, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -36])

  const media = images.hero.video ? (
    <video
      className="absolute inset-0 h-full w-full object-cover"
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
      focus="center top"
      className="absolute inset-0 h-full w-full object-cover"
    />
  )

  return (
    <>
      <section ref={ref} className="relative h-[100vh] h-[100svh] overflow-hidden bg-ink">
        <motion.div
          className="hero-media absolute inset-0 overflow-hidden lg:left-[40%]"
          style={{ transformOrigin: 'left center' }}
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.45, ease }}
        >
          <motion.div style={{ y }} className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.18, opacity: 0.35 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.1, ease }}
            >
              {media}
            </motion.div>
          </motion.div>
          <div
            className="hero-media-veil absolute inset-0 lg:hidden"
            style={{
              background:
                'linear-gradient(to top, rgba(12,11,10,0.9) 0%, rgba(12,11,10,0.28) 48%, rgba(12,11,10,0.18) 100%)',
            }}
          />
          <div
            className="hero-media-fade pointer-events-none absolute inset-y-0 left-0 hidden w-28 lg:block"
            style={{
              background: 'linear-gradient(to right, #0C0B0A, rgba(12,11,10,0))',
            }}
          />
        </motion.div>

        <div className="hero-copy relative z-10 flex h-full w-full max-w-page flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:w-[44%] lg:px-12 lg:pb-24">
          <LaunchText delay={0.35}>
            <p className="label mb-6 text-gold-soft">
              Beauty · Leadership · Peace · Culture
            </p>
          </LaunchText>
          <h1 className="font-display font-bold text-[3.25rem] leading-[0.88] text-ivory sm:text-[4.25rem] lg:text-[5.5rem]">
            <LaunchText delay={0.5}>{profile.firstName}</LaunchText>
            <LaunchText delay={0.62}>{profile.lastName}</LaunchText>
          </h1>
          <motion.div
            className="mt-8 h-px bg-gold-soft"
            initial={reduce ? false : { width: 0, opacity: 0 }}
            animate={{ width: '3.5rem', opacity: 0.85 }}
            transition={{ duration: 0.9, delay: 0.78, ease }}
          />
          <LaunchText delay={0.88}>
            <p className="label mt-6 text-ivory">{profile.primaryTitle}</p>
          </LaunchText>
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-ivory">
        <div className="mx-auto flex max-w-page flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <LaunchText delay={1.05}>
            <p className="max-w-xl font-quote text-2xl leading-snug text-charcoal sm:text-3xl">
              {profile.supportingMessage.join(' ')}
            </p>
          </LaunchText>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.18, ease }}
          >
            <Button to="/journey">Explore her journey</Button>
            <Button to="/portfolio" variant="ghost">
              View portfolio
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
