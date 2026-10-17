import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatbotModal from './components/ChatbotModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setResumeModalOpen(false);
  };

  return (
    <div className="portfolio-app">
      {/* Top Fixed Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* About Me Section */}
        <About />

        {/* Education Timeline */}
        <Education />

        {/* Skills & Toolkit */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Hackathons & Workshops */}
        <Achievements />

        {/* Contact & Socials */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Floating "Ask Ariha" Chatbot Placeholder */}
      <ChatbotModal />

      {/* Resume Download / Status Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={handleCloseResume} 
      />
    </div>
  );
}
