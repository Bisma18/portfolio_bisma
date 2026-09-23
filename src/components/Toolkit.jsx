import React from 'react';

export default function Toolkit() {
  return (
    <section className="section toolkit-section" id="toolkit">
      <div className="container">

        <div className="section-header centered reveal-init">
          <span className="section-label">
            <span className="dot"></span>
            MY TOOLKIT
          </span>
          <h2 className="section-title">Tools behind the designs.</h2>
          <p className="section-subtitle">
            Industry-standard design, prototyping, and creative software I utilize on a daily basis.
          </p>
        </div>

        <div className="toolkit-grid">

          {/* Figma */}
          <div className="tool-card reveal-init">
            <div className="tool-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z"
                  fill="#0ACF83" />
                <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF" />
                <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E" />
                <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262" />
                <path
                  d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z"
                  fill="#1ABCFE" />
              </svg>
            </div>
            <h3 className="tool-name">Figma</h3>
            <p className="tool-desc">Interface design, design systems &amp; prototypes</p>
          </div>

          {/* Framer */}
          <div className="tool-card reveal-init delay-1">
            <div className="tool-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
              </svg>
            </div>
            <h3 className="tool-name">Framer</h3>
            <p className="tool-desc">Interactive prototypes &amp; responsive layouts</p>
          </div>

          {/* Adobe Photoshop */}
          <div className="tool-card reveal-init delay-2">
            <div className="tool-icon-wrap">
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="7" fill="#001E36" />
                <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="6.25" stroke="#31A8FF" strokeWidth="1.5" />
                <path
                  d="M7.5 22.5V9.5H13.2C16.5 9.5 18.5 11.2 18.5 13.9C18.5 16.6 16.5 18.3 13.2 18.3H10.4V22.5H7.5ZM10.4 15.8H13C14.7 15.8 15.6 15 15.6 13.9C15.6 12.8 14.7 12 13 12H10.4V15.8ZM20.6 22.7C19.5 22.7 18.6 22.4 17.9 22L18.5 19.6C19.2 20 20 20.3 20.8 20.3C21.6 20.3 22.1 19.9 22.1 19.3C22.1 18.7 21.4 18.3 20.2 17.7C18.4 16.8 17.5 15.7 17.5 14.2C17.5 12.3 19.1 10.9 21.5 10.9C22.4 10.9 23.3 11.1 23.9 11.4L23.3 13.8C22.7 13.5 22.1 13.3 21.4 13.3C20.6 13.3 20.2 13.7 20.2 14.2C20.2 14.7 20.7 15 21.9 15.6C23.8 16.5 24.7 17.7 24.7 19.3C24.7 21.4 23 22.7 20.6 22.7Z"
                  fill="#31A8FF" />
              </svg>
            </div>
            <h3 className="tool-name">Adobe Photoshop</h3>
            <p className="tool-desc">Visual design, image editing &amp; asset treatment</p>
          </div>

          {/* Adobe Illustrator */}
          <div className="tool-card reveal-init delay-3">
            <div className="tool-icon-wrap">
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="7" fill="#330000" />
                <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="6.25" stroke="#FF9A00" strokeWidth="1.5" />
                <path
                  d="M7 23L11.6 9H14.4L19 23H16.3L15.3 19.5H10.7L9.7 23H7ZM11.4 17.2H14.6L13 12H13L11.4 17.2ZM22.4 23H19.7V12.4H22.4V23ZM21.05 10.4C20.2 10.4 19.5 9.7 19.5 8.9C19.5 8 20.2 7.3 21.05 7.3C21.9 7.3 22.6 8 22.6 8.9C22.6 9.7 21.9 10.4 21.05 10.4Z"
                  fill="#FF9A00" />
              </svg>
            </div>
            <h3 className="tool-name">Adobe Illustrator</h3>
            <p className="tool-desc">Vector iconography, illustrations &amp; brand assets</p>
          </div>

          {/* Canva */}
          <div className="tool-card reveal-init delay-4">
            <div className="tool-icon-wrap">
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="canvaOfficialGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00C4CC" />
                    <stop offset="55%" stopColor="#0E78E6" />
                    <stop offset="100%" stopColor="#7D2AE8" />
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="7" fill="url(#canvaOfficialGrad)" />
                <path
                  d="M18.8 10.8C16.4 10.8 14.1 12.2 13.2 14.2C12.8 15.1 12.6 16.1 12.6 17.1C12.6 19.7 14.3 21.5 17.2 21.5C19.3 21.5 21.1 20.3 21.8 18.8L19.7 17.8C19.2 18.8 18.3 19.3 17.1 19.3C15.5 19.3 14.7 18.2 14.7 16.7C14.7 15.1 15.8 13.1 18.3 13.1C19.6 13.1 20.4 13.7 20.8 14.5L22.8 13.3C22 11.8 20.6 10.8 18.8 10.8Z"
                  fill="#FFFFFF" />
              </svg>
            </div>
            <h3 className="tool-name">Canva</h3>
            <p className="tool-desc">Visual creatives, pitch decks &amp; social assets</p>
          </div>

        </div>
      </div>
    </section>
  );
}
