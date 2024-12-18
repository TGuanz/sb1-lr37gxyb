/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#F6F7F9',
          100: '#ECEEF2',
          200: '#CBD0DC',
          300: '#9BA4B9',
          400: '#717C96',
          500: '#4F5874',
          600: '#2A2D32',
          700: '#1E2023',
          800: '#1A1C1E',
          900: '#141519',
        },
        accent: {
          50: '#EBF3FF',
          100: '#D6E7FF',
          200: '#ADC9FF',
          300: '#85ABFF',
          400: '#5C8DFF',
          500: '#336FFF',
          600: '#2959CC',
          700: '#1F4399',
          800: '#142C66',
          900: '#0A1633',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(180deg, rgba(30, 32, 35, 0.5) 0%, rgba(26, 28, 30, 0.5) 100%)',
      },
    },
  },
  plugins: [],
};