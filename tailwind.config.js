/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
        "DarkSlateGrey": "hsl(234, 29%, 20%)",
        "CharcoalGrey": "hsl(235, 18%, 26%)",
        "Grey": "hsl(231, 7%, 60%)",
        "White": "hsl(0, 0%, 100%)"
    },
  },
  plugins: [],
}