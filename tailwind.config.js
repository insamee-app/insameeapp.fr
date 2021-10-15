module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        inter: 'Roboto, sans-serif',
        segoe: 'Segoe UI, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
