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
        <Container className="max-w-3xl space-y-6 text-stone">
          <p>
            Content on this website is presented for public information about
            the work of {profile.name}. Photographs and text remain the property
            of their respective owners.
          </p>
          <p>
            Placeholder images are temporary design assets and are not
            photographs of the subject. They will be replaced with authorised
            photography.
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
