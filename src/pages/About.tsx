import { FadeIn } from '@/components/animation/FadeIn'
import { ImageReveal } from '@/components/animation/ImageReveal'
import { ContactSection } from '@/components/sections/ContactSection'
import { Container } from '@/components/ui/Container'
import { Meta } from '@/components/ui/Meta'
import { PageHero } from '@/components/ui/PageHero'
import { SmartImage } from '@/components/ui/SmartImage'
import { aboutSectionImages } from '@/data/images'
import { profile } from '@/data/profile'
import { seo } from '@/data/site'

const sections = [
  {
    title: 'Introduction',
    image: aboutSectionImages[0].src,
    body: profile.biography[0],
  },
  {
    title: 'Professional journey',
    image: aboutSectionImages[1].src,
    body: profile.biography[2],
  },
  {
    title: 'Social impact',
    image: aboutSectionImages[2].src,
    body: profile.biography[1],
  },
  {
    title: "Women's leadership",
    image: aboutSectionImages[3].src,
    body: profile.biography[3],
  },
  {
    title: 'Cultural advocacy',
    image: aboutSectionImages[4].src,
    body: 'Her public work treats culture as a living language — a way of representing India with dignity, continuity and care.',
  },
  {
    title: 'Handloom',
    image: aboutSectionImages[5].src,
    body: profile.biography[4],
  },
  {
    title: 'International journey',
    image: aboutSectionImages[6].src,
    body: 'From national titles to an international stage in Malaysia, the pageant years became a passage — not a destination — toward a broader public role.',
  },
]

export default function About() {
  return (
    <>
      <Meta meta={seo.about} includePerson />
      <PageHero
        kicker="About"
        title="A journey beyond the crown"
        description={profile.shortBio}
      />
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 === 0 ? 'bg-ivory' : 'bg-ivory-soft'}
        >
          <Container className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16">
            <ImageReveal className={index % 2 === 1 ? 'lg:col-span-6 lg:col-start-7' : 'lg:col-span-6'}>
              <SmartImage
                src={section.image}
                alt=""
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </ImageReveal>
            <FadeIn
              className={
                index % 2 === 1
                  ? 'lg:col-span-5 lg:col-start-1 lg:row-start-1'
                  : 'lg:col-span-5'
              }
            >
              <p className="label text-gold">0{index + 1}</p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{section.title}</h2>
              <p className="mt-6 font-serif italic text-xl leading-relaxed text-charcoal">{section.body}</p>
            </FadeIn>
          </Container>
        </section>
      ))}
      <ContactSection />
    </>
  )
}
