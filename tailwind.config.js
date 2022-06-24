/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#607AFF',
        'secondary': '#0039CA',
        'light': '#C9CFFF',
        'dark': '#2F2D4B',
        'green-dark': '#008866',
        'red-dust': '#D8213C',
      }
    },
  },
  plugins: [],
}
