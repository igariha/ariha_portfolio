import React from 'react';
import '../styles/Achievements.css';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>EXPERIENCE & LEARNING</span>
          </div>
          <h2 className="section-title">Hackathons & Workshops</h2>
          <p className="section-subtitle">
            Hands-on participation, technical bootcamps, and immersion programs driving continuous skill acquisition.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="card achievement-card">
              <div className="achievement-top">
                <span className={`achievement-type-badge ${item.type.toLowerCase()}`}>
                  {item.type}
                </span>
                <span className="achievement-role-badge">
                  {item.role}
                </span>
              </div>

              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>

              <div className="achievement-foot">
                <div className="verified-learning-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Active Learning & Participation Experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
