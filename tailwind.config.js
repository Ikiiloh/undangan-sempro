/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0D3B66',
        'brand-accent': '#F9A826', // A cheerful yellow/orange
        'brand-light': '#4F6D8A',
        'brand-grid': '#A8D8FF',
      },
      fontFamily: {
        title: ['Pacifico', 'cursive'],
        name: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wave: {
          '0%, 40%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        spinSlow: 'spinSlow 15s linear infinite',
        wave: 'wave 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
