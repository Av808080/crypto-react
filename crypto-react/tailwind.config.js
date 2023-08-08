/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'481px',
      'md':'627px',
      'lg':'737px',
      'xl':'996px',
      '2xl':'1280px'
    },
    extend: {},
  },
  plugins: [],
}

