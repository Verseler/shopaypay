/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#524940',
        'secondary' : '#fcf9f7',
        'tertiary' : '#B0A695',
        'quaternary' : '#EBE3D5'
      },
      screens: {
        'xs': '475px',
        '1xs' : '410px',
        '2xs' : '375px',
      },
    },
  },
  plugins: [],
}

