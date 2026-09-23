import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">

        <div className="experience-grid">

          <div className="experience-metric-card reveal-init">
            <span className="section-label">
              <span className="dot"></span>
              EXPERIENCE
            </span>
            <div className="experience-metric-number">{experienceData.years}<span></span></div>
            <div className="experience-metric-label">Years Experience</div>
            <p>{experienceData.summary}</p>
          </div>

          <div className="timeline-list">
            {experienceData.timeline.map((item, idx) => (
              <div
                key={idx}
                className={`timeline-item reveal-init ${idx > 0 ? `delay-${idx}` : ''}`}
              >
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company">{item.company}</div>
                  </div>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <ul className="timeline-duties">
                  {item.duties.map((duty, dIdx) => (
                    <li key={dIdx} className="duty-item">
                      <span className="duty-bullet"></span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
