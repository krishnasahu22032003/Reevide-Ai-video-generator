import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navItems = [
    'Platform',
    'Solutions',
    'Resources',
    'Pricing',
    'Enterprise',
    'Company',
  ];

  return (
    <nav className="w-full fixed top-0 z-50 px-6 py-5 flex items-center justify-between bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      {/* Left: Logo + Nav Items */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center max-h-12 overflow-hidden">
          <img
            src="/images/logo.png"
            alt="Reevid Logo"
            className="h-30 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8 text-[17px] font-medium text-gray-700">
          {navItems.map(item => (
            <button
              key={item}
              className="group flex items-center gap-1 transition hover:text-black"
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
                {item}
              </span>
              <FaChevronDown size={12} className="text-gray-600 group-hover:text-gray-800" />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-600">
        <button className="flex items-center gap-1 hover:text-black transition">
          <IoMdGlobe size={18} />
          English
        </button>

        <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-100 transition">
          {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
        </button>

        <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition">
          Login
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition">
          Sign Up for free
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col gap-4 px-6 py-5 md:hidden z-50">
          {navItems.map(item => (
            <button
              key={item}
              className="flex items-center justify-between text-gray-700 text-base font-medium hover:text-black transition"
            >
              <span>{item}</span>
              <FaChevronDown size={12} />
            </button>
          ))}

          <button className="flex items-center gap-1 hover:text-black transition text-sm">
            <IoMdGlobe size={18} />
            English
          </button>

          <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-100 w-max transition">
            {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
          </button>

          <button className="w-full px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition">
            Login
          </button>
          <button className="w-full px-4 py-2 bg-black text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition">
            Sign Up for free
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
