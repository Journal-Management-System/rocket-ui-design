import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import icon from '../assets/icon.png';
// import icon_dark from '../assets/logo_dark.png';
import { useTheme } from './ThemeStore';
import Button from "./Button";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { theme } = useTheme();

  const toggleNav = () => setNavOpen(!navOpen);

  const links = ['home', 'about', 'team', 'course', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-bg)] text-[var(--color-text)] shadow">
      <div className="max-w-[1240px] mx-auto px-2 flex justify-between items-center h-20">
        <Link to="home" smooth duration={500} offset={-70}>
          <img src={ icon} alt="Logo" className="h-16 cursor-pointer" />
        </Link>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={toggleNav}>
            {navOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </button>
           <Button/>
        </div>

        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link}>
              <Link to={link} smooth duration={500} offset={-70} className="capitalize cursor-pointer hover:text-[var(--color-accent-to)]"> {link}</Link>
            </li>
            
          ))}
          
          <li>
            <ThemeToggle />
             <Button/>
          </li>
        </ul>
      </div>

      {navOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-2/3 bg-[var(--color-bg)] p-6">
          <ul className="space-y-4 ">
            {links.map((link) => (
              <li key={link}>
                <Link to={link} smooth duration={500}
                  offset={-70}
                  className="block capitalize"
                  onClick={() => setNavOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
        
          </ul>
          
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
