/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        container: "var(--container)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
