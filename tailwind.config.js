/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontFamily: {
      lora: ['Lora', 'serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    colors: {
      lightWhite: '#F2F2F2',
      accentRed: '#FF4C29',
      darkTealBlue: '#082032',
      mediumTealBlue: '#0E273A',
      secondaryDark: '#334756',
      secondaryLight: '#6883AF',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
