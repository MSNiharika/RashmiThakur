import { ImageReveal } from '@/components/animation/ImageReveal'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SmartImage } from '@/components/ui/SmartImage'
import { useLeadership } from '@/hooks/useLeadership'

export function LeadershipSection({ preview = false }: { preview?: boolean }) {
  const { roles } = useLeadership()

  return (
    <section className="bg-charcoal text-ivory">
      <div className="grid lg:grid-cols-2">
        {roles.map((role, index) => (
          <article
            key={role.id}
            className={`relative min-h-[70vh] overflow-hidden ${index === 1 ? 'bg-ivory text-charcoal' : ''}`}
          >
            <ImageReveal className="absolute inset-0 opacity-40">
              <SmartImage
                src={role.image}
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </ImageReveal>
            <div
              className={`absolute inset-0 ${index === 1 ? 'bg-[rgba(251,248,242,0.72)]' : 'bg-[rgba(12,11,10,0.58)]'}`}
            />
            <Container className="relative flex min-h-[70vh] flex-col justify-end py-16">
              {index === 0 ? (
                <SectionHeading
                  kicker={preview ? '06 — Leadership' : 'Office'}
                  title="Leadership"
                  light={index === 0}
                  className="mb-16"
                />
              ) : (
                <p className="label mb-16 text-gold">Office</p>
              )}
              <p className="label text-gold">{role.position}</p>
              <h3 className="mt-4 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
                {role.organization}
              </h3>
              {role.location ? (
                <p className="mt-3 text-sm tracking-wide opacity-70">{role.location}</p>
              ) : null}
              <p className="mt-6 max-w-md font-serif italic text-lg leading-relaxed">
                {role.summary}
              </p>
              {role.focus.length > 0 ? (
                <ul className="mt-6 space-y-1 text-sm opacity-80">
                  {role.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </Container>
          </article>
        ))}
      </div>
      {preview ? (
        <div className="border-t border-ivory/10 px-5 py-10 sm:px-8 lg:px-12">
          <Button to="/leadership" variant="light">
            Explore leadership
          </Button>
        </div>
      ) : null}
    </section>
  )
}
