import { navigation } from '@/data/site'
import { cn } from '@/lib/cn'
import { NavLink } from 'react-router-dom'

export function DesktopNav({ inverted = false }: { inverted?: boolean }) {
  return (
    <nav
      aria-label="Primary"
      className="hidden items-center gap-7 lg:flex"
      style={{ color: inverted ? '#F4EFE6' : '#1A1815' }}
    >
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) =>
            cn(
              'editorial-underline label py-1 text-current transition-opacity duration-300',
              isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100',
            )
          }
        >
          {({ isActive }) => (
            <span className={isActive ? 'border-b border-current pb-0.5' : ''}>
              {item.label}
            </span>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
