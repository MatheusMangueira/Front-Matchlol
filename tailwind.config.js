/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'digital-hand': "url('./assets/background-cut-opacity-5.png')",
      },
    },
  },
  plugins: [],
}
