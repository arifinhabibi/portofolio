/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        dark: "var(--dark-color)",
        light: "var(--light-color)",
        danger: "var(--danger-color",
        body: "var(--body-color)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        mobile: "480px",
        tablet: "800px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
