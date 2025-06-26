import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from './ThemeStore';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="pr-3 "
    >
      {isDark ? <BsSun  size={25}/> : <BsMoon  size={25} />}
    </button>
  );
};


export default ThemeToggle;