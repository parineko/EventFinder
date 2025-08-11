import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copy } from 'vite-plugin-copy'

export default defineConfig({
  plugins: [
    react(),
    copy([
      {
        src: 'public/images/**/*',
        dest: 'dist/images'
      }
    ])
  ],
  base: '/EventFinder/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  publicDir: 'public',
})
