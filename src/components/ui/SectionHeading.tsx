import { FadeIn } from '@/components/animation/FadeIn'
import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  kicker?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        'group max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {kicker ? (
        <p
          className={cn(
            'label mb-5',
            light ? 'text-gold-soft' : 'text-gold',
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          'font-serif italic font-bold text-[2rem] leading-[1.08] sm:text-[2.5rem] lg:text-[3rem]',
          light ? 'text-ivory' : 'text-charcoal',
        )}
      >
        {title}
      </h2>
      <div className={cn('gold-rule mt-6', light && 'bg-gold-soft')} />
      {description ? (
        <p
          className={cn(
            'mt-6 max-w-xl font-serif italic text-xl leading-snug sm:text-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-ivory/90' : 'text-charcoal',
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  )
}
