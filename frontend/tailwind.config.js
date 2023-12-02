/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'firacode': ['Fira Code', 'monospace'], 
      }
    },
    colors: {
      'white': '#fff',
      'black': '#000',
      'light-gray': '#f3f3f3',
      'light-green': '#dfe5d1',
      'cream': '#F0F7F4',
      'red': '#6D2020',
      'blue': '#035E7B',
      'moss-green': '#71816D',
      'jasmine': '#FDE696',
      'cerulean': '#437C90',
      'taupe-gray': '#948B89'
    }
  },
  plugins: [],
}

