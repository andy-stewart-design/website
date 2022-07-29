const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

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
      colors: {
        black: "#111111",
        gray: {
          900: "#16181d",
          800: "#22242c",
          700: "#424a53",
          600: "#868e96",
          500: "#6B7280",
          400: "#9CA3AF",
          300: "#D1D5DB",
          200: "#E5E7EB",
          100: "#F3F4F6",
          50: "#F9FAFB",
        },
      },
      opacity: {
        15: ".15",
      },
    },
  },
  plugins: [],
};
