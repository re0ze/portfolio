/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f5ccd3',
          300: '#efa3ae',
          400: '#e67082',
          500: '#d63d54',
          600: '#800020', // Main burgundy color
          700: '#8e1d32',
          800: '#771b2d',
          900: '#661a2b',
        },
      },
    },
  },
  plugins: [],
};
