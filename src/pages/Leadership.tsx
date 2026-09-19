import { LeadershipSection } from '@/components/sections/LeadershipSection'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { seo } from '@/data/site'

export default function Leadership() {
  return (
    <>
      <Meta meta={seo.leadership} />
      <PageHero
        kicker="Leadership"
        title="Offices of service"
        description="President of the World Women Federation. Board Director at the Dr. Kalam Smriti International Governing Council, Kerala, India."
      />
      <LeadershipSection />
    </>
  )
}
