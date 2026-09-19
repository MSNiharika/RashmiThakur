import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Meta } from '@/components/ui/Meta'
import { seo } from '@/data/site'

export default function NotFound() {
  return (
    <>
      <Meta
        meta={{
          ...seo.home,
          path: '/404',
          title: 'Page not found — Rashmi Thakur',
          description: 'The page you are looking for is not available.',
        }}
      />
      <section className="flex min-h-[80vh] items-center bg-ivory pt-32">
        <Container>
          <p className="label text-gold">404</p>
          <h1 className="mt-4 font-serif text-5xl sm:text-7xl">This page is not here.</h1>
          <p className="mt-6 max-w-xl text-stone">
            The address may have changed. Return home, or continue through the
            journey, portfolio or contact pages.
          </p>
          <div className="mt-10">
            <Button to="/">Return home</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
