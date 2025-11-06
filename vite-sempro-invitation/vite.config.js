// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss' // <-- 1. Impor plugin Tailwind

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- 2. Tambahkan plugin di sini
  ],
})