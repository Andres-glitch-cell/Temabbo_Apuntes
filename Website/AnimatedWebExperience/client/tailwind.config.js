/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb",     // para border-border
        background: "#f9fafb", // para bg-background
        foreground: "#111827", // para text-foreground (un gris oscuro)
      },
    },
  },
  plugins: [],
}

