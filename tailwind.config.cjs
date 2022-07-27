const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Andy Sans", ...defaultTheme.fontFamily.sans],
      mono: ["Andy mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      opacity: {
        15: ".15",
      },
    },
  },
  plugins: [],
};
