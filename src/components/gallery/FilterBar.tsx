import { cn } from '@/lib/cn'

type Filter = { id: string; label: string }

export function FilterBar({
  items,
  value,
  onChange,
  label,
}: {
  items: Filter[]
  value: string
  onChange: (id: string) => void
  label: string
}) {
  return (
    <div className="no-scrollbar -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0" role="tablist" aria-label={label}>
      <div className="flex min-w-max gap-6">
        {items.map((item) => {
          const active = item.id === value
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(item.id)}
              className={cn(
                'label pb-2 transition-colors',
                active
                  ? 'border-b border-gold text-charcoal'
                  : 'border-b border-transparent text-stone hover:text-charcoal',
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
