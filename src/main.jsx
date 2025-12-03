import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import faviconUrl from '../public/favicon.png'

// Set favicon dynamically
const link = document.querySelector("link[rel~='icon']")
if (link) {
  link.href = faviconUrl
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
