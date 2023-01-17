/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jet-brains-mono)", "monospace"],
      },
      boxShadow: {
        md: "4px 4px 0 0 rgba(0, 0, 0, 0.1)",
        lg: "6px 6px 0 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}
