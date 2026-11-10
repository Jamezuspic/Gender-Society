import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the built site work on GitHub Pages, Netlify and Vercel
// without hard-coding your repository name (prevents the "blank page" bug).
export default defineConfig({
  plugins: [react()],
  base: './',
})
