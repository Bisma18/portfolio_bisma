import React from 'react';

export default function ContactCTA({ onOpenContact, onCopyEmail }) {
  return (
    <section className="cta-dark-section" id="contact">
      <div className="cta-ambient-glow"></div>

      <div className="container">
        <div className="cta-content-box reveal-init">
          <span className="section-label">
            <span className="dot"></span>
            LET'S WORK TOGETHER
          </span>

          <h2 className="cta-huge-title">
            Have a project in mind?
          </h2>

          <p className="cta-supporting-text">
            Let's create a digital experience that is useful, clear and meaningful.
          </p>

          <div className="cta-contact-actions">
            <button
              type="button"
              className="btn btn-lime-glow open-contact-modal"
              onClick={onOpenContact}
              aria-label="Open Let's Talk Modal"
            >
              <span>Let's Talk</span>
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <button
              type="button"
              className="email-copy-pill"
              onClick={() => onCopyEmail('bismahbhat007@gmail.com')}
              aria-label="Copy Email Address"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>bismahbhat007@gmail.com</span>
            </button>
          </div>

          <div className="cta-social-links">
            <a href="https://behance.net/bismamushtaq" target="_blank" rel="noopener noreferrer" className="social-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.045 0-5.625-2.96-5.625-5.908 0-3.323 2.012-6.092 5.795-6.092 3.659 0 5.259 2.593 5.259 5.727 0 .545-.078 1.157-.14 1.455h-8.064c.05 1.543.834 2.818 2.775 2.818 1.405 0 2.213-.674 2.607-1.636l2.489.636zm-7.653-3.727h5.184c-.068-1.393-.836-2.5-2.525-2.5-1.579 0-2.488 1.056-2.659 2.5zm-9.073-7.273h-7v14h7.098c3.963 0 6.077-1.936 6.077-4.707 0-1.748-1.076-3.239-2.735-3.805 1.258-.591 2.062-1.848 2.062-3.376 0-2.56-1.989-4.112-5.502-4.112zm-4.326 5.549v-3.056h3.693c1.439 0 2.479.529 2.479 1.528 0 1.036-.987 1.528-2.479 1.528h-3.693zm0 5.922v-3.473h3.955c1.624 0 2.766.577 2.766 1.737 0 1.189-1.142 1.736-2.766 1.736h-3.955z" />
              </svg>
              <span>Behance</span>
            </a>
            <a href="https://linkedin.com/in/bisma-bhat" target="_blank" rel="noopener noreferrer" className="social-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
