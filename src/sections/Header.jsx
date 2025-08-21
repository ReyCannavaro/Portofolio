import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About Me', id: 'about-me' },
    { name: 'Pendidikan', id: 'education' },
    { name: 'Prestasi', id: 'prestasi' },
    { name: 'Projects', id: 'projects' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-lg px-8 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center text-gray-800">
        
        <button onClick={() => handleScroll('hero')} className="cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              d="M10 10H17V20H10V10ZM25 10H32V20H25V10ZM20 20L10 30H17L20 25L23 30H30L20 20Z"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <nav className="hidden lg:block">
          <ul className="flex space-x-8 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  onClick={() => handleScroll(link.id)}
                  className="cursor-pointer hover:text-purple-600 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>


      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-4xl font-bold text-gray-900 hover:text-purple-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
