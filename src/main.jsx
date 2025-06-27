// REACT + TAILWIND ENTRY POINT

import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './styles/index.css' // ✅ This is your Tailwind CSS file
import App from './App.jsx' // ✅ Entry component
import EventsSection from './components/EventsSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventsSection />
    {/* <App /> */}
  </StrictMode>
)

