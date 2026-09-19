import { FadeIn } from '@/components/animation/FadeIn'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const points = [
  { id: 'india', label: 'India', detail: 'Home, heritage and handloom' },
  { id: 'malaysia', label: 'Malaysia', detail: 'Miss Asia International, 2016' },
  { id: 'platforms', label: 'International Platforms', detail: 'Beauty, culture and public presence' },
  { id: 'dialogue', label: 'Global Dialogue', detail: 'Peace, leadership and humanitarian conversation' },
]

export function GlobalPresence() {
  return (
    <section className="bg-ivory-soft py-24 lg:py-32">
      <Container>
        <SectionHeading kicker="08 — Presence" title="Global Presence" />
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-sand">
              <svg
                viewBox="0 0 800 500"
                className="h-full w-full"
                role="img"
                aria-label="Decorative map marking India and Malaysia"
              >
                <rect width="800" height="500" fill="#E7DFD0" />
                <g fill="none" stroke="#9C8456" strokeOpacity="0.35" strokeWidth="1">
                  <ellipse cx="400" cy="250" rx="280" ry="150" />
                  <ellipse cx="400" cy="250" rx="210" ry="110" />
                  <path d="M80 250 C 220 80, 580 80, 720 250 C 580 420, 220 420, 80 250" />
                </g>
                <circle cx="545" cy="250" r="6" fill="#9C8456" />
                <circle cx="575" cy="278" r="4" fill="#1A1815" />
                <path d="M545 250 C 555 255, 565 268, 575 278" stroke="#1A1815" strokeWidth="1" fill="none" />
                <text x="510" y="228" fill="#1A1815" fontFamily="Georgia, serif" fontSize="18">
                  India
                </text>
                <text x="584" y="300" fill="#1A1815" fontFamily="Georgia, serif" fontSize="14">
                  Malaysia
                </text>
              </svg>
            </div>
          </FadeIn>
          <div className="lg:col-span-5">
            <ul className="divide-y divide-charcoal/10">
              {points.map((point, index) => (
                <FadeIn key={point.id} delay={index * 0.08}>
                  <li className="py-5">
                    <p className="label text-gold">0{index + 1}</p>
                    <h3 className="mt-2 font-serif text-3xl">{point.label}</h3>
                    <p className="mt-2 text-stone">{point.detail}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
