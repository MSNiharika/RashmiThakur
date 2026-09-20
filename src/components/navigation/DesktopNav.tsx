import { navigation } from '@/data/site'
import { cn } from '@/lib/cn'
import { NavLink } from 'react-router-dom'

export function DesktopNav({ inverted = false }: { inverted?: boolean }) {
  return (
    <nav aria-label="Primary" className="site-nav-desktop" data-inverted={inverted ? 'true' : 'false'}>
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) => cn('site-nav-item', isActive && 'is-active')}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
