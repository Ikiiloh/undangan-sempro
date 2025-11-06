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
        'sans': ['Inter', 'sans-serif'], // Anda bisa tambahkan font lain jika ingin sesuai desain
        'display': ['"Handjet"', 'cursive'], // Contoh font untuk judul seperti "Selamat"
        'heading': ['"Pacifico"', 'cursive'], // Contoh font untuk "Seminar Proposal"
      },
      colors: {
        'primary-blue': '#0284c7', // Tailwind sky-600
        'soft-blue': '#e0f2fe', // Untuk background yang lebih terang
        'dark-text': '#334155', // Tailwind slate-700
        'accent-yellow': '#f59e0b', // Menambahkan warna kuning (amber-500)
      }
    },
  },
  plugins: [],
}