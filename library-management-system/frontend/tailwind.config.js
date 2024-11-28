// tailwind.config.js

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // This makes sure Tailwind CSS processes all files in the src folder
    ],
    theme: {
      extend: {
        colors: {
          primary: "#2c3e50", // Custom color for primary
          secondary: "#8e44ad", // Custom color for secondary
          accent: "#e74c3c", // Accent color
          background: "#f1f1f1", // Background color for the pages
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"], // Custom font for the project
        },
        spacing: {
          128: "32rem", // Custom spacing for larger elements
        },
      },
    },
    plugins: [],
  }
  