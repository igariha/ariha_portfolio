import React from 'react';
import '../styles/Footer.css';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const currentYear = new Date().getFullYear();
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg viewBox="0 0 40 40" width="30" height="30" fill="none">
                <polygon points="20,4 35,12 35,28 20,36 5,28 5,12" stroke="#ff7a00" strokeWidth="2.5" fill="#13171f"/>
                <text x="20" y="25" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="var(--font-mono)">AJ</text>
              </svg>
              <span className="footer-title">{personal.name}</span>
            </div>
            <p className="footer-desc">
              B.Tech Mechanical Engineering undergraduate at JECRC University. Focused on robotics, CAD, IoT, and embedded prototypes.
            </p>
          </div>

          <div className="footer-nav">
            <span className="footer-nav-title">NAVIGATION</span>
            <div className="footer-links">
              <a href="#hero">Home</a>
              <a href="#about">About Me</a>
              <a href="#education">Education</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#achievements">Workshops</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-social-section">
            <span className="footer-nav-title">CONNECT</span>
            <div className="footer-social-links">
              <a href={socials.github} target="_blank" rel="noreferrer noopener">GitHub</a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
              <a href={socials.instagram} target="_blank" rel="noreferrer noopener">Instagram</a>
              <a href={`mailto:${socials.email}`}>Email</a>
              <button className="footer-resume-link" onClick={onOpenResume}>
                Download Resume
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {currentYear} {personal.name}. All rights reserved.
          </div>

          <div className="footer-tech-stack">
            <span>Built with React + Vite</span>
            <span className="sep">•</span>
            <span>Plain CSS</span>
            <span className="sep">•</span>
            <span>Vercel Ready</span>
          </div>

          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
