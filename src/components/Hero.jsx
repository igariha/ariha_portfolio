import React from 'react';
import '../styles/Hero.css';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulsing-dot"></span>
            <span>MECHANICAL ENGINEERING • JECRC UNIVERSITY</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">{personal.name}</span>
          </h1>

          <p className="hero-tagline">
            "{personal.tagline}"
          </p>

          <p className="hero-intro">
            {personal.bio}
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              Explore My Projects
            </a>

            <a href="#about" className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              About Me
            </a>

            <button className="btn btn-outline" onClick={onOpenResume} title="Ariha's Resume">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Resume
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-pill">
              <span className="stat-label">Specialization:</span>
              <span className="stat-val">Robotics & Mechatronics</span>
            </div>
            <div className="stat-pill">
              <span className="stat-label">Prototyping:</span>
              <span className="stat-val">Arduino & CAD</span>
            </div>
            <div className="stat-pill">
              <span className="stat-label">Batch:</span>
              <span className="stat-val">2026 – 2030</span>
            </div>
          </div>
        </div>

        {/* Engineering Visual Schematic Graphic */}
        <div className="hero-visual" aria-hidden="true">
          <div className="schematic-wrapper">
            <svg viewBox="0 0 460 460" className="schematic-svg">
              <defs>
                <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ff9028" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff7a00" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ff7a00" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid backdrop */}
              <circle cx="230" cy="230" r="210" fill="none" stroke="#252b38" strokeWidth="1" strokeDasharray="3 6" />
              <circle cx="230" cy="230" r="170" fill="none" stroke="#2c3444" strokeWidth="1.5" />
              <circle cx="230" cy="230" r="125" fill="#131720" stroke="#374151" strokeWidth="1" />

              {/* Coordinate crosshairs */}
              <line x1="230" y1="10" x2="230" y2="450" stroke="#ff7a00" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
              <line x1="10" y1="230" x2="450" y2="230" stroke="#ff7a00" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />

              {/* Rotating outer gear / ring */}
              <g className="gear-outer">
                <circle cx="230" cy="230" r="190" fill="none" stroke="#ff7a00" strokeWidth="2.5" strokeDasharray="24 16 8 16" opacity="0.7" />
                <circle cx="230" cy="40" r="5" fill="#ff7a00" />
                <circle cx="230" cy="420" r="5" fill="#ff7a00" />
                <circle cx="40" cy="230" r="5" fill="#ff7a00" />
                <circle cx="420" cy="230" r="5" fill="#ff7a00" />
              </g>

              {/* Counter-rotating mid ring */}
              <g className="gear-inner">
                <circle cx="230" cy="230" r="145" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="12 24" opacity="0.5" />
                <polygon points="230,95 240,110 220,110" fill="#38bdf8" opacity="0.8" />
                <polygon points="230,365 240,350 220,350" fill="#38bdf8" opacity="0.8" />
              </g>

              {/* Hexagonal mechanical core */}
              <polygon points="230,165 285,197 285,263 230,295 175,263 175,197" fill="#171b25" stroke="#ff7a00" strokeWidth="2" />
              <polygon points="230,180 270,205 270,255 230,280 190,255 190,205" fill="#1c2230" stroke="#ff7a00" strokeWidth="1" strokeOpacity="0.5" />

              {/* Core symbol: Robotics / Microcontroller node */}
              <circle cx="230" cy="230" r="28" fill="url(#orangeGrad)" />
              <circle cx="230" cy="230" r="12" fill="#0b0d11" stroke="#ff7a00" strokeWidth="2" />
              
              {/* Circuit traces branching out */}
              <polyline points="230,165 230,130 265,95 320,95" fill="none" stroke="#ff7a00" strokeWidth="2" opacity="0.7" />
              <circle cx="320" cy="95" r="4" fill="#ff7a00" />

              <polyline points="285,230 330,230 360,260 400,260" fill="none" stroke="#ff7a00" strokeWidth="2" opacity="0.7" />
              <circle cx="400" cy="260" r="4" fill="#ff7a00" />

              <polyline points="175,230 130,230 100,200 60,200" fill="none" stroke="#ff7a00" strokeWidth="2" opacity="0.7" />
              <circle cx="60" cy="200" r="4" fill="#ff7a00" />

              <polyline points="230,295 230,330 195,365 140,365" fill="none" stroke="#ff7a00" strokeWidth="2" opacity="0.7" />
              <circle cx="140" cy="365" r="4" fill="#ff7a00" />

              {/* Telemetry Labels */}
              <text x="325" y="90" fill="#94a3b8" fontSize="10" fontFamily="var(--font-mono)">NODE_01 // IOT</text>
              <text x="330" y="255" fill="#94a3b8" fontSize="10" fontFamily="var(--font-mono)">PWM // SERVO</text>
              <text x="30" y="195" fill="#94a3b8" fontSize="10" fontFamily="var(--font-mono)">CAD // KINEMATICS</text>
              <text x="80" y="380" fill="#94a3b8" fontSize="10" fontFamily="var(--font-mono)">SYS // ARDUINO</text>
            </svg>

            {/* Glowing HUD badge overlay */}
            <div className="hud-badge top-right">
              <span className="hud-status"></span>
              <span>SYS_ACTIVE: FIRST_YEAR</span>
            </div>
            <div className="hud-badge bottom-left">
              <span className="hud-metric">ENG // MECHATRONICS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
