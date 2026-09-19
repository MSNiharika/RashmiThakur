import type { Config } from 'tailwindcss'

/**
 * Design tokens for the Rashmi Thakur portfolio.
 * Colors can be changed here and in src/index.css (@theme) together.
 */
export const tokens = {
  colors: {
    ivory: '#F4EFE6',
    ivorySoft: '#FBF8F2',
    sand: '#E7DFD0',
    charcoal: '#1A1815',
    ink: '#0C0B0A',
    gold: '#9C8456',
    goldSoft: '#C4B28A',
    earth: '#6F5240',
    stone: '#7A746A',
    mist: '#D8D1C3',
  },
  fonts: {
    serif: '"Cormorant Garamond", ui-serif, Georgia, "Times New Roman", serif',
    sans: '"Manrope", ui-sans-serif, system-ui, sans-serif',
  },
} as const

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: tokens.colors.ivory,
        'ivory-soft': tokens.colors.ivorySoft,
        sand: tokens.colors.sand,
        charcoal: tokens.colors.charcoal,
        ink: tokens.colors.ink,
        gold: tokens.colors.gold,
        'gold-soft': tokens.colors.goldSoft,
        earth: tokens.colors.earth,
        stone: tokens.colors.stone,
        mist: tokens.colors.mist,
      },
      fontFamily: {
        serif: [tokens.fonts.serif],
        sans: [tokens.fonts.sans],
      },
      letterSpacing: {
        label: '0.28em',
        heading: '0.04em',
      },
      maxWidth: {
        page: '1440px',
        prose: '42rem',
      },
    },
  },
}

export default config
