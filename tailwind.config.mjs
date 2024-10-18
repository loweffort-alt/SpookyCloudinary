/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "425px",
      md: "744px",
      lap: "1024px",
      lg: "1280px",
      xl: "1600px",
    },
    extend: {
      colors: {
        text: "#fff",
        background: "#f1f7f9",
        primary: "#ff6b19",
        secondary: "#E82128",
        accent: "#76B7D6",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        titilum: ["Titillium Web", "sans-serif"],
      },
      fontSize: {
        small: "0.8rem",
        base: "1rem",
        medium: "1.25rem",
        h3: "1.5rem",
        h2: "2.5rem",
        h1: "3.75rem",
        banner: "3rem",
      }
    },
  },
  plugins: [],
};
