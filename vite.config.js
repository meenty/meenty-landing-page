import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    port: 8100,
    open: false
  },
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        about: 'about.html'
      }
    }
  }
})
