/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  mode:"jit",
  theme: {
    extend: {
      colors:{
        primary:"#00000",
        secondary:"#00f6fff",
        dimWhite:"rgba(255,255,255,0.7)",
        dimBlue:"rgba(9,151,124,0.1)"
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"]
      }
    },
    screens:{
      xs:"480px",
      ss:"620px",
      sm:"768px",
      md:"1080px",
      lg:"1400px",
      xl:"1700p"
    }
  },
  plugins: [],
}

