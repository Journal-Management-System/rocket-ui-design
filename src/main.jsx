// REACT + TAILWIND ENTRY POINT

import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // ✅ This is your Tailwind CSS file
import App from './App.jsx' // ✅ Entry component
import { ThemeProvider } from './components/ThemeStore';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
        <App />
     </ThemeProvider>
  </StrictMode>
)

