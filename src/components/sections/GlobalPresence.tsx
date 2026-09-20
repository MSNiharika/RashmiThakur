import { FadeIn } from '@/components/animation/FadeIn'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SmartImage } from '@/components/ui/SmartImage'

const locations = [
  {
    id: 'india',
    label: 'India',
    detail: 'Home, heritage and handloom',
    src: '/images/photos/014.jpg',
    alt: 'Rashmi Thakur in a magenta handloom saree in India',
    focus: 'center 32%',
  },
  {
    id: 'malaysia',
    label: 'Malaysia',
    detail: 'Kuala Lumpur · Miss Asia International',
    src: '/images/photos/090.jpg',
    alt: 'Rashmi Thakur before the Petronas Towers in Kuala Lumpur',
    focus: 'center 22%',
  },
  {
    id: 'paris',
    label: 'Paris',
    detail: 'France · international presence',
    src: '/images/photos/099.jpg',
    alt: 'Rashmi Thakur in Paris, photographed against a Haussmann building',
    focus: 'center 18%',
  },
  {
    id: 'cannes',
    label: 'Cannes',
    detail: 'Festival de Cannes · France',
    src: '/images/photos/021.jpg',
    alt: 'Rashmi Thakur on the red carpet at the Cannes Film Festival',
    focus: 'center 16%',
  },
  {
    id: 'giza',
    label: 'Giza',
    detail: 'Pyramids of Giza · Cairo, Egypt',
    src: '/images/photos/039.jpg',
    alt: 'Rashmi Thakur at the Pyramids of Giza',
    focus: 'center 28%',
  },
  {
    id: 'sri-lanka',
    label: 'Sri Lanka',
    detail: 'International platforms and presence',
    src: '/images/photos/091.jpg',
    alt: 'Rashmi Thakur in Sri Lanka, with Colombo’s skyline behind her',
    focus: 'center 20%',
  },
]

export function GlobalPresence() {
  return (
    <section className="bg-ivory-soft py-24 lg:py-32">
      <Container>
        <SectionHeading
          kicker="08 — Presence"
          title="Global Presence"
          description="From India to Malaysia, France, Egypt and Sri Lanka — a path photographed across continents."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((place, index) => (
            <FadeIn key={place.id} delay={index * 0.06}>
              <article className="group relative isolate aspect-[4/5] overflow-hidden bg-sand">
                <SmartImage
                  src={place.src}
                  alt={place.alt}
                  focus={place.focus}
                  className="ken-burns h-full w-full object-cover"
                />
                <div className="media-veil" />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <p className="label text-gold-soft">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-4xl text-ivory lg:text-5xl">{place.label}</h3>
                  <div className="gold-rule mt-4 bg-gold-soft" />
                  <p className="mt-3 text-sm text-ivory/90">{place.detail}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
