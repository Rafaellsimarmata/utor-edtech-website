import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: ['src/main.jsx', './index.html']
    },
  },
  source: "/login",
  headers: [
    {
      key: "Cross-Origin-Embedder-Policy",
      value: "unsafe-none",
    },
  ],
})
