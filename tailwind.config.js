/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/bg-img.jpeg')",
      },
      fontFamily: {
        bodyFont: "Poppins, sans-serif",
      },
      colors: {
        bodyColor: "#F2E5BF",
        navColor: "#257180",
        bottonnav: "#F2E5BF",
      },
    },
  },
  plugins: [require("daisyui")],
};
