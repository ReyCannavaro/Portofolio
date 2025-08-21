import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrevArrow = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NextArrow = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 17 2.22A12.51 12.51 0 0012 2c-1.84 0-3.6.43-5.02 1.11C5.27.65 4.09 1 4.09 1A5.07 5.07 0 004 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
);

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center space-y-12 lg:space-y-0 lg:space-x-12`}>
      
      <div className="lg:w-1/2 relative group">
        <AnimatePresence mode="wait">
          <motion.img
            key={project.images[currentImageIndex]}
            src={project.images[currentImageIndex]}
            alt={`${project.name} Mockup ${currentImageIndex + 1}`}
            className="rounded-xl shadow-xl w-full h-auto transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>

        {project.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md opacity-70 hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <PrevArrow />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md opacity-70 hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <NextArrow />
            </button>
          </>
        )}

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 p-2 bg-gray-900 text-white rounded-full opacity-0 group-hover:opacity-90 transition-opacity duration-300"
          >
            <GithubIcon />
          </a>
        )}
      </div>

      <div className="lg:w-1/2">
        <h3 className="text-purple-600 text-sm font-semibold uppercase">Proyek {index + 1}</h3>
        <h4 className="text-gray-900 text-4xl font-bold mt-2">{project.name}</h4>
        <p className="mt-4 text-gray-700 leading-relaxed text-lg">{project.description}</p>
        <div className="mt-6">
          <h5 className="text-gray-900 text-md font-semibold">Teknologi:</h5>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h5 className="text-gray-900 text-md font-semibold">Peran:</h5>
          <p className="text-gray-700 text-sm">{project.role}</p>
        </div>
        {project.link && (
          <div className="mt-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105 inline-block"
            >
              Kunjungi Website &rarr;
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;