import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'outline' | 'ghost' | 'solid' | 'light'

type Common = {
  children: ReactNode
  className?: string
  variant?: Variant
  arrow?: boolean
}

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined
    href?: undefined
  }

type ButtonAsLink = Common & {
  to: string
  href?: undefined
}

type ButtonAsAnchor = Common & {
  href: string
  to?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const variants: Record<Variant, string> = {
  outline:
    'border border-charcoal/80 text-charcoal hover:bg-charcoal hover:text-ivory',
  ghost: 'text-current hover:text-gold',
  solid: 'bg-charcoal text-ivory hover:bg-ink',
  light: 'border border-ivory text-ivory hover:bg-ivory hover:text-ink',
}

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-1"
        />
      ) : null}
    </>
  )
}

export function Button(props: ButtonProps) {
  const { children, className, variant = 'outline', arrow = true } = props
  const classes = cn(
    'group inline-flex items-center gap-3 px-6 py-3 text-[0.72rem] font-medium tracking-[0.22em] uppercase transition-colors duration-500',
    variants[variant],
    className,
  )

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        <Inner arrow={arrow}>{children}</Inner>
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const external = props.href.startsWith('http')
    return (
      <a
        href={props.href}
        className={classes}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        <Inner arrow={arrow}>{children}</Inner>
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} onClick={buttonProps.onClick} disabled={buttonProps.disabled}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  )
}
