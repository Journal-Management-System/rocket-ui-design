import React from 'react'
import icon from '../assets/icon.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-30 text-center">
        <img src={icon} alt="Rocket Academy Logo" className="w-80 mx-auto" />

        <p className="text-sm text-gray-300 mt-8">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      
    </footer>
  )
}

export default Footer
