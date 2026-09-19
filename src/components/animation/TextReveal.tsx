import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function TextReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()

  return (
    <span className={`block overflow-hidden ${className ?? ''}`}>
      <motion.span
        className="block"
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}
