/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent':'transparent',
      'white':'white',
      'primary-color': '#1473F7',
      'primary-color-darker': '#005bd9',
      'primary-color-title': '#58A6FF',
      'gray-color': '#8B949E',
      'disable-color': '#484F58',
      'background-color': '#0D1117',
      'border-color': '#21262D',
    },
    extend: {},
  },
  plugins: [],
}

