/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        violet: '#270E35',
        mauve: '#5F2C67',
        rose: '#C76C97',
        beige: '#EEA19B',
        orange: '#FFC09D'
      },
      fontFamily: {
        'georgia-r': 'Georgia Regular',
        'georgia-i': 'Georgia Italic',
        'georgia-b': 'Georgia Bold',
        'georgia-z': 'Georgia Bold Italic',
        'montserrat-l': 'Montserrat-Light',
        'imfellenglishsc-r': 'IMFellEnglishSC-Regular'
      },
    },
  },
  plugins: [],
}

