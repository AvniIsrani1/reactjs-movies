/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-black':'#141414',
        'custom-grey':'#808080'
      }
    },
  },
  plugins: [],
}