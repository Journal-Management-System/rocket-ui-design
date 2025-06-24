import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from './ThemeStore';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="pr-3 text-xl text-text-light dark:text-text-dark"
    >
      {isDark ? <BsSun /> : <BsMoon />}
    </button>
  );
};


export default ThemeToggle;