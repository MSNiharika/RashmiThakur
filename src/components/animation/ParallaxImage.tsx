import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function ParallaxImage({
  children,
  className,
  strength = 40,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [strength, -strength])
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1])

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div style={{ y, scale }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}
