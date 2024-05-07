/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'primary': '#737F99',
        'secondary': '#FF6633'
      }
    },
  },
  plugins: [],
}

