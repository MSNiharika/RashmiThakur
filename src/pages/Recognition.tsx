import { AwardList } from '@/components/sections/AwardList'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { seo } from '@/data/site'

export default function Recognition() {
  return (
    <>
      <Meta meta={seo.recognition} />
      <PageHero
        kicker="Recognition"
        title="Honours"
        description="Awards and distinctions listed with dates only where they are known."
      />
      <AwardList />
    </>
  )
}
