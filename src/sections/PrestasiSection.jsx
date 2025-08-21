import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import prestasiData from '../data/prestasi';

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const PrestasiSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollInterval;
    const scrollContainer = scrollRef.current;
    
    const autoScroll = () => {

      scrollContainer.scrollLeft += 1;
      
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }
    };

    scrollInterval = setInterval(autoScroll, 20);
    
    const handleMouseEnter = () => {
      clearInterval(scrollInterval);
    };
    
    const handleMouseLeave = () => {
      scrollInterval = setInterval(autoScroll, 20);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleMouseEnter);
    scrollContainer.addEventListener('touchend', handleMouseLeave);
    
    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('touchstart', handleMouseEnter);
      scrollContainer.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <section id="prestasi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">

        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Prestasi & Penghargaan
        </motion.h2>

        <motion.div
          ref={scrollRef}
          className="flex flex-row overflow-x-auto pb-4 space-x-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >

          {prestasiData.map((item) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 w-[320px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              variants={itemVariants}
            >

              <img
                src={item.images}
                alt={item.title}
                className="w-full h-[200px] object-cover object-center"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.organizer} - {item.year}</p>
              </div>
            </motion.div>
          ))}
          {prestasiData.map((item, index) => (
            <motion.div
              key={`duplicate-${item.id}-${index}`}
              className="flex-shrink-0 w-[320px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              variants={itemVariants}
            >

              <img
                src={item.images}
                alt={item.title}
                className="w-full h-[200px] object-cover object-center"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.organizer} - {item.year}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PrestasiSection;
