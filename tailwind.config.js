export default {
  darkMode: 'class', // Utiliser la classe 'dark' pour activer le mode sombre
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1', // Indigo profond
          50: '#EEF2FF',   // Indigo très clair
          100: '#E0E7FF',  // Indigo clair
          200: '#C7D2FE',  // Indigo plus clair
          300: '#A5B4FC',  // Indigo encore plus clair
          400: '#818CF8',  // Indigo moyen
          500: '#6366F1',  // Indigo profond
          600: '#4F46E5',  // Indigo plus profond
          700: '#4338CA',  // Indigo très profond
          800: '#3730A3',  // Indigo encore plus profond
          900: '#312E81',  // Indigo le plus profond
        },
        secondary: {
          DEFAULT: '#EF4444', // Rouge vibrant
          50: '#FEF2F2',   // Rouge très clair
          100: '#FEE2E2',  // Rouge clair
          200: '#FECACA',  // Rouge plus clair
          300: '#FCA5A5',  // Rouge encore plus clair
          400: '#F87171',  // Rouge moyen
          500: '#EF4444',  // Rouge vibrant
          600: '#DC2626',  // Rouge plus profond
          700: '#B91C1C',  // Rouge très profond
          800: '#991B1B',  // Rouge encore plus profond
          900: '#7F1D1D',  // Rouge le plus profond
        },
        success: '#22C55E',  // Vert émeraude
        warning: '#FBBF24',  // Jaune ambre
        error: '#DC2626',    // Rouge foncé
        info: '#3B82F6',     // Bleu ciel
        background: {        // Couleurs de fond
          DEFAULT: '#FFFFFF', // Blanc (clair)
          dark: '#1F2937',   // Gris foncé (sombre)
        },
        text: {             // Couleurs de texte
          DEFAULT: '#1F2937', // Gris foncé (clair)
          dark: '#FFFFFF',   // Blanc (sombre)
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};