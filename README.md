# Rashmi Thakur — Official Portfolio

A static, production-ready React website for a global peace advocate, social impact leader and cultural ambassador.

The site is intentionally frontend-only. All content lives in TypeScript data files so it can later be replaced with an API or CMS without redesigning the interface.

## 1. Project structure

```
public/
  favicon.svg
  robots.txt
  sitemap.xml
  images/                  # Drop-in photographs (replace SVG placeholders)
src/
  assets/images/           # Mirrored placeholders + replacement notes
  components/
    animation/
    gallery/
    layout/
    navigation/
    sections/
    ui/
  data/                    # All editable content
    profile.ts
    journey.ts
    impact.ts
    leadership.ts
    handloom.ts
    portfolio.ts
    awards.ts
    media.ts
    videos.ts
    site.ts
    images.ts
  hooks/                   # data → hooks → components
  lib/
  pages/
  types/
  App.tsx
  main.tsx
  index.css
scripts/generate-placeholders.mjs
```

## 2. Technologies

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React
- react-helmet-async (SEO)

No backend, database, authentication or CMS.

## 3. Install

```bash
npm install
```

## 4. Run locally

```bash
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:5173`).

## 5. Production build

```bash
npm run build
npm run preview
```

`build` type-checks and emits static files to `dist/`. `preview` serves that build locally.

## 6. Replace placeholder images

Current visuals are labelled editorial placeholders, not photographs of the subject.

1. Add a file, for example `public/images/hero/hero.jpg`.
2. Update the path in `src/data/images.ts` (or `portfolio.ts` / `media.ts`).
3. Write accurate `alt` text.

Optional hero video: set `images.hero.video` to an MP4 URL or `/videos/hero.mp4`. Hero video, if used, is muted.

Regenerate SVG placeholders (optional):

```bash
node scripts/generate-placeholders.mjs
```

## 7. Update portfolio content

Edit `src/data/portfolio.ts`.

```ts
{
  id: 'editorial-01',
  title: 'Editorial Portrait',
  category: 'editorial',
  image: '/images/portfolio/your-photo.jpg',
  alt: 'Rashmi Thakur, editorial portrait',
  caption: 'Editorial, photographer credit',
  featured: true,
  aspect: '3/4',
  placeholder: false,
}
```

Categories: `fashion`, `beauty`, `pageants`, `editorial`, `cultural`, `international`, `social-impact`, `leadership`, `handloom`.

## 8. Update awards

Edit `src/data/awards.ts`. Use `year: null` when the date is not known. Do not invent honours.

## 9. Update social links and contact

Edit `src/data/site.ts`.

- Leave a `href` empty to hide that network.
- Set `email` to enable mailto from the contact form.
- Set `formEndpoint` if you later add a third-party form service.
- Set `url` to the production domain before launch (also update `public/robots.txt` and `public/sitemap.xml`).

## 10. Deploy

The app is a static site. After `npm run build`, deploy the `dist/` folder to:

- Vercel or Netlify (SPA fallback to `index.html`)
- GitHub Pages
- Cloudflare Pages
- Any static host / S3 + CDN

For client-side routing, configure the host so all paths serve `index.html`.

Example Vercel `vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Content policy

Do not invent awards, programmes, statistics, clients, countries or URLs. If a fact is missing, keep a placeholder.

Name, titles and biography are stored in `src/data/profile.ts`.
# RashmiThakur
