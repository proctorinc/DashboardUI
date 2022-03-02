module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      lgray: '#d7d9e0',
      mgray: '#f6f7fb',
      gray: '#333',
      blue: '#BAE6FD',
      lblue: '#E0F2FE',
      red: '#FECACA',
      lred: '#FEE2E2',
      orange: '#FED7AA',
      lorange: '#FFEDD5',
    },
    extend: {
      boxShadow: {
        'xl': '0 0 20px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);',
      }
    },
  },
  plugins: [],
}
