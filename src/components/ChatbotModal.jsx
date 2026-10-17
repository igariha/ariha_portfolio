import React, { useState, useEffect } from 'react';
import '../styles/ChatbotModal.css';

export default function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [botpressActive, setBotpressActive] = useState(false);

  useEffect(() => {
    const checkBotpress = () => {
      if (window.botpress && typeof window.botpress.open === 'function') {
        setBotpressActive(true);
      }
    };
    checkBotpress();
    const timer = setInterval(checkBotpress, 500);
    return () => clearInterval(timer);
  }, []);

  // When Botpress's official webchat is loaded, it mounts its own interactive launcher.
  // Hide the temporary placeholder so the two floating buttons don't overlap.
  if (botpressActive) {
    return null;
  }

  const handleToggle = () => {
    if (window.botpress && typeof window.botpress.open === 'function') {
      window.botpress.open();
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button 
        className="chatbot-trigger-btn"
        onClick={handleToggle}
        aria-label="Open Ask Ariha chatbot dialog"
      >
        <div className="bot-pulse-ring"></div>
        <div className="bot-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <span className="bot-label">Ask Ariha</span>
      </button>

      {/* Floating Modal / Popover */}
      {isOpen && (
        <div className="chatbot-popover" role="dialog" aria-modal="true">
          <div className="chatbot-header">
            <div className="bot-title-group">
              <div className="bot-status-indicator"></div>
              <div>
                <div className="bot-name">Ask Ariha</div>
                <div className="bot-subtitle">AI Assistant Preview</div>
              </div>
            </div>
            <button 
              className="bot-close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close dialog"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-body">
            <div className="bot-message-card">
              <div className="bot-avatar">🤖</div>
              <div className="bot-message-bubble">
                <p>
                  <strong>Hello! I am the upcoming interactive assistant for Ariha Jain.</strong>
                </p>
                <p>
                  Botpress integration is currently in preparation. Once connected, you will be able to ask questions about Ariha's engineering projects, Arduino prototypes, coursework at JECRC University, and availability for collaborations!
                </p>
              </div>
            </div>

            <div className="bot-preview-section">
              <span className="preview-label">PLANNED INQUIRIES:</span>
              <div className="preview-chips">
                <span className="chip">"What is the status of the Bionic Butterfly?"</span>
                <span className="chip">"Which CAD tools does Ariha use?"</span>
                <span className="chip">"Tell me about the Smart India Hackathon participation"</span>
              </div>
            </div>

            <div className="bot-badge-footer">
              <span className="botpress-tag">Botpress Integration • Coming Soon</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
