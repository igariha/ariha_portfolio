import React from 'react';
import '../styles/Education.css';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>ACADEMICS</span>
          </div>
          <h2 className="section-title">Education Timeline</h2>
          <p className="section-subtitle">
            Academic milestones shaping analytical engineering foundations and scientific rigor.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-axis"></div>

          {education.map((item, index) => (
            <div key={index} className="timeline-item">
              {/* Central Node Indicator */}
              <div className="timeline-node">
                <div className="node-outer">
                  <div className="node-inner"></div>
                </div>
                <div className="node-connector"></div>
              </div>

              {/* Timeline Card */}
              <div className="card timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-badge">{item.highlight}</span>
                </div>

                <h3 className="timeline-degree">{item.degree}</h3>
                
                <div className="timeline-institution">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                  <span>{item.institution}</span>
                </div>

                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
