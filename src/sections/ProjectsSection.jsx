import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-900 text-4xl font-bold"
      >
        Projects
      </motion.h2>
      <div className="mt-12 space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;