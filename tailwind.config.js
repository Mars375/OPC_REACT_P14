export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light': '#ffffff',
        'dark': '#171717',
        'error': '#BF0000',
        'interactive-light': '#0071BC',
        'interactive-dark': '#c2e7ff',
      },
      backgroundColor: {
        'background-dark': '#202124',
        'background-dark-2': '#282a2c',
        'input-light': '#f8fafd',
        'button-light': '#004a77',
      },
      textColor: {
        'primary-light': '#000000',
        'primary-dark': '#ffffff',
        'interactive-light': '#0071BC',
        'interactive-dark': '#c2e7ff',
        'error-light': '#BF0000',
        'error-dark': '#BF0000',
      },
      borderColor: {
        'light': '#dadce0',
        'dark': '#5f6368',
        'interactive-light': '#0071BC',
        'interactive-dark': '#c2e7ff',
        'error': '#BF0000',
      },
      opacity: {
        'disabled': '0.5',
      }
    },
  },
  plugins: [],
};
