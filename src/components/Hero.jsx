import React from 'react';

export default function Hero({ onOpenResume }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">

          <div className="hero-content reveal-init">
            <div className="hero-meta-row">
              <span className="section-label">
                <span className="dot"></span>
                UI/UX DESIGNER
              </span>

              <div className="status-pill">
                <span className="status-indicator"></span>
                <span>Available for new opportunities</span>
              </div>
            </div>

            <div className="hero-greeting">Hi, I'm Bisma.</div>

            <h1 className="hero-headline">
              I design digital experiences that feel <span className="editorial-italic">simple &amp; meaningful.</span>
            </h1>

            <p className="hero-description">
              Creative and detail-oriented UI/UX Designer with 3+ years of experience building intuitive, responsive,
              and user-focused digital products.
            </p>

            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                <span>View My Work</span>
                <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>

              <button
                type="button"
                className="btn btn-secondary open-resume-modal"
                onClick={onOpenResume}
                aria-label="Open Bisma Mushtaq Resume Preview"
              >
                <span>View Resume</span>
                <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </button>
            </div>

            <div className="hero-statement-card">
              <div className="statement-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <p>"Creating digital experiences that balance usability, visual quality and business goals."</p>
            </div>
          </div>

          {/* Hero Image with Editorial Cutout & Glow */}
          <div className="hero-visual reveal-init delay-2">
            <div className="hero-glow-backdrop animate-glow"></div>

            <div className="hero-image-card">
              <div className="hero-image-wrapper">
                <img src="assets/images/bisma_hero.jpg" alt="Bisma Mushtaq - UI/UX Designer" loading="eager" />
              </div>

              <div className="hero-floating-badge animate-float">
                <span className="badge-icon">✦</span>
                <span>Crafting Intuitive Interfaces</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
