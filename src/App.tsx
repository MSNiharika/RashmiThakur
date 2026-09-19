import { Layout } from '@/components/layout/Layout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Handloom from '@/pages/Handloom'
import Home from '@/pages/Home'
import Impact from '@/pages/Impact'
import Journey from '@/pages/Journey'
import Leadership from '@/pages/Leadership'
import Media from '@/pages/Media'
import NotFound from '@/pages/NotFound'
import Portfolio from '@/pages/Portfolio'
import Privacy from '@/pages/Privacy'
import Recognition from '@/pages/Recognition'
import Terms from '@/pages/Terms'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/handloom" element={<Handloom />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/media" element={<Media />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
