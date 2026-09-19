import { navigation } from '@/data/site'
import { profile } from '@/data/profile'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-ivory"
          id="mobile-menu"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between px-5 py-5 sm:px-8">
            <p className="font-serif text-xl tracking-wide">{profile.name}</p>
            <button
              type="button"
              onClick={onClose}
              className="label text-charcoal"
              autoFocus
            >
              Close
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center px-6 pb-16 sm:px-10">
            {navigation.map((item, index) => (
              <motion.div
                key={item.path}
                initial={reduce ? false : { y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.45 }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block border-b border-charcoal/10 py-4 font-serif text-4xl sm:text-5xl ${
                      isActive ? 'text-gold' : 'text-charcoal'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
