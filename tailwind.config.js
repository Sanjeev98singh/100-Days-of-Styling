/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 20px 0 rgba(0, 0, 0, 0.3)',
      },
      borderWidth: {
        '44': '44px',
      },
      fontFamily: {
        'courier-prime': ['"Courier Prime"', 'monospace'],
      },
      fontWeight: {
        'regular': '400',
        'bold': '700',
      }
    },
  },
  plugins: [],
}

