import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        gray:'#5F6368',
        lightgray:'#F6F8FC',
        btn:'#C2E6FF',
        blk:'#041E49',
        hover:'#EAEBEF'
      },
      fontFamily:{
        sansregular:['sansregular'],sansmedium:'sansmedium'
      }
    },
  },
  plugins: [
    daisyui
  ],
}

