import { AwardList } from '@/components/sections/AwardList'
import { BeyondTheCrown } from '@/components/sections/BeyondTheCrown'
import { ContactSection } from '@/components/sections/ContactSection'
import { GlobalPresence } from '@/components/sections/GlobalPresence'
import { HandloomSection } from '@/components/sections/HandloomSection'
import { Hero } from '@/components/sections/Hero'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { JourneyPreview } from '@/components/sections/JourneyPreview'
import { LeadershipSection } from '@/components/sections/LeadershipSection'
import { MediaSection } from '@/components/sections/MediaSection'
import { PortfolioPreview } from '@/components/sections/PortfolioPreview'
import { QuoteSection } from '@/components/sections/QuoteSection'
import { ThreePillars } from '@/components/sections/ThreePillars'
import { Meta } from '@/components/ui/Meta'
import { seo } from '@/data/site'

export default function Home() {
  return (
    <>
      <Meta meta={seo.home} includePerson />
      <Hero />
      <BeyondTheCrown />
      <ThreePillars />
      <JourneyPreview />
      <ImpactSection preview />
      <LeadershipSection preview />
      <HandloomSection preview />
      <GlobalPresence />
      <PortfolioPreview />
      <AwardList preview />
      <MediaSection preview />
      <QuoteSection />
      <ContactSection preview />
    </>
  )
}
