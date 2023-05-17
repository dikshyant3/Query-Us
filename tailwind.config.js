/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        background:'#E5EDF1',
        darkBlue:'#0DC74C',
        darkBlueLight:'#223843',
        skyBlue:'#076c8c',
        white:'#ffffff',
        black:'#000000',
        sidebar:'rgba(0,0,0,0.8)',
        lightSkyBlue:'#38b0cc',
        
      },
      gridTemplateColumns: {
        "auto1": "auto 1fr",
      },
      boxShadow: {
        DEFAULT: 'rgba(128, 128, 128, 0.5)',
        custom: 'rgba(255, 0, 0, 0.5)',
        myShadow: '0 3px 3px 0 #808080', 
      },
    },
    fontFamily:{
      'sans':['Helvetica', 'sans-serif','"Helvetica Neue"'],
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

