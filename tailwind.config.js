/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens : {
      phone: '480px', // mobile
      medium: '768px', // medium - tablette   
      pc: '976px', // pc>>
      pclarge: '1440px'
    },
    extend: {
    },
  },
  plugins: [],
}
