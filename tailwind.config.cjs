/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ED3CF",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
