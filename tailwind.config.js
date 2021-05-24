const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0ED3CF',
        teal: colors.teal
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
