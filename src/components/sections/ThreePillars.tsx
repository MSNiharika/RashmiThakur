import { SmartImage } from '@/components/ui/SmartImage'
import { pillars } from '@/data/impact'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ThreePillars() {
  return (
    <section className="bg-charcoal">
      <div className="grid lg:grid-cols-3">
        {pillars.map((pillar) => (
          <Link
            key={pillar.id}
            to={pillar.href}
            className="group relative isolate min-h-[72vh] overflow-hidden border-t border-ivory/10 lg:border-t-0 lg:border-l lg:first:border-l-0"
          >
            <SmartImage
              src={pillar.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[rgba(12,11,10,0.48)] transition-colors duration-500 group-hover:bg-[rgba(12,11,10,0.38)]" />
            <div className="relative flex h-full min-h-[72vh] flex-col justify-between p-8 lg:p-10">
              <p className="label text-gold-soft">{pillar.number}</p>
              <div>
                <h3 className="font-serif text-5xl text-ivory lg:text-6xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/75 transition-transform duration-500 group-hover:translate-x-1">
                  {pillar.description}
                </p>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-6 size-6 text-ivory transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
