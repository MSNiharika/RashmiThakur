import { configuredSocials, navigation, site } from '@/data/site'
import { profile } from '@/data/profile'
import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-20">
        <div className="lg:col-span-5">
          <p className="font-serif text-3xl">{profile.name}</p>
          <p className="label mt-6 text-gold">{profile.primaryTitle}</p>
          <ul className="mt-3 space-y-1 text-sm text-stone">
            {profile.secondaryTitles.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer" className="lg:col-span-4">
          <p className="label mb-5 text-gold">Navigate</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="editorial-underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/recognition" className="editorial-underline">
                Recognition
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:col-span-3">
          <p className="label mb-5 text-gold">Connect</p>
          <ul className="space-y-2 text-sm">
            {configuredSocials.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {site.email ? (
              <li>
                <a href={`mailto:${site.email}`} className="editorial-underline">
                  Email
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="border-t border-charcoal/10">
        <div className="mx-auto flex max-w-page flex-col gap-3 px-5 py-6 text-xs tracking-wide text-stone sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {year} {profile.name}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="editorial-underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="editorial-underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
