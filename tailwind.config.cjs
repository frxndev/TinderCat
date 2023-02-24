/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins']
      },
      colors: {
        primary: '#F00073',
        background: '#FEFAFA',
        'background-dark': '#1B1B1D',
        black: '#444444',
        stroke: '#DBDBDB'
      }
    }
  },
  plugins: []
}
