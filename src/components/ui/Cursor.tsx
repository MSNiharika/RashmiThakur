import { useEffect, useState } from 'react'

export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState('')
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine) and (hover: hover)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      const target = event.target as HTMLElement | null
      const viewable = Boolean(target?.closest('[data-cursor="view"]'))
      const link = Boolean(target?.closest('a, button'))
      setLabel(viewable ? 'View' : '')
      setActive(viewable || link)
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[70] hidden -translate-x-1/2 -translate-y-1/2 mix-blend-difference lg:block"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div
        className={`flex items-center justify-center rounded-full bg-ivory transition-all duration-300 ${
          active ? 'size-16' : 'size-3'
        }`}
      >
        {label ? (
          <span className="label text-[0.55rem] text-ink">{label}</span>
        ) : null}
      </div>
    </div>
  )
}
