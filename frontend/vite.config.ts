import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
    allowedHosts: [".ngrok-free.app", ".ngrok.io"] // Accept all ngrok URLs
  },

  preview: {
    host: true,
    port: 4000
  }
})
