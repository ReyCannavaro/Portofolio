import React from 'react';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import AboutMeSection from './sections/AboutMeSection';
import EducationSection from './sections/EducationSection';
import HardSoftSkillsSection from './sections/HardSoftSkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import PrestasiSection from './sections/PrestasiSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans min-h-screen">
      <Header />
      <main className="container mx-auto px-8 pt-24">
        <HeroSection />
        <div className="space-y-20">
          <AboutMeSection />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <EducationSection />
            <HardSoftSkillsSection />
          </div>
          <PrestasiSection />
        </div>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
