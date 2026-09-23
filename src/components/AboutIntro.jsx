import React from 'react';
import { introSkills } from '../data/portfolioData';

export default function AboutIntro() {
  return (
    <section className="section intro-section" id="about">
      <div className="container">
        <div className="intro-grid">

          <div className="reveal-init">
            <span className="section-label">
              <span className="dot"></span>
              ABOUT ME
            </span>
            <h2 className="intro-large-statement">
              Designing experiences where usability meets visual clarity.
            </h2>
          </div>

          <div className="intro-details reveal-init delay-2">
            <p>
              Creative and detail-oriented UI/UX Designer with 3+ years of experience building intuitive, responsive,
              and user-focused digital products.
            </p>
            <p>
              Experienced in UI/UX design, responsive interfaces, user research, prototyping, usability testing and
              collaborating with developers and product teams to translate complex business requirements into seamless,
              delightful products.
            </p>

            <div className="skills-pill-group">
              {introSkills.map((skill, index) => (
                <span key={index} className="skill-pill">{skill}</span>
              ))}
            </div>

            <div style={{ marginTop: '10px' }}>
              <a href="#experience" className="btn btn-secondary">
                <span>More About Me</span>
                <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
