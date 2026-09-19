import { Container } from '@/components/ui/Container'

export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description?: string
}) {
  return (
    <header className="bg-ivory pt-32 pb-12 lg:pt-40 lg:pb-16">
      <Container>
        <p className="label text-gold">{kicker}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-8 max-w-2xl text-lg text-stone">{description}</p>
        ) : null}
      </Container>
    </header>
  )
}
