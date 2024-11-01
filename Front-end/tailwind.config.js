/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '240px',
      },
      gridTemplateColumns: {
        'custom-layout': '1fr 2fr 1fr 1fr 1fr 1fr ',
      },

    },
  },
  plugins: [],
}