/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
      Whisper: ['Whisper', 'cursive'],
      Dancing: ['Dancing Script', 'cursive'],
      Kanit: ['Kanit', 'sans-serif'],
      Sacramento: ['Sacramento', 'cursive']
        

      },
    },
  },
  plugins: [],
}

