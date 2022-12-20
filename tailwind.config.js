/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
      'wht' : '#ffffff',
      'light-grey' : '#d6e2f0',
      'grayish-blue' : '#7b879d',
      'dark-blue': '#1f3251'
      },
    },
  },
  plugins: [],
}
