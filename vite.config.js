import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/js-react-practice/',
  esbuild: {
    // production build में whitespace और function formatting को बनाए रखता है
    minifyIdentifiers: false,
    minifySyntax: false,
    minifyWhitespace: false,
  },
})