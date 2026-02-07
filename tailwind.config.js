/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        profiber: {
          royal: '#2563eb', // Royal Blue
          sky: '#60a5fa',   // Sky Blue
          dark: '#0f172a',  // Slate 900
          vibrant: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'scroll-hint': 'scroll-hint 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}