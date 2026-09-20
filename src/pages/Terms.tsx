import { Container } from '@/components/ui/Container'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { seo } from '@/data/site'
import { profile } from '@/data/profile'

export default function Terms() {
  return (
    <>
      <Meta meta={seo.terms} />
      <PageHero kicker="Legal" title="Terms" />
      <section className="bg-ivory pb-24">
        <Container className="max-w-3xl space-y-6 text-charcoal">
          <p>
            Content on this website is presented for public information about
            the work of {profile.name}. Photographs and text remain the property
            of their respective owners.
          </p>
          <p>
            Photographs on this site are used with the understanding that
            they depict Rashmi Thakur in public, editorial or professional
            settings. Rights remain with their respective owners.
          </p>
          <p>
            External links are provided for reference and open on third-party
            sites. These terms should be reviewed with counsel before public
            launch.
          </p>
        </Container>
      </section>
    </>
  )
}
