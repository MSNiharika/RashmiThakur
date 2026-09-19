import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: FadeInProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
