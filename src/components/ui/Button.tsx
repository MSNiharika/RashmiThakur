import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'
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

const looks: Record<Variant, CSSProperties> = {
  outline: {
    color: '#1A1815',
    backgroundColor: '#F4EFE6',
    border: '1px solid #1A1815',
  },
  ghost: {
    color: '#1A1815',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
  },
  solid: {
    color: '#F4EFE6',
    backgroundColor: '#1A1815',
    border: '1px solid #1A1815',
  },
  light: {
    color: '#F4EFE6',
    backgroundColor: 'transparent',
    border: '1px solid #F4EFE6',
  },
}

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow ? <ArrowRight aria-hidden="true" className="size-4 shrink-0" stroke="currentColor" /> : null}
    </>
  )
}

export function Button(props: ButtonProps) {
  const { children, className, variant = 'outline', arrow = true } = props
  const classes = cn(
    'inline-flex items-center gap-3 px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase no-underline',
    className,
  )
  const style = looks[variant]

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} style={style}>
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
        style={style}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <Inner arrow={arrow}>{children}</Inner>
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button
      type={buttonProps.type ?? 'button'}
      className={classes}
      style={style}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
    >
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  )
}
