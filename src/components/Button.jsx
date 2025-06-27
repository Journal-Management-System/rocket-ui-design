// Button.jsx
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ button_text, className = "" }) => {
  return (
    <Link
      to="/apply"
      className={`bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {button_text}
    </Link>
  );
};

export default Button;
