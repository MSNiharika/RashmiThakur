import { Container } from '@/components/ui/Container'
import { TextReveal } from '@/components/animation/TextReveal'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

export function PageHero({
  kicker,
  title,
  description,
  compact = false,
  children,
}: {
  kicker: string
  title: string
  description?: string
  compact?: boolean
  children?: ReactNode
}) {
  return (
    <header
      className={cn(
        'bg-ivory',
        compact ? 'pt-28 pb-6 lg:pt-32 lg:pb-8' : 'pt-32 pb-12 lg:pt-40 lg:pb-16',
      )}
    >
      <Container>
        <TextReveal>
          <p className="label text-gold">{kicker}</p>
        </TextReveal>
        <h1
          className={cn(
            'max-w-4xl font-display leading-[0.95]',
            compact
              ? 'mt-4 font-bold text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem]'
              : 'mt-5 font-bold text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem]',
          )}
        >
          <TextReveal delay={0.08}>{title}</TextReveal>
        </h1>
        <div className={cn('gold-rule', compact ? 'mt-5' : 'mt-8')} />
        {description ? (
          <TextReveal delay={0.16}>
            <p
              className={cn(
                'max-w-2xl font-serif italic text-charcoal',
                compact ? 'mt-5 text-[1.15rem] leading-snug sm:text-[1.25rem]' : 'mt-8 text-[1.25rem] leading-snug',
              )}
            >
              {description}
            </p>
          </TextReveal>
        ) : null}
        {children ? <div className={compact ? 'mt-7' : 'mt-10'}>{children}</div> : null}
      </Container>
    </header>
  )
}
