export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajustez ce chemin selon la structure de votre projet
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // bg-primary
          dark: '#2563eb', // hover:bg-primary-dark
        },
        secondary: {
          DEFAULT: '#f59e0b', // bg-secondary
        },
        gray: {
          light: '#f3f4f6', // bg-gray-light
          DEFAULT: '#d1d5db', // border-gray
          dark: '#374151', // dark:border-gray-dark
          darker: '#1f2937', // dark:bg-gray-darker
          darkest: '#111827', // text-gray-darkest
        },
        white: '#ffffff', // bg-white, text-white
        black: '#000000', // text-black
      },
    },
  },
  plugins: [],
};