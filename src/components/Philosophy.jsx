import React from 'react';
import { principlesData } from '../data/portfolioData';

export default function Philosophy() {
  return (
    <section className="section philosophy-section" id="philosophy">
      <div className="container">

        <div className="philosophy-statement-wrap reveal-init">
          <span className="section-label">
            <span className="dot"></span>
            MY APPROACH
          </span>
          <h2 className="philosophy-statement">
            Good design should make things easier.
          </h2>
          <p className="philosophy-quote">
            "I focus on creating digital experiences that balance usability, visual quality and business goals."
          </p>
        </div>

        <div className="principles-grid">
          {principlesData.map((item, idx) => (
            <div
              key={item.num}
              className={`principle-card reveal-init ${idx > 0 ? `delay-${idx}` : ''}`}
            >
              <div className="principle-num">{item.num}</div>
              <h3 className="principle-title">{item.title}</h3>
              <p className="principle-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
