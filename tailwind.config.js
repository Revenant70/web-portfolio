/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
      }
    },
    fontFamily: {
        serif: ['bodoni MT', 'ui-serif', 'Georgia'],
        secondary: ['baskerville', 'bodoni MT', 'ui-serif', 'Georgia']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

        