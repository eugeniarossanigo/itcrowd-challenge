const apiURL = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_PROD_API_URL
  : 'http://localhost:3000'

export default apiURL