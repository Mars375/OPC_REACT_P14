export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajustez ce chemin selon la structure de votre projet
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3b82f6', // bg-blue-500
          600: '#2563eb', // hover:bg-blue-600
        },
        gray: {
          100: '#f3f4f6', // bg-gray-100
          200: '#e5e7eb', // border-gray-200
          300: '#d1d5db', // border-gray-300
          700: '#374151', // dark:border-gray-700
          800: '#1f2937', // dark:bg-gray-800
          900: '#111827', // text-gray-900
        },
        yellow: {
          500: '#f59e0b', // dark:focus:ring-yellow-500
        },
        green: {
          100: '#d1fae5', // bg-green-100
          700: '#047857', // text-green-700
        },
        white: '#ffffff', // bg-white, text-white
        black: '#000000', // text-black
        error: '#dc2626', // text-error
      },
    },
  },
  plugins: [],
};