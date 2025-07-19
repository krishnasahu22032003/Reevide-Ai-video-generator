import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navItems = ['Platform', 'Solutions', 'Resources', 'Pricing', 'Enterprise', 'Company'];

  return (
    <nav className="w-full fixed top-0 z-50 px-6 py-5 flex items-center justify-between bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300">
      
      {/* Left: Logo + Nav Items */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center max-h-12 overflow-hidden">
          <a href="#home">
            <img
              src={theme === 'dark' ? '/images/logo-2.png' : '/images/logo.png'}
              alt="Reevid Logo"
              className="h-30 w-auto object-contain transition duration-300"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-[17px] font-medium text-gray-700 dark:text-gray-300">
         {navItems.map(item => {
  const id = item.toLowerCase(); // e.g., 'Platform' → 'platform'
  return (
    <a
      key={item}
      href={`#${id}`}
      className="group flex items-center gap-1 transition hover:text-black dark:hover:text-white cursor-pointer"
    >
      <span className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
        {item}
      </span>
      <FaChevronDown
        size={12}
        className="text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-100"
      />
    </a>
  );
})}

        </div>
      </div>

      {/* Right: Desktop Actions */}
      <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
        <button className="flex cursor-pointer  items-center gap-1 ">
          <IoMdGlobe size={18} />
          English
        </button>

        <button
          onClick={toggleTheme}
          className="p-2 cursor-pointer  rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
        </button>

        <button className="px-5 py-2 cursor-pointer  bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition">
          Login
        </button>
        <button className="px-4 py-2 cursor-pointer  bg-black text-white dark:bg-white dark:text-black border dark:border-gray-400 rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition">
          Sign Up for free
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 shadow-md flex flex-col gap-4 px-6 py-5 md:hidden z-50">
          {navItems.map(item => (
            <button
              key={item}
              className="flex items-center justify-between text-gray-700 dark:text-gray-300 text-base font-medium hover:text-black dark:hover:text-white transition"
            >
              <span>{item}</span>
              <FaChevronDown size={12} />
            </button>
          ))}

          {/* Language (always visible & styled) */}
          <button className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 cursor-default">
            <IoMdGlobe size={18} />
            English
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 w-max transition text-gray-700 dark:text-gray-300"
          >
            {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
          </button>

          {/* Auth Buttons */}
          <button className="w-full px-5 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition">
            Login
          </button>
          <button className="w-full px-4 py-2 bg-black text-white dark:bg-white dark:text-black border dark:border-gray-400 rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition">
            Sign Up for free
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
