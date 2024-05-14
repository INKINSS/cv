/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: 'hsl(0, 0%, 20%)',
        customBlackLight: 'hsl(0, 0%, 40%)',
        customWhite: 'hsl(0,0%, 97%)',
        customWhiteLight: 'hsl(0,0%, 95%)',
      },
      screens: {
        ssm: '350px'
      }
    },
  },
  plugins: [],
}