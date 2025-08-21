import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-purple-600">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 mb-8 md:mb-0">
          <p className="text-lg font-semibold">Rey Cannavaro</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-sm">Dibuat dengan ❤️ untuk proyek portofolio.</p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="text-base font-semibold mb-3">Hubungi Saya</p>
          <div className="flex space-x-6">

            <a 
              href="https://github.com/ReyCannavaro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-500 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 17 2.22A12.51 12.51 0 0012 2c-1.84 0-3.6.43-5.02 1.11C5.27.65 4.09 1 4.09 1A5.07 5.07 0 004 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
              </svg>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/rey-cannavaro/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-500 transition duration-300">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;