/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        marca: ['Montserrat', 'Manrope', 'ui-sans-serif', 'sans-serif'],
        serif: ['Montserrat', 'Manrope', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
