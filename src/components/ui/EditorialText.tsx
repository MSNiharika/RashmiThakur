import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

export function EditorialText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'font-serif text-2xl leading-snug text-charcoal sm:text-3xl lg:text-[2.35rem] lg:leading-[1.25]',
        className,
      )}
    >
      {children}
    </p>
  )
}
