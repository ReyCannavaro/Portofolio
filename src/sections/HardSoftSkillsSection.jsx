import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hardskills, softskills } from '../data/skills';
import SkillCard from '../components/SkillCard';

const HardSoftSkillsSection = () => {
  const [activeTab, setActiveTab] = useState('hardskill');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillsToShow = activeTab === 'hardskill' ? hardskills : softskills;

  return (
    <section id="skills" className="py-20">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
        <h2 className="text-gray-900 text-4xl font-bold mb-4 md:mb-0">Skills</h2>
        <div className="flex space-x-4 p-1 bg-gray-200 rounded-full">
          <button
            onClick={() => setActiveTab('hardskill')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === 'hardskill' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            Hard Skills
          </button>
          <button
            onClick={() => setActiveTab('softskill')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === 'softskill' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            Soft Skills
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillsToShow.map(skill => (
            <motion.div key={skill.id} variants={itemVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HardSoftSkillsSection;