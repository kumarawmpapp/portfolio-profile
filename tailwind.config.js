module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX/TS/TSX files in src for Tailwind classes
      "./public/index.html",       // Also scan the HTML file
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'], // Define 'inter' custom font family
        },
        colors: {
          'dark-blue-gray': '#2c3e50',
          'medium-blue-gray': '#34495e',
          'light-gray': '#ecf0f1',
        },
      },
    },
    plugins: [],
  }