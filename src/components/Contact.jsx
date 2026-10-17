import React, { useState } from 'react';
import '../styles/Contact.css';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'submitted' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    // Set status to inform user honestly
    setFormStatus('submitted');
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from Portfolio - ${formData.name}`);
    const body = encodeURIComponent(`Hi Ariha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">Connect & Collaborate</h2>
          <p className="section-subtitle">
            Whether for robotics projects, mechanical engineering discussions, hackathons, or opportunities.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct channels & Social Links */}
          <div className="contact-info-col">
            <h3 className="contact-col-title">Direct Channels</h3>
            <p className="contact-col-desc">
              Feel free to reach out directly via email or connect through my social profiles.
            </p>

            <div className="card email-action-card">
              <div className="email-meta">
                <span className="email-label">DIRECT EMAIL ADDRESS</span>
                <span className="email-value">{socials.email}</span>
              </div>
              <div className="email-btns">
                <button 
                  className="btn btn-outline copy-btn"
                  onClick={handleCopyEmail}
                >
                  {copiedEmail ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      Copy
                    </>
                  )}
                </button>
                <a href={`mailto:${socials.email}`} className="btn btn-primary mailto-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Compose
                </a>
              </div>
            </div>

            <div className="socials-list">
              <h4 className="socials-header">FIND ME ONLINE</h4>
              
              <div className="social-links-grid">
                {/* GitHub */}
                <a 
                  href={socials.github} 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="social-card"
                >
                  <div className="social-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="social-details">
                    <span className="social-name">GitHub</span>
                    <span className="social-handle">@igariha</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href={socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="social-card"
                >
                  <div className="social-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="social-details">
                    <span className="social-name">LinkedIn</span>
                    <span className="social-handle">Ariha Jain</span>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href={socials.instagram} 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="social-card"
                >
                  <div className="social-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="social-details">
                    <span className="social-name">Instagram</span>
                    <span className="social-handle">@ig_ariha</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="contact-form-col">
            <div className="card contact-form-card">
              <div className="form-heading-row">
                <h3 className="form-title">Send a Message</h3>
                <span className="form-notice-badge">Front-End Form</span>
              </div>
              <p className="form-note">
                Enter your details below. You can launch your mail client with these prefilled values or copy them directly.
              </p>

              {formStatus === 'submitted' ? (
                <div className="form-success-banner">
                  <div className="banner-check">✓</div>
                  <h4>Ready to Send!</h4>
                  <p>
                    Since this portfolio runs purely on the front-end without a backend mail server, please click the button below to send your draft via your default email application.
                  </p>
                  <div className="banner-actions">
                    <button className="btn btn-primary" onClick={handleOpenMailClient}>
                      Open Email Client Now
                    </button>
                    <button className="btn btn-secondary" onClick={() => setFormStatus(null)}>
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Rivera" 
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alex@example.com" 
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Arduino Project Collaboration" 
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      required 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hello Ariha, I would like to discuss..." 
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <div className="form-submit-row">
                    <button type="submit" className="btn btn-primary submit-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      Prepare & Send Email
                    </button>
                    <span className="submit-disclaimer">No backend setup required</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
