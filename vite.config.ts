import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type ProxyOptions } from 'vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const formInbox = 'rraxshmi24@gmail.com'

const enquireProxy: Record<string, ProxyOptions> = {
  '/enquire': {
    target: 'https://formsubmit.co',
    changeOrigin: true,
    rewrite: () => `/ajax/${formInbox}`,
    configure(proxy) {
      proxy.on('proxyReq', (proxyReq, req) => {
        const origin = req.headers.origin
        const referer = req.headers.referer
        if (typeof origin === 'string') proxyReq.setHeader('Origin', origin)
        if (typeof referer === 'string') proxyReq.setHeader('Referer', referer)
      })
    },
  },
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: {
        safari: 15 << 16,
        chrome: 109 << 16,
        firefox: 115 << 16,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
    },
  },
  server: {
    proxy: enquireProxy,
  },
  preview: {
    proxy: enquireProxy,
  },
  build: {
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/framer-motion')) return 'motion'
          if (id.includes('node_modules/react-router')) return 'router'
          if (id.includes('node_modules/lucide-react')) return 'icons'
          return undefined
        },
      },
    },
  },
})
