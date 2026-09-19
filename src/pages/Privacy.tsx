import { Container } from '@/components/ui/Container'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { seo } from '@/data/site'
import { profile } from '@/data/profile'

export default function Privacy() {
  return (
    <>
      <Meta meta={seo.privacy} />
      <PageHero kicker="Legal" title="Privacy Policy" />
      <section className="bg-ivory pb-24">
        <Container className="max-w-3xl space-y-6 text-stone">
          <p>
            This website is a static presentation of {profile.name}’s public
            professional work. It does not operate user accounts and does not
            store form submissions on a server.
          </p>
          <p>
            If you send a message through the contact form, the contents may be
            transferred via your email client or a configured third-party form
            service. Do not include sensitive personal data.
          </p>
          <p>
            Standard server or hosting logs may be collected by the deployment
            provider. This policy should be reviewed with counsel before public
            launch.
          </p>
        </Container>
      </section>
    </>
  )
}
