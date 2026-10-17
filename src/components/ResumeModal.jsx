import React from 'react';
import '../styles/ResumeModal.css';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, socials } = portfolioData;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-icon">📄</span>
            <div>
              <h3 className="modal-title">Ariha Jain — Resume</h3>
              <span className="modal-badge">First-Year Undergrad</span>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close dialog">✕</button>
        </div>

        <div className="modal-body">
          {personal.resumeAvailable ? (
            <div className="resume-ready-state">
              <p>Ariha's official curriculum vitae is available for download.</p>
              <a 
                href={personal.resumeUrl} 
                download="Ariha_Jain_Resume.pdf"
                className="btn btn-primary"
              >
                Download PDF
              </a>
            </div>
          ) : (
            <div className="resume-pending-state">
              <div className="pending-badge">
                <span className="pending-indicator"></span>
                <span>Resume Document Pending Upload</span>
              </div>
              <p className="pending-text">
                The full PDF resume for <strong>Ariha Jain</strong> is currently being formatted for public download.
              </p>
              <div className="pending-card">
                <div className="pending-card-row">
                  <span className="key">Institution:</span>
                  <span className="val">{personal.institution}</span>
                </div>
                <div className="pending-card-row">
                  <span className="key">Program:</span>
                  <span className="val">B.Tech Mechanical Engineering (2026–2030)</span>
                </div>
                <div className="pending-card-row">
                  <span className="key">Specialties:</span>
                  <span className="val">Robotics, IoT, CAD Drafting (AutoCAD, Blender), C</span>
                </div>
              </div>
              <p className="contact-prompt">
                Need an immediate copy or portfolio deck? You can connect directly:
              </p>
              <div className="modal-actions">
                <a 
                  href={`mailto:${socials.email}?subject=Requesting%20Ariha%20Jain%20Resume`} 
                  className="btn btn-primary"
                >
                  Request via Email
                </a>
                <button className="btn btn-secondary" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
