/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "1180px",
      },
    },
    extend: {
      colors: {
        n: "#061827",
        n2: "#09283f",
        g: "#22f22d",
        w: "#ffffff",
        m: "#a9bbc7",
      },
    },
  },
  plugins: [],
};
