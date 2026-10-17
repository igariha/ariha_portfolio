import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="nav-brand" onClick={closeMenu}>
          <div className="brand-logo">
            <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
              <polygon points="20,4 35,12 35,28 20,36 5,28 5,12" stroke="#ff7a00" strokeWidth="2.5" fill="#13171f"/>
              <text x="20" y="25" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="var(--font-mono)">AJ</text>
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">ARIHA JAIN</span>
            <span className="brand-sub">MECHANICAL ENG</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links desktop-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#achievements" className="nav-link">Workshops</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="nav-actions desktop-actions">
          <button className="btn btn-outline nav-btn" onClick={onOpenResume}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Resume
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className={`bar ${mobileMenuOpen ? 'bar-top' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'bar-mid' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'bar-bot' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
          <a href="#education" className="mobile-nav-link" onClick={closeMenu}>Education</a>
          <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a>
          <a href="#achievements" className="mobile-nav-link" onClick={closeMenu}>Workshops & Hackathons</a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
          <button 
            className="btn btn-primary mobile-resume-btn" 
            onClick={() => { closeMenu(); onOpenResume(); }}
          >
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
}
