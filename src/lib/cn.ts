import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}

export function formatYear(year: string | null) {
  return year ?? '—'
}

export function isExternalUrl(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function youtubeEmbed(url: string) {
  const idMatch = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/,
  )
  return idMatch ? `https://www.youtube-nocookie.com/embed/${idMatch[1]}` : null
}

export function vimeoEmbed(url: string) {
  const idMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  return idMatch ? `https://player.vimeo.com/video/${idMatch[1]}` : null
}
