/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shingle-fawn': {
          DEFAULTS:'#6a513d',
          '50': '#f6f5f0',
          '100': '#e9e6d8',
          '200': '#d5ccb3',
          '300': '#bdac87',
          '400': '#a99266',
          '500': '#9a8058',
          '600': '#84694a',
          '700': '#6a513d',
          '800': '#5b4638',
          '900': '#4f3d34',
          '950': '#2d201b',
        },

      }
    },
  },
  plugins: [],
}