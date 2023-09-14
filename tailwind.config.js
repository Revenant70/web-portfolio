/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extendnp: {},
    fontFamily: {
        serif: ['bodoni MT', 'ui-serif', 'Georgia'],
        secondary: ['baskerville', 'bodoni MT', 'ui-serif', 'Georgia']
    },
  },
  plugins: [],
}

        