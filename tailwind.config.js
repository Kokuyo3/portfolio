/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/stories/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'cursor-blink': 'cursor-blink 1s infinite'
      },
      colors: {
        'term-aubergine': '#5E2750',
        'term-green': '#8ae234',
        'term-blue': '#639ccf',
        'term-header': '#484742',
        'term-header-gradient-top': '#504b45',
        'term-header-gradient-bot': '#3c3b37',
        'term-header-button': '#515151'
      },
      keyframes: {
        'cursor-blink': {
          '0%': { opacity: 0 },
          '49%': { background: '#5E2750', opacity: 0 },
          '50%': { background: '#ffffff', opacity: 1 },
          '99%': { background: '#ffffff' }
        }
      }
    }
  },
  plugins: [require('tailwindcss'), require('autoprefixer'), require('@tailwindcss/typography')]
};
