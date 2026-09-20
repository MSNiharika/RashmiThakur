import { cn } from '@/lib/cn'
import { useEffect, useState, type ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string
  /** Override automatic object-position, e.g. "center 32%" */
  focus?: string
}

function positionForSize(width: number, height: number) {
  if (width > height * 1.12) return 'center center'
  return 'center 28%'
}

export function SmartImage({
  src,
  alt,
  className,
  fallbackLabel = 'Image to be added',
  loading = 'lazy',
  style,
  onLoad,
  focus,
  ...props
}: Props) {
  const [failed, setFailed] = useState(false)
  const [objectPosition, setObjectPosition] = useState(focus ?? 'center 28%')

  useEffect(() => {
    setFailed(false)
    setObjectPosition(focus ?? 'center 28%')
  }, [src, focus])

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
      className={cn('origin-top object-cover', className)}
      style={{ objectPosition, ...style }}
      onLoad={(event) => {
        if (!focus) {
          const { naturalWidth, naturalHeight } = event.currentTarget
          if (naturalWidth && naturalHeight) {
            setObjectPosition(positionForSize(naturalWidth, naturalHeight))
          }
        }
        onLoad?.(event)
      }}
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
