/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'dark-green': '#006400',
        goldenrod: '#DAA520'
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

