import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import icon from "../assets/icon.png";
import { useTheme } from "./ThemeStore";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { theme } = useTheme();

  const toggleNav = () => setNavOpen(!navOpen);

  const links = ["home", "about", "team", "course", "contact"];

  // ✅ Reusable NavLinks component
  const NavLinks = ({ isMobile = false, onClick }) => (
    <ul className={`${isMobile ? "space-y-4" : "hidden md:flex gap-6"}`}>
      {links.map((link) => (
        <li key={link}>
          <Link
            to={link}
            smooth
            duration={500}
            offset={-70}
            className="group relative capitalize cursor-pointer block"
            onClick={onClick}
          >
            {link}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-accent-from)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      ))}

      {/* Only show ThemeToggle and Button on desktop */}
      {!isMobile && (
        <li className="flex items-center gap-2">
          <ThemeToggle />
          <Button />
        </li>
      )}
    </ul>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-bg)] text-[var(--color-text)] shadow">
      <div className="max-w-[1240px] mx-auto px-2 flex justify-between items-center h-20">
        <Link to="home" smooth duration={500} offset={-70}>
          <img src={icon} alt="Logo" className="h-16 cursor-pointer" />
        </Link>

        {/* Mobile menu (hidden on md and up) */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={toggleNav}>
            {navOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </button>
          <Button />
        </div>

        {/* Desktop navigation */}
        <NavLinks isMobile={false} />
      </div>

      {/* Mobile navigation overlay */}
      {navOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-2/3 bg-[var(--color-bg)] p-6">
          <NavLinks isMobile={true} onClick={() => setNavOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
