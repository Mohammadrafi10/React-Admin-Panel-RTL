/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          light: "#f3f4f6",
          DEFAULT: "#ffffff",
          dark: "#e5e7eb",
        },
        // Dark mode colors
        dark: {
          primary: "#1a1a1a",
          secondary: "#2d2d2d",
          accent: "#3d3d3d",
          text: "#ffffff",
          textSecondary: "#9ca3af",
        },
      },
      backgroundColor: {
        dark: {
          primary: "#1a1a1a",
          secondary: "#2d2d2d",
          accent: "#3d3d3d",
        },
      },
      borderColor: {
        dark: {
          primary: "#2d2d2d",
          secondary: "#3d3d3d",
        },
      },
    },
  },
  plugins: [],
};
