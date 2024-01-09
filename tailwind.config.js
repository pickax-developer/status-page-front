/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7480FF',
        secondary: '#F1EDFF',
        tertiary: '#C0BCF4',
        black: '#464555',
      },
    },
  },
  plugins: [require('daisyui')],
}

