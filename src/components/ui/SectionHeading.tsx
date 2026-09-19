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
        'max-w-3xl',
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
          'font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl',
          light ? 'text-ivory' : 'text-charcoal',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-6 max-w-xl text-base leading-relaxed sm:text-lg',
            align === 'center' && 'mx-auto',
            light ? 'text-ivory/75' : 'text-stone',
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  )
}
