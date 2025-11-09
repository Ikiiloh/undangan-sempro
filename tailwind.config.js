/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. GABUNGKAN SEMUA KEYFRAMES DI SINI
      keyframes: {
        // Ini dari blok pertama Anda
        wave: {
          '0%, 40%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // Ini dari blok kedua Anda
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        }
      },

      // 2. GABUNGKAN SEMUA ANIMATION DI SINI
      animation: {
        'wave': 'wave 2s ease-in-out infinite',         // Menggunakan versi 2
        'spinSlow': 'spinSlow 15s linear infinite',    // Menggunakan versi 2
        'float': 'float 3s ease-in-out infinite',      // Menggunakan versi 2
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Menggunakan versi 2
      },
      
      // 3. Konfigurasi Anda yang lain (sudah benar)
      colors: {
        'brand-dark': '#0D3B66',
        'brand-accent': '#F9A826',
        'brand-light': '#4F6D8A',
        'brand-grid': '#A8D8FF',
        'brand-blue': '#0083efff',
        'brand-white':'#ffffffff',
      },
      fontFamily: {
        title: ['Pacifico', 'cursive'],
        name: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}