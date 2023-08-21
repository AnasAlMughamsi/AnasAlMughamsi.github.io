/** ]@type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "fraunces": ["Fraunces"],
      "montserrat": ["Montserrat"]
    },
    extend: {
      width: {
        '110':'27.5rem',
        '128': '32rem',
      },
      height: {
        '110':'27.5rem',
        '128': '32rem',
      },
      colors: {
        "pale-blue": "hsl(221, 100%, 96%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "slate-blue": {
          light: "hsl(252, 100%, 67%)",
          dark: "hsl(241, 81%, 54%)",
        },
        "dark-cyan":"hsl(158, 36%, 37%)",
        
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)"
      }
    },
  },
  
  plugins: [],
}

