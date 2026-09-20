import { ContactSection } from '@/components/sections/ContactSection'
import { Button } from '@/components/ui/Button'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { configuredSocials, seo, site } from '@/data/site'

export default function Contact() {
  return (
    <>
      <Meta meta={seo.contact} />
      <PageHero
        compact
        kicker="Contact"
        title="Let's create impact"
        description="Collaborations, speaking engagements, brand partnerships, humanitarian initiatives, cultural programmes and media inquiries."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button href="#contact-form" variant="outline">
            Start a conversation
          </Button>
          {site.email ? (
            <Button href={`mailto:${site.email}`} variant="ghost">
              Email
            </Button>
          ) : null}
        </div>
        {configuredSocials.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
          </ul>
        ) : null}
      </PageHero>
      <ContactSection showHeading={false} hideIntro />
    </>
  )
}
