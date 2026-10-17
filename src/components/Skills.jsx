import React from 'react';
import '../styles/Skills.css';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>TOOLKIT & CAPABILITIES</span>
          </div>
          <h2 className="section-title">Skills & Technical Competencies</h2>
          <p className="section-subtitle">
            A clear distinction between hands-on technical skills, engineering interests, and analytical competencies.
          </p>
        </div>

        {/* Section 1: Hands-on Technical Skills */}
        <div className="skills-block">
          <div className="block-title-row">
            <div className="block-tag">LAYER 01</div>
            <h3 className="block-title">Technical Proficiencies</h3>
            <span className="block-note">Direct tools, languages & hardware experience</span>
          </div>

          <div className="technical-grid">
            {skills.technical.map((group, idx) => (
              <div key={idx} className="card tech-card">
                <div className="tech-card-header">
                  <div className="tech-icon-indicator">
                    {idx === 0 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <rect x="9" y="9" width="6" height="6"></rect>
                        <line x1="9" y1="1" x2="9" y2="4"></line>
                        <line x1="15" y1="1" x2="15" y2="4"></line>
                        <line x1="9" y1="20" x2="9" y2="23"></line>
                        <line x1="15" y1="20" x2="15" y2="23"></line>
                        <line x1="20" y1="9" x2="23" y2="9"></line>
                        <line x1="20" y1="14" x2="23" y2="14"></line>
                        <line x1="1" y1="9" x2="4" y2="9"></line>
                        <line x1="1" y1="14" x2="4" y2="14"></line>
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                    )}
                  </div>
                  <h4 className="tech-group-title">{group.category}</h4>
                </div>

                <ul className="tech-items-list">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="tech-item-badge">
                      <span className="bullet-sq"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Areas of Interest & Emerging Fields */}
        <div className="skills-block mt-large">
          <div className="block-title-row">
            <div className="block-tag">LAYER 02</div>
            <h3 className="block-title">Core Engineering Interests</h3>
            <span className="block-note">Passionate domains of exploration and ongoing study</span>
          </div>

          <div className="interests-grid">
            {skills.interests.map((interest, idx) => (
              <div key={idx} className="card interest-badge-card">
                <div className="interest-dot"></div>
                <span className="interest-name">{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Professional Strengths */}
        <div className="skills-block mt-large">
          <div className="block-title-row">
            <div className="block-tag">LAYER 03</div>
            <h3 className="block-title">Core Strengths & Mindset</h3>
            <span className="block-note">Work ethic, analytical adaptability, and problem solving</span>
          </div>

          <div className="strengths-grid">
            {skills.coreStrengths.map((str, idx) => (
              <div key={idx} className="strength-card">
                <span className="strength-icon">⚡</span>
                <span className="strength-text">{str}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
