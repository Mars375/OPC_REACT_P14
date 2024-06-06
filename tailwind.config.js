export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1", // Indigo profond
          50: "#EEF2FF",   // Indigo très clair (pour le texte sur fond sombre)
          100: "#E0E7FF",  // Indigo clair
          500: "#6366F1",  // Indigo profond
          900: "#4338CA",  // Indigo très foncé
        },
        secondary: "#EF4444", // Rouge vibrant
        success: "#22C55E",  // Vert émeraude
        warning: "#FBBF24",  // Jaune ambre
        error: "#DC2626",    // Rouge foncé
        info: "#3B82F6",     // Bleu ciel
        background: {        // Couleurs de fond
          DEFAULT: "#FFFFFF", // Blanc (clair)
          dark: "#1F2937",   // Gris foncé (sombre)
        },
        text: {             // Couleurs de texte
          DEFAULT: "#1F2937", // Gris foncé (clair)
          dark: "#FFFFFF",   // Blanc (sombre)
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};