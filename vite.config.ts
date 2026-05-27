import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base — works in dev, at root deployments, and at GitHub Pages
  // subdirectory deployments. The hardcoded '/decennial-website/' from the
  // template was breaking dev mode and custom-domain deploys.
  base: './',
})