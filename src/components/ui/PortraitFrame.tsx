import { cn } from '@/lib/cn'
import { SmartImage } from '@/components/ui/SmartImage'

type Props = {
  src: string
  alt?: string
  focus?: string
  className?: string
}

/** Portrait photos stay 2:3 so heads are not cropped into landscape frames. */
export function PortraitFrame({ src, alt = '', focus = 'center 40%', className }: Props) {
  return (
    <div
      className={cn(
        'group relative mx-auto w-full max-w-[min(100%,26rem)] overflow-hidden bg-sand',
        className,
      )}
      style={{ aspectRatio: '2 / 3' }}
    >
      <SmartImage
        src={src}
        alt={alt}
        focus={focus}
        className="ken-burns absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}
