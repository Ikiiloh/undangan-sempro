// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['"Handjet"', 'cursive'],
        'heading': ['"Pacifico"', 'cursive'],
      },
      colors: {
        // Palet Biru Dominan (Gelap)
        'primary-dark': '#1e40af', // blue-800
        'primary-dark-hover': '#1d4ed8', // blue-700
        
        // Palet Biru Aksen (Cerah)
        'primary-light': '#0284c7', // sky-600
        'primary-light-hover': '#0369a1', // sky-700

        // Teks untuk latar belakang gelap
        'text-on-dark': '#f8fafc', // slate-50 (Putih)
        'text-on-dark-muted': '#cbd5e1', // slate-300 (Abu-abu muda)

        // Latar belakang netral & muted
        'page-bg': '#f3f4f6', // gray-100 (Latar belakang halaman)
        'muted-bg': '#f0f9ff', // sky-50 (Untuk kotak info di dalam kartu)
        'muted-text': '#0c4a6e', // sky-900 (Teks untuk di atas 'muted-bg')
      }
    },
  },
  plugins: [],
}