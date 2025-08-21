import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/rey.jpeg'; 

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center py-20 lg:py-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        <div className="flex-1 text-center lg:text-left mt-12 lg:mt-0">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            <span className="text-purple-600">turning ideas</span><br />
            into real life products<br />
            is my calling
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl text-gray-600">
            Saya seorang Software Engineer yang bersemangat dalam membangun produk digital yang inovatif dan bermanfaat.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-8 flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105">
              Lihat Proyek Saya
            </a>
            
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/reycannavaro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/reycannavaro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 17 2.22A12.51 12.51 0 0012 2c-1.84 0-3.6.43-5.02 1.11C5.27.65 4.09 1 4.09 1A5.07 5.07 0 004 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              </a>
              <a href="https://instagram.com/reycannavaro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37a4 4 0 11-4-4 4 4 0 014 4z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <motion.div
            variants={imageVariants}
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden p-2 bg-gradient-to-br from-purple-500 to-indigo-600 shadow-2xl">
            <img
              src={profilePic}
              alt="Rey Cannavaro"
              className="absolute w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default HeroSection;