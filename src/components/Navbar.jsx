import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import icon from "../assets/icon.png";
import { useTheme } from "./ThemeStore";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { theme } = useTheme(); // This is for switching light/dark mode

  const links = ["about", "course", "contact"]; // Nav links

  // Toggle mobile menu
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Reusable navigation links
  const NavLinks = ({ isMobile = false, onClick }) => (
    <ul className={`${isMobile ? "space-y-4 border p-10 text-l ] nav-glass" : "hidden md:flex gap-6 "}`}>
      {links.map((link) => (
        <li key={link}>
          <Link
            to={link}
            smooth
            duration={500}
            offset={-70}
            className="group relative capitalize cursor-pointer block m-4"
            onClick={onClick}
          >
            {link}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-accent-from)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      ))}

      {/* Theme toggle and Button only on desktop */}
      {!isMobile && (
        <li className="flex items-center gap-2">
          <ThemeToggle />
          <Button />
        </li>
      )}
    </ul>
  );

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 text-[var(--color-text)]
        backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300
        bg-[var(--glass-bg)]"
    >
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo - scrolls to top/home */}
        <Link to="home" smooth duration={500} offset={-70}>
          <img src={icon} alt="Logo" className="h-16 cursor-pointer" />
        </Link>

        {/* Mobile menu icon and theme toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={toggleNav}>
            {navOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </button>
          <Button />
        </div>

        {/* Desktop navigation */}
        <NavLinks />
      </div>

      {/* Mobile menu dropdown */}
      {navOpen && (
        <div className="md:hidden absolute  top-10 left-0  p-6">
          <NavLinks isMobile={true} onClick={() => setNavOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
