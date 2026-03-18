/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ─── Brand colours — edit these to retheme the whole site ───
        mint: "#00FFB2",   // Primary accent (green-cyan)
        void: "#08090f",   // Deepest background
        surface: "#0e1117",
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],          // Headings
        mono:    ["'JetBrains Mono'", "monospace"], // Labels / badges
        sans:    ["'DM Sans'", "sans-serif"],        // Body text
      },
    },
  },
  plugins: [],
};