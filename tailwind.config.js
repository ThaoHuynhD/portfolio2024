/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '0rem',
      },
    },
    height: {
      400: '400px',
      800: '800px'
    },
    zIndex: {
      2000: '2000'
    }
  },
  plugins: [],
}
