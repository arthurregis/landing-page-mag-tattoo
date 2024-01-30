/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-gray-first": "#1A1A1A",
        "bg-gray-second": "#2C2C2C",
      },

      backgroundImage: {
        "banner-main": "URL('./src/assets/bg-main.jpg')",
        "img-main": "URL('./src/assets/bg-site.jpg')"
      },

      screens: {
        'personalizado': '912px',
      },

      fontFamily: {
        "pirata": "Pirata One",        
      },
    },
  },
  plugins: [],
}

