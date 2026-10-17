import React from 'react';
import '../styles/Projects.css';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  const getStatusBadgeClass = (statusType) => {
    switch (statusType) {
      case 'in-progress':
        return 'status-in-progress';
      case 'prototype':
        return 'status-prototype';
      case 'concept':
        return 'status-concept';
      case 'complete':
        return 'status-complete';
      default:
        return 'status-default';
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>PROTOTYPES & LAB</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Hands-on explorations combining microcontroller logic, kinematic mechanics, and embedded interactive interfaces.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="card project-card">
              {/* Card top banner with schematic grid aesthetic */}
              <div className="project-blueprint-banner">
                <div className="banner-index">PRJ_0{index + 1}</div>
                <div className={`status-badge ${getStatusBadgeClass(project.statusType)}`}>
                  <span className="status-ping"></span>
                  <span>{project.status}</span>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-section">
                  <div className="tech-label">TECHNOLOGIES & TOOLS</div>
                  <div className="tech-tags-list">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-footer">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="project-link"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>Repository / Code</span>
                </a>

                <div className="project-edit-note" title="Project statuses can be updated in portfolioData.js">
                  Status: Active
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-callout">
          <div className="callout-icon">ℹ️</div>
          <div className="callout-text">
            <strong>Transparency in Progress:</strong> These projects represent ongoing academic explorations and active prototypes. Technical specifications and source revisions reflect current developmental stages.
          </div>
        </div>
      </div>
    </section>
  );
}
