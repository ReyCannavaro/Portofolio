import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/about.jpeg';

const AboutMeSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about-me" className="py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">

        <motion.div variants={fadeIn} className="lg:w-1/3">
          <div className="relative p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl">
            <img 
              src={profilePic} 
              alt="Rey Cannavaro" 
              className="rounded-2xl w-full h-auto object-cover" 
            />
          </div>
        </motion.div>

        <div className="lg:w-2/3">
          <motion.h2 variants={fadeIn} className="text-xl md:text-2xl font-bold text-purple-600 tracking-wide">
            HAII, AKUU
          </motion.h2>
          <motion.h3 variants={fadeIn} className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Rey Cannavaro
          </motion.h3>
          <motion.p variants={fadeIn} className="mt-4 text-gray-700 leading-relaxed text-lg">
            Hello Stranger! 👋, my name is Rey Cannavaro. I'm currently a student at SMK Telkom Sidoarjo, with a passion for software development and UI design. I bring a unique blend of creativity and technical expertise to every project, and I’m ready to help bring your ideas to life.
          </motion.p>
          <motion.a 
            variants={fadeIn}
            href="#projects" 
            className="mt-6 inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          >
            Lihat Proyek Saya
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;