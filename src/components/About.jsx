import React from 'react';
import '../styles/About.css';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const focusAreas = [
    {
      title: "Robotics & Automation",
      desc: "Designing responsive electromechanical setups and autonomous routines.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2"></rect>
          <circle cx="12" cy="5" r="2"></circle>
          <path d="M12 7v4"></path>
          <line x1="8" y1="16" x2="8" y2="16"></line>
          <line x1="16" y1="16" x2="16" y2="16"></line>
        </svg>
      )
    },
    {
      title: "IoT & Microcontrollers",
      desc: "Interfacing Arduino, real-time sensors, and low-latency display units.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
          <line x1="12" y1="20" x2="12.01" y2="20"></line>
        </svg>
      )
    },
    {
      title: "Mechanical CAD & 3D Design",
      desc: "Precision 2D drafting with AutoCAD and spatial 3D modeling using Blender.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Automotive & Aircraft Systems",
      desc: "Deep fascination with propulsion, vehicle kinematics, and aerodynamics.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15 8 22 9 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9 9 8 12 2"></polygon>
        </svg>
      )
    }
  ];

  const hobbies = [
    {
      title: "Outdoor Sports",
      desc: "Fostering physical discipline, fast reflex decision-making, and teamwork.",
      symbol: "⚽"
    },
    {
      title: "Listening to Music",
      desc: "Stimulating creative focus and mental clarity during long build sessions.",
      symbol: "🎧"
    },
    {
      title: "Intellectual Conversations",
      desc: "Discussing emerging tech philosophies, design concepts, and innovation.",
      symbol: "💡"
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>DISCOVER</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            First-year Mechanical Engineering student driven by hands-on innovation and curious inquiry.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="card about-story-card">
            <div className="card-header-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">ariha_profile.md</span>
            </div>
            
            <div className="story-content">
              {personal.aboutDetailed.map((paragraph, index) => (
                <p key={index} className="story-paragraph">
                  {paragraph}
                </p>
              ))}

              <div className="core-pillars">
                <div className="pillar-item">
                  <div className="pillar-num">01</div>
                  <div className="pillar-title">Curiosity First</div>
                  <div className="pillar-desc">Deconstructing systems to understand root principles.</div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-num">02</div>
                  <div className="pillar-title">Collaboration</div>
                  <div className="pillar-desc">Co-creating solutions in multidisciplinary teams.</div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-num">03</div>
                  <div className="pillar-title">Continuous Learning</div>
                  <div className="pillar-desc">Rapidly mastering emerging tools and engineering methods.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus & Hobbies Sidebar */}
          <div className="about-side-cards">
            <h3 className="subhead-title">Core Focus & Engineering Passions</h3>
            <div className="focus-grid">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="card focus-card">
                  <div className="focus-icon-wrap">
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="focus-title">{area.title}</h4>
                    <p className="focus-desc">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="subhead-title mt-subhead">Hobbies & Well-Being</h3>
            <div className="hobbies-grid">
              {hobbies.map((h, i) => (
                <div key={i} className="card hobby-card">
                  <span className="hobby-symbol">{h.symbol}</span>
                  <div>
                    <div className="hobby-title">{h.title}</div>
                    <div className="hobby-desc">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
