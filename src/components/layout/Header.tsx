import { DesktopNav } from '@/components/navigation/DesktopNav'
import { MobileMenu } from '@/components/navigation/MobileMenu'
import { profile } from '@/data/profile'
import { cn } from '@/lib/cn'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const { pathname } = useLocation()
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const overHero = pathname === '/' && !scrolled && !open
  const launch = pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    setOpen(false)
    setScrolled(window.scrollY > 12)
  }, [pathname])

  const ink = overHero ? '#F4EFE6' : '#1A1815'

  return (
    <>
      <motion.header
        initial={reduce || !launch ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: launch ? 0.12 : 0, ease: [0.22, 1, 0.36, 1] }}
        className="site-header"
      >
        <div
          className={cn('site-nav-bar', overHero ? 'is-on-hero' : 'is-on-page', scrolled && 'is-scrolled')}
          style={{ color: ink }}
        >
          <Link to="/" className="site-logo">
            <span className="site-logo-mark" aria-hidden="true">
              RT
            </span>
            <span className="site-logo-name">{profile.name}</span>
          </Link>
          <span className="site-nav-split" aria-hidden="true" />
          <DesktopNav inverted={overHero} />
          <Link to="/contact" className="site-nav-enquire">
            Enquire
          </Link>
          <button
            type="button"
            className="nav-link site-nav-menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
          <span className="site-nav-progress" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </motion.header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
