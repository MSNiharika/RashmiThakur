import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { Cursor } from '@/components/ui/Cursor'
import { SkipLink } from '@/components/ui/SkipLink'
import type { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <Cursor />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
