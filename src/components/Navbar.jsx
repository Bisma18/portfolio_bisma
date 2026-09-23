import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection, onOpenResume, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className="navbar-wrapper">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="mainNavbar">
          <a href="#" className="nav-brand" aria-label="Bisma Mushtaq - Home">
            <span className="brand-dot"></span>
            <span>BISMA</span>
          </a>

          <div className="nav-links">
            <a href="#work" className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}>Work</a>
            <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</a>
            <a href="#process" className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}>Process</a>
            <a href="#toolkit" className={`nav-link ${activeSection === 'toolkit' ? 'active' : ''}`}>Toolkit</a>
            <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
            <a href="#philosophy" className={`nav-link ${activeSection === 'philosophy' ? 'active' : ''}`}>Philosophy</a>
          </div>

          <div className="nav-cta">
            <button
              type="button"
              className="btn btn-dark open-resume-modal"
              onClick={onOpenResume}
              aria-label="Open Bisma Mushtaq Resume Preview"
            >
              <span>Resume</span>
            </button>
          </div>

          <button
            className="nav-mobile-toggle"
            id="mobileNavToggle"
            onClick={toggleMobileNav}
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </header>

      {/* Fullscreen Mobile Nav Drawer */}
      <div className={`mobile-nav-overlay ${isMobileNavOpen ? 'open' : ''}`} id="mobileNavOverlay">
        <button
          className="mobile-nav-close"
          id="mobileNavClose"
          onClick={closeMobileNav}
          aria-label="Close navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="mobile-nav-links">
          <a href="#work" className="mobile-nav-link" onClick={closeMobileNav}>
            <span>Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
          <a href="#services" className="mobile-nav-link" onClick={closeMobileNav}>
            <span>Services</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
          <a href="#process" className="mobile-nav-link" onClick={closeMobileNav}>
            <span>Process</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
          <a href="#toolkit" className="mobile-nav-link" onClick={closeMobileNav}>
            <span>Toolkit</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
          <a href="#experience" className="mobile-nav-link" onClick={closeMobileNav}>
            <span>Experience</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
          <a href="#philosophy" className="mobile-nav-link" onClick={closeMobileNav}>
            <span>Philosophy</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>

        <div className="mobile-nav-footer">
          <button
            type="button"
            className="btn btn-lime-glow open-contact-modal"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              closeMobileNav();
              onOpenContact();
            }}
          >
            <span>Let's Talk</span>
          </button>
          <button
            type="button"
            className="btn btn-secondary open-resume-modal"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              closeMobileNav();
              onOpenResume();
            }}
          >
            <span>View Resume</span>
          </button>
        </div>
      </div>
    </>
  );
}
