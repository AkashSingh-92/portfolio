/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': '0px 0px 5px white, 0px 0px 15px white, 0px 0px 30px white,0px 0px 45px white',
      }
    }
  },
  plugins: [],
}

