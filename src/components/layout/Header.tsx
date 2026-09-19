import { DesktopNav } from '@/components/navigation/DesktopNav'
import { MobileMenu } from '@/components/navigation/MobileMenu'
import { profile } from '@/data/profile'
import { cn } from '@/lib/cn'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const overHero = pathname === '/' && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    setOpen(false)
    setScrolled(window.scrollY > 12)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-[background,border-color,backdrop-filter] duration-500',
          scrolled || open
            ? 'border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md'
            : overHero
              ? 'border-b border-white/20 bg-black/55 backdrop-blur-sm'
              : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-[var(--header-h)] max-w-page items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="font-serif text-lg tracking-[0.18em] uppercase sm:text-xl"
            style={{ color: overHero ? '#F4EFE6' : '#1A1815' }}
          >
            {profile.name}
          </Link>
          <DesktopNav inverted={overHero} />
          <button
            type="button"
            className="label lg:hidden"
            style={{ color: overHero ? '#F4EFE6' : '#1A1815' }}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
