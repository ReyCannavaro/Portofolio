import React from 'react';
import { motion } from 'framer-motion';
import educationHistory from '../data/education';

const EducationSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-20">
      <h2 className="text-gray-900 text-4xl font-bold">Pendidikan</h2>
      
      <div className="mt-8 space-y-8">
        {educationHistory.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8 bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">

            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{edu.institution}</h3>
              <p className="mt-1 text-purple-600 text-lg font-medium">{edu.degree}</p>
              <p className="mt-1 text-gray-600 text-sm">Lulus tahun {edu.graduationYear}</p>
              
              {edu.details && edu.details.length > 0 && (
                <ul className="mt-4 text-gray-700 list-disc list-inside space-y-1">
                  {edu.details.map((item, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;