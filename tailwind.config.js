/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%, 100%': { 'background-position': 'left' },
          '50%': { 'background-position': 'center' },
        }
      },
      animation: {
        move: 'move 20s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
