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
        'font-serif italic text-[1.65rem] leading-snug text-charcoal sm:text-[1.85rem] lg:text-[2rem] lg:leading-[1.3]',
        className,
      )}
    >
      {children}
    </p>
  )
}
