import React, { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'open' : ''}`}
      id="resumeModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resumeModalTitle"
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) {
          onClose();
        }
      }}
    >
      <div className="resume-modal-container">
        <div className="resume-modal-header">
          <div className="resume-modal-title-group">
            <span className="section-label" style={{ marginBottom: 0 }}>
              <span className="dot"></span>
              RESUME
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--text-secondary)'
              }}
              id="resumeModalTitle"
            >
              BISMA MUSHTAQ
            </span>
          </div>

          <div className="resume-modal-actions">
            <button
              type="button"
              className="resume-action-btn"
              id="printResumeBtn"
              onClick={handlePrint}
              aria-label="Print or Save Resume as PDF"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              className="modal-close-btn"
              id="resumeModalCloseBtn"
              onClick={onClose}
              aria-label="Close resume modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="resume-modal-body">
          <div className="resume-paper">

            {/* Header */}
            <div className="resume-hero-header">
              <div className="resume-name-title">
                <h2>BISMA MUSHTAQ</h2>
                <p>UI/UX DESIGNER</p>
              </div>
              <div className="resume-contact-col">
                <div className="resume-contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:bismahbhat007@gmail.com">bismahbhat007@gmail.com</a>
                </div>
                <div className="resume-contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <a href="https://linkedin.com/in/bisma-bhat" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/bisma-bhat
                  </a>
                </div>
                <div className="resume-contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <a href="https://behance.net/bismamushtaq" target="_blank" rel="noopener noreferrer">
                    behance.net/bismamushtaq
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h4 className="resume-section-heading">Professional Summary</h4>
              <p className="resume-summary-text">
                Creative and detail-oriented UI/UX Designer with <strong>3+ years of experience</strong> building
                intuitive, responsive, and user-focused digital products. Experienced in UI/UX design, responsive
                interfaces, user research, wireframing, high-fidelity prototyping, usability testing, and collaborating
                with cross-functional engineering and product teams.
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h4 className="resume-section-heading">Work Experience</h4>
              <div className="resume-exp-list">

                <div className="resume-exp-item">
                  <div className="resume-exp-header">
                    <div>
                      <span className="resume-exp-role">UI/UX Designer</span> — <span className="resume-exp-company">Raybit Technologies</span>
                    </div>
                    <span className="resume-exp-date">Oct 2024 – Present</span>
                  </div>
                  <ul className="resume-bullet-list">
                    <li className="duty-item">
                      <span className="duty-bullet"></span>
                      <span>Designed responsive web and mobile interfaces for enterprise platforms and client portals.</span>
                    </li>
                    <li className="duty-item">
                      <span className="duty-bullet"></span>
                      <span>Engineered comprehensive ERP system UI/UX including Payroll, POS, Attendance, and Marketing modules.</span>
                    </li>
                    <li className="duty-item">
                      <span className="duty-bullet"></span>
                      <span>Conducted usability testing, generated wireframes, and maintained scalable Figma design systems.</span>
                    </li>
                    <li className="duty-item">
                      <span className="duty-bullet"></span>
                      <span>Collaborated directly with front-end developers to ensure high-fidelity design execution.</span>
                    </li>
                  </ul>
                </div>

                <div className="resume-exp-item">
                  <div className="resume-exp-header">
                    <div>
                      <span className="resume-exp-role">Graphic Designer</span> — <span className="resume-exp-company">The Digital London</span>
                    </div>
                    <span className="resume-exp-date">Nov 2023 – Sep 2024</span>
                  </div>
                  <ul className="resume-bullet-list">
                    <li className="duty-item">
                      <span className="duty-bullet"></span>
                      <span>Created digital marketing materials, social media campaigns, and promotional visual assets.</span>
                    </li>
                    <li className="duty-item">
                      <span className="duty-bullet"></span>
                      <span>Ensured brand consistency across multi-channel digital and print design deliverables.</span>
                    </li>
                    <li className="duty-item">
                      <span className="duty-bullet"></span>
                      <span>Managed client coordination, design reviews, and cross-team project deadlines.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Selected Projects */}
            <div>
              <h4 className="resume-section-heading">Featured Portfolio Projects</h4>
              <div className="resume-exp-list">
                <div className="resume-exp-item">
                  <strong>01. Freelance Marketplace</strong> — <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Freelancer Marketplace Web &amp; App (Discovery, talent profiles &amp; milestone hiring flow)</span>
                </div>
                <div className="resume-exp-item">
                  <strong>02. Ray Consultation</strong> — <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Consultation Platform (Verified expert directory, interactive booking &amp; video UX)</span>
                </div>
                <div className="resume-exp-item">
                  <strong>03. Note Taking App</strong> — <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Voice-to-Notes Mobile App (Audio waveform recording &amp; smart note transcription)</span>
                </div>
                <div className="resume-exp-item">
                  <strong>04. Vocabulary App</strong> — <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Language Learning App (Interactive flashcards, pronunciation player &amp; streak tracking)</span>
                </div>
                <div className="resume-exp-item">
                  <strong>05. Rayfood</strong> — <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Food Delivery Mobile App (Restaurant discovery, menu customization &amp; live order tracking UX)</span>
                </div>
                <div className="resume-exp-item">
                  <strong>06. Marketplace Website</strong> — <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Buy &amp; Sell Classifieds (Search filters, product listings, seller profiles &amp; live chat)</span>
                </div>
                <div className="resume-exp-item">
                  <strong>07. Raybit Technologies Corporate Website</strong> — <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Corporate UI/UX, ERP showcase &amp; lead pipeline</span>
                </div>
              </div>
            </div>

            {/* Core Skills & Tools */}
            <div>
              <h4 className="resume-section-heading">Skills &amp; Technical Toolkit</h4>
              <div className="resume-skills-grid">

                <div className="resume-skills-card">
                  <h5>Design Competencies</h5>
                  <div className="resume-pills-wrap">
                    <span className="resume-skill-badge">UI/UX Design</span>
                    <span className="resume-skill-badge">User Research</span>
                    <span className="resume-skill-badge">Wireframing</span>
                    <span className="resume-skill-badge">Interactive Prototyping</span>
                    <span className="resume-skill-badge">Design Systems</span>
                    <span className="resume-skill-badge">Usability Testing</span>
                    <span className="resume-skill-badge">ERP &amp; SaaS UX</span>
                    <span className="resume-skill-badge">Responsive Web &amp; Mobile</span>
                  </div>
                </div>

                <div className="resume-skills-card">
                  <h5>Software &amp; Tools</h5>
                  <div className="resume-pills-wrap">
                    <span className="resume-skill-badge" style={{ background: '#111111', color: 'var(--accent-lime)', fontWeight: 600 }}>Figma</span>
                    <span className="resume-skill-badge" style={{ background: '#111111', color: '#FFFFFF', fontWeight: 600 }}>Framer</span>
                    <span className="resume-skill-badge">Adobe Photoshop</span>
                    <span className="resume-skill-badge">Adobe Illustrator</span>
                    <span className="resume-skill-badge">Canva</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
