import React from 'react';
import { motion } from 'framer-motion';
import skills from '../data/skills';
import SkillCard from '../components/SkillCard';

const SkillsSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-900 text-4xl font-bold">
        Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-700 mt-2 text-lg">
        Beberapa teknologi yang saya kuasai dan gunakan
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8"
      >
        {skills.map(skill => (
          <motion.div key={skill.id} variants={itemVariants} className="h-full">
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;