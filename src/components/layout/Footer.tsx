import { Button } from '@/components/ui/Button'
import { configuredSocials, navigation, site } from '@/data/site'
import { profile } from '@/data/profile'
import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()
  const titles = profile.primaryTitle
    .split('|')
    .map((title) => title.trim())
    .filter(Boolean)

  return (
    <footer className="site-footer bg-charcoal font-sans text-ivory">
      <div className="mx-auto max-w-page px-5 pt-20 pb-12 sm:px-8 lg:px-12 lg:pt-28">
        <p className="font-display whitespace-nowrap text-5xl leading-none tracking-[-0.02em] text-ivory sm:text-6xl lg:text-7xl">
          {profile.name}
        </p>
        <div className="gold-rule mt-8" />

        <ul className="mt-10 space-y-1">
          {titles.map((title) => (
            <li key={title} className="font-serif text-2xl italic tracking-wide text-gold sm:text-3xl">
              {title}
            </li>
          ))}
        </ul>

        <p className="font-quote mt-10 max-w-xl text-2xl leading-snug text-ivory/80 sm:text-3xl">
          {profile.supportingMessage.join(' ')}
        </p>

        <div className="mt-16 grid gap-12 border-t border-ivory/15 pt-12 lg:grid-cols-12 lg:gap-8">
          <nav aria-label="Footer" className="lg:col-span-5">
            <p className="label mb-6 text-gold">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="editorial-underline font-serif text-xl italic tracking-wide text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/recognition" className="editorial-underline font-serif text-xl italic tracking-wide text-ivory">
                  Recognition
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="label mb-6 text-gold">Connect</p>
            <ul className="space-y-3">
              {configuredSocials.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-underline font-serif text-xl italic tracking-wide text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {site.email ? (
                <li>
                  <a href={`mailto:${site.email}`} className="editorial-underline font-serif text-xl italic text-ivory">
                    Email
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="label mb-6 text-gold">Enquire</p>
            <p className="font-quote max-w-xs text-2xl leading-snug text-ivory/85">
              Partnerships, platforms and conversations that carry the work forward.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="light">
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/12">
        <div className="mx-auto flex max-w-page flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="text-sm tracking-wide text-ivory/50">
            © {year} {profile.name}
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="editorial-underline nav-link text-ivory/55">
              Privacy Policy
            </Link>
            <Link to="/terms" className="editorial-underline nav-link text-ivory/55">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
