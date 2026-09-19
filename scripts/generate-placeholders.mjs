import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const project = join(dirname(fileURLToPath(import.meta.url)), '..')
const root = join(project, 'public/images')
const assets = join(project, 'src/assets/images')

const palettes = {
  ivory: { bg: '#EDE6D8', fg: '#1A1815', accent: '#9C8456', mid: '#C4B496', ink: '#3A342C' },
  dark: { bg: '#141210', fg: '#F4EFE6', accent: '#C4B28A', mid: '#3A342C', ink: '#D8D1C3' },
  earth: { bg: '#C9B39A', fg: '#1A1815', accent: '#6F5240', mid: '#A78B70', ink: '#3A2A20' },
  sand: { bg: '#D8CDB8', fg: '#1A1815', accent: '#9C8456', mid: '#B7A48A', ink: '#3A342C' },
  blush: { bg: '#E4D3C4', fg: '#1A1815', accent: '#8A6A55', mid: '#C4A890', ink: '#3A2A24' },
  mist: { bg: '#D4CFC4', fg: '#1A1815', accent: '#7A746A', mid: '#B4AFA4', ink: '#2C2A26' },
  gold: { bg: '#C4B08A', fg: '#1A1815', accent: '#5C4A2E', mid: '#A89068', ink: '#2C2418' },
}

function ikatPattern(id, color, opacity = 0.18) {
  return `
    <pattern id="${id}" width="48" height="72" patternUnits="userSpaceOnUse">
      <path d="M24 0 L36 18 L24 36 L12 18 Z M24 36 L36 54 L24 72 L12 54 Z" fill="${color}" fill-opacity="${opacity}"/>
      <path d="M0 18 L12 36 L0 54 L-12 36 Z M48 18 L60 36 L48 54 L36 36 Z" fill="${color}" fill-opacity="${opacity * 0.7}"/>
    </pattern>`
}

function grain(id, color) {
  return `
    <filter id="${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.04"/>
      </feComponentTransfer>
    </filter>`
}

