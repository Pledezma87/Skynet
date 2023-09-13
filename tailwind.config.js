/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mi-imagen': "url('/Users/pabloledezma/skynet/frontend/src/assets/images/laser.gif')",
      },
    },
  },
  
  plugins: [],
};


