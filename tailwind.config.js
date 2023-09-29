/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    colors: {
        primary: '#FBFBFB',
        secondary: '#0F0F0F',
        accent1: '#339989',
        accent2: '#2D2E2E',
        darkPrimary: '#0B132B',
        darkSecondary: '#FF5964',
        darkAccent1: '#FFF94F',
        darkAccent2: '#111D41',
      
    },
    extend: {
      width: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },
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

        