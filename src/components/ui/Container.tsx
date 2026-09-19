import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'footer'
  id?: string
}

export function Container({
  children,
  className,
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn('mx-auto w-full max-w-page px-5 sm:px-8 lg:px-12', className)}
    >
      {children}
    </Tag>
  )
}
