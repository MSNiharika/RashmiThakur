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
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-[rgba(12,11,10,0.48)]" />
            <div className="relative flex h-full min-h-[72vh] flex-col justify-between p-8 lg:p-10">
              <p className="label text-gold-soft">{pillar.number}</p>
              <div>
                <h3 className="font-display text-5xl text-ivory lg:text-6xl">
                  {pillar.title}
                </h3>
                <div className="gold-rule mt-5 bg-gold-soft" />
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/90">
                  {pillar.description}
                </p>
                <ArrowUpRight aria-hidden="true" className="mt-6 size-6 text-ivory" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
