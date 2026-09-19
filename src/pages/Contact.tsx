import { ContactSection } from '@/components/sections/ContactSection'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { seo } from '@/data/site'

export default function Contact() {
  return (
    <>
      <Meta meta={seo.contact} />
      <PageHero
        kicker="Contact"
        title="Let's create impact"
        description="Collaborations, speaking engagements, brand partnerships, humanitarian initiatives, cultural programmes and media inquiries."
      />
      <ContactSection showHeading={false} />
    </>
  )
}
