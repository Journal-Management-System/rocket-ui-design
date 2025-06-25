import React from 'react';
import icon from '../assets/icon.png';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] px-10 py-[120px] text-center">
      <img src={icon} alt="Rocket Academy Logo" className="w-80 mx-auto" />

      <p className="text-sm mt-8">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
