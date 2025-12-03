import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-favicon',
      writeBundle() {
        const src = path.resolve(__dirname, 'public/favicon.png')
        const dest = path.resolve(__dirname, 'dist/favicon.png')
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest)
        }
      }
    }
  ],
  base: '/',
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
