import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-favicon',
      apply: 'build',
      writeBundle() {
        const src = path.resolve(__dirname, 'public/favicon.png')
        const dest = path.resolve(__dirname, 'dist/favicon.png')
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest)
          console.log('✓ Favicon copied to dist')
        } else {
          console.warn('⚠ Favicon source not found:', src)
        }
      }
    }
  ],
  base: '/',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
