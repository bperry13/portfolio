import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      keyframes: {
        //Our fall animation keyframes              
        fall: {
          '0%': { transform: 'translate(0%,-150%) skewX(0deg)' },
          '50%': { transform: 'translate(0%,0%) skewX(-10deg)' },
          '100%': { transform: 'translate(0%,150%) skewX(0deg)' },
        },
      },
      animation: {
        // You can then reference these keyframes by name in the 
        // animation section of your theme configuration
        fall: 'fall 3s ease infinite',
        // animation shorthand CSS property i.e
        // animation-name | animation-duration | animation-timing-function 
        // animation-iteration-count
      },
    },  
  },
  plugins: [],
}
export default config
