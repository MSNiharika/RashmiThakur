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
                'label relative pb-2 transition-colors duration-500',
              active
                ? 'text-charcoal after:absolute after:inset-x-0 after:bottom-0 after:h-px after:scale-x-100 after:bg-gold after:transition-transform after:duration-500'
                : 'text-stone after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:text-charcoal hover:after:scale-x-100',
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
