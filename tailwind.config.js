/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      
      gradientColorStops: {
        'green-start': '#10B981', // green-400
        'green-mid': '#D1FAE5', // green-200
        'green-end': '#34D399', // green-500
      },
    },
  },
  plugins: [],
}

