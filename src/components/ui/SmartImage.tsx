import { cn } from '@/lib/cn'
import { useEffect, useState, type ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string
}

export function SmartImage({
  src,
  alt,
  className,
  fallbackLabel = 'Image to be added',
  loading = 'lazy',
  ...props
}: Props) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  if (!src || failed) {
    return (
      <div
        className={cn(
          'flex h-full min-h-48 w-full items-center justify-center bg-sand text-center',
          className,
        )}
        role="img"
        aria-label={alt || fallbackLabel}
      >
        <span className="label px-6 text-stone">{fallbackLabel}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt ?? ''}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
