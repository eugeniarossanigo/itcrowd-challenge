import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GuitarContextProvider from './context/GuitarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GuitarContextProvider>
      <App />
    </GuitarContextProvider>
  </React.StrictMode>,
)
