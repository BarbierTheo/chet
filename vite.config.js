import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/chet/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'docs',
  }
})