import React from 'react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <h4>BISMA MUSHTAQ</h4>
            <p>UI/UX DESIGNER</p>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a
              href="#contact-modal"
              className="open-contact-modal"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
            >
              Contact
            </a>
            <a href="https://behance.net/bismamushtaq" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://linkedin.com/in/bisma-bhat" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>

          <div className="footer-copyright">
            &copy; 2026 Bisma Mushtaq. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