function frame({
  width,
  height,
  palette,
  kicker,
  title,
  note = 'Photograph to be added',
  variant = 'light',
}) {
  const p = palettes[palette]
  const pid = `p${Math.random().toString(36).slice(2, 8)}`
  const gid = `g${Math.random().toString(36).slice(2, 8)}`
  const fid = `f${Math.random().toString(36).slice(2, 8)}`
  const isDark = variant === 'dark' || palette === 'dark'
  const titleSize = width > 900 ? 56 : width > 600 ? 42 : 32
  const kickerSize = 11

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${title} placeholder">
  <defs>
    ${ikatPattern(pid, p.accent)}
    ${grain(fid)}
    <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${p.bg}"/>
      <stop offset="55%" stop-color="${p.mid}"/>
      <stop offset="100%" stop-color="${p.bg}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#${gid})"/>
  <rect width="100%" height="100%" fill="url(#${pid})"/>
  ${isDark ? '' : `<rect width="100%" height="100%" filter="url(#${fid})" opacity="0.25"/>`}
  <rect x="36" y="36" width="${width - 72}" height="${height - 72}" fill="none" stroke="${p.accent}" stroke-opacity="0.55" stroke-width="1"/>
  <line x1="${width * 0.18}" y1="${height * 0.42}" x2="${width * 0.82}" y2="${height * 0.42}" stroke="${p.accent}" stroke-opacity="0.35"/>
  <text x="${width / 2}" y="${height * 0.36}" text-anchor="middle" fill="${p.accent}" font-family="Georgia, serif" font-size="${kickerSize}" letter-spacing="6">${kicker.toUpperCase()}</text>
  <text x="${width / 2}" y="${height * 0.5}" text-anchor="middle" fill="${p.fg}" font-family="Georgia, 'Times New Roman', serif" font-size="${titleSize}" font-style="italic">${escapeXml(title)}</text>
  <text x="${width / 2}" y="${height * 0.62}" text-anchor="middle" fill="${p.ink}" font-family="Helvetica, Arial, sans-serif" font-size="12" letter-spacing="3">${note.toUpperCase()}</text>
  ${isDark ? '' : ''}
</svg>`
}

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function write(rel, svg) {
  const publicPath = join(root, rel)
  const assetPath = join(assets, rel)
  mkdirSync(dirname(publicPath), { recursive: true })
  mkdirSync(dirname(assetPath), { recursive: true })
  writeFileSync(publicPath, svg)
  writeFileSync(assetPath, svg)
}

const files = [
  ['hero/hero.svg', frame({ width: 1920, height: 1080, palette: 'dark', kicker: 'Portrait', title: 'Photograph', note: 'Hero photograph to be added', variant: 'dark' })],
  ['about/portrait.svg', frame({ width: 1200, height: 1600, palette: 'sand', kicker: 'Portrait', title: 'About' })],
  ['about/beyond.svg', frame({ width: 1200, height: 1500, palette: 'earth', kicker: 'Portrait', title: 'Beyond the Crown' })],
  ['pillars/peace.svg', frame({ width: 900, height: 1200, palette: 'mist', kicker: '01', title: 'Peace' })],
  ['pillars/women.svg', frame({ width: 900, height: 1200, palette: 'blush', kicker: '02', title: 'Women' })],
  ['pillars/heritage.svg', frame({ width: 900, height: 1200, palette: 'earth', kicker: '03', title: 'Heritage' })],
  ['impact/peace.svg', frame({ width: 1400, height: 900, palette: 'mist', kicker: 'Impact', title: 'Global Peace' })],
  ['impact/women.svg', frame({ width: 1400, height: 900, palette: 'blush', kicker: 'Impact', title: 'Women' })],
  ['impact/community.svg', frame({ width: 1400, height: 900, palette: 'sand', kicker: 'Impact', title: 'Community' })],
  ['impact/artisan.svg', frame({ width: 1400, height: 900, palette: 'earth', kicker: 'Impact', title: 'Artisan Welfare' })],
  ['impact/mental-health.svg', frame({ width: 1400, height: 900, palette: 'ivory', kicker: 'Impact', title: 'Mental Health' })],
  ['impact/heritage.svg', frame({ width: 1400, height: 900, palette: 'gold', kicker: 'Impact', title: 'Heritage' })],
  ['leadership/world-women-federation.svg', frame({ width: 1200, height: 1500, palette: 'dark', kicker: 'Leadership', title: 'World Women Federation', variant: 'dark' })],
  ['leadership/kalam-smriti.svg', frame({ width: 1200, height: 1500, palette: 'ivory', kicker: 'Leadership', title: 'Kalam Smriti' })],
  ['handloom/hero.svg', frame({ width: 1920, height: 1100, palette: 'earth', kicker: 'Heritage', title: 'Indian Handloom' })],
  ['handloom/intro.svg', frame({ width: 1400, height: 900, palette: 'earth', kicker: 'Handloom', title: 'Introduction' })],
  ['handloom/craft.svg', frame({ width: 1400, height: 900, palette: 'gold', kicker: 'Handloom', title: 'Indian Handloom' })],
  ['handloom/telangana.svg', frame({ width: 1400, height: 900, palette: 'sand', kicker: 'Handloom', title: 'Telangana' })],
  ['handloom/artisans.svg', frame({ width: 1400, height: 900, palette: 'blush', kicker: 'Handloom', title: 'Artisan Communities' })],
  ['handloom/heritage.svg', frame({ width: 1400, height: 900, palette: 'ivory', kicker: 'Handloom', title: 'Cultural Heritage' })],
  ['handloom/livelihoods.svg', frame({ width: 1400, height: 900, palette: 'mist', kicker: 'Handloom', title: 'Livelihoods' })],
  ['handloom/gallery-01.svg', frame({ width: 1000, height: 1250, palette: 'earth', kicker: 'Gallery', title: 'Textile' })],
  ['handloom/gallery-02.svg', frame({ width: 1000, height: 1000, palette: 'gold', kicker: 'Gallery', title: 'Artisan' })],
  ['handloom/gallery-03.svg', frame({ width: 1000, height: 1400, palette: 'sand', kicker: 'Gallery', title: 'Telangana' })],
  ['handloom/gallery-04.svg', frame({ width: 1000, height: 1200, palette: 'blush', kicker: 'Gallery', title: 'Heritage' })],
  ['statement/statement.svg', frame({ width: 1920, height: 1080, palette: 'dark', kicker: 'Statement', title: 'Leadership', variant: 'dark' })],
  ['presence/map.svg', frame({ width: 1600, height: 900, palette: 'ivory', kicker: 'Presence', title: 'India · Malaysia' })],
  ['portfolio/editorial-01.svg', frame({ width: 900, height: 1200, palette: 'dark', kicker: 'Editorial', title: 'Portrait', variant: 'dark' })],
  ['portfolio/fashion-01.svg', frame({ width: 900, height: 1125, palette: 'sand', kicker: 'Fashion', title: 'Study' })],
  ['portfolio/beauty-01.svg', frame({ width: 1000, height: 1000, palette: 'blush', kicker: 'Beauty', title: 'Beauty' })],
  ['portfolio/pageants-01.svg', frame({ width: 900, height: 1350, palette: 'gold', kicker: 'Pageants', title: 'Stage' })],
  ['portfolio/cultural-01.svg', frame({ width: 900, height: 1125, palette: 'earth', kicker: 'Cultural', title: 'Presence' })],
  ['portfolio/international-01.svg', frame({ width: 1600, height: 900, palette: 'mist', kicker: 'International', title: 'Platform' })],
  ['portfolio/social-01.svg', frame({ width: 1400, height: 1050, palette: 'ivory', kicker: 'Impact', title: 'Community' })],
  ['portfolio/leadership-01.svg', frame({ width: 900, height: 1200, palette: 'dark', kicker: 'Leadership', title: 'Presence', variant: 'dark' })],
  ['portfolio/handloom-01.svg', frame({ width: 900, height: 1125, palette: 'earth', kicker: 'Handloom', title: 'Textile' })],
  ['portfolio/fashion-02.svg', frame({ width: 900, height: 1350, palette: 'ivory', kicker: 'Fashion', title: 'Silhouette' })],
  ['portfolio/editorial-02.svg', frame({ width: 1600, height: 900, palette: 'dark', kicker: 'Editorial', title: 'Movement', variant: 'dark' })],
  ['portfolio/beauty-02.svg', frame({ width: 900, height: 1125, palette: 'blush', kicker: 'Beauty', title: 'Detail' })],
  ['portfolio/pageants-02.svg', frame({ width: 900, height: 1200, palette: 'gold', kicker: 'Pageants', title: 'Portrait' })],
  ['portfolio/handloom-02.svg', frame({ width: 1000, height: 1000, palette: 'sand', kicker: 'Handloom', title: 'Heritage' })],
  ['portfolio/cultural-02.svg', frame({ width: 900, height: 1200, palette: 'earth', kicker: 'Cultural', title: 'Heritage' })],
  ['portfolio/international-02.svg', frame({ width: 900, height: 1125, palette: 'mist', kicker: 'International', title: 'Malaysia' })],
  ['media/the-hindu.svg', frame({ width: 1400, height: 900, palette: 'ivory', kicker: 'Press', title: 'The Hindu' })],
  ['media/ragalahari.svg', frame({ width: 1400, height: 900, palette: 'sand', kicker: 'Events', title: 'IKAT Mela' })],
  ['media/interviews.svg', frame({ width: 1400, height: 900, palette: 'mist', kicker: 'Media', title: 'Interviews' })],
  ['media/magazines.svg', frame({ width: 1400, height: 900, palette: 'blush', kicker: 'Media', title: 'Magazines' })],
  ['media/tv.svg', frame({ width: 1400, height: 900, palette: 'dark', kicker: 'Media', title: 'Television', variant: 'dark' })],
  ['videos/international.svg', frame({ width: 1600, height: 900, palette: 'dark', kicker: 'Film', title: 'International', variant: 'dark' })],
  ['videos/peace.svg', frame({ width: 1600, height: 900, palette: 'mist', kicker: 'Film', title: 'Peace' })],
  ['videos/women.svg', frame({ width: 1600, height: 900, palette: 'blush', kicker: 'Film', title: 'Women' })],
  ['videos/handloom.svg', frame({ width: 1600, height: 900, palette: 'earth', kicker: 'Film', title: 'Handloom' })],
  ['videos/media.svg', frame({ width: 1600, height: 900, palette: 'ivory', kicker: 'Film', title: 'Media' })],
  ['videos/fashion.svg', frame({ width: 1600, height: 900, palette: 'gold', kicker: 'Film', title: 'Fashion' })],
]

const og = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0C0B0A"/>
  <rect x="48" y="48" width="1104" height="534" fill="none" stroke="#9C8456" stroke-opacity="0.5"/>
  <text x="600" y="250" text-anchor="middle" fill="#9C8456" font-family="Georgia, serif" font-size="16" letter-spacing="8">GLOBAL PEACE ADVOCATE</text>
  <text x="600" y="340" text-anchor="middle" fill="#F4EFE6" font-family="Georgia, serif" font-size="72" font-style="italic">Rashmi Thakur</text>
  <text x="600" y="420" text-anchor="middle" fill="#C4B28A" font-family="Helvetica, Arial, sans-serif" font-size="14" letter-spacing="4">SOCIAL IMPACT · CULTURE · LEADERSHIP</text>
</svg>`

write('og.svg', og)

for (const [rel, svg] of files) write(rel, svg)

console.log(`Wrote ${files.length + 1} placeholder images.`)
