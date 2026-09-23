import React from 'react';
import { processData } from '../data/portfolioData';

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">

        <div className="section-header reveal-init">
          <span className="section-label">
            <span className="dot"></span>
            MY PROCESS
          </span>
          <h2 className="section-title">From idea to experience.</h2>
          <p className="section-subtitle">
            A structured, human-centered design framework ensuring every product delivers clarity and measurable value.
          </p>
        </div>

        <div className="process-grid">
          {processData.map((step, idx) => (
            <div
              key={step.num}
              className={`process-card reveal-init ${idx > 0 ? `delay-${idx}` : ''}`}
            >
              <div className="process-card-top">
                <span className="process-number">{step.num}</span>
                <span className="process-badge"></span>
              </div>
              <div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
