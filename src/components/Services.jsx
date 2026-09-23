import React from 'react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section services-section" id="services">
      <div className="container">

        <div className="section-header reveal-init">
          <span className="section-label">
            <span className="dot"></span>
            MY SERVICES
          </span>
          <h2 className="section-title">How I can help shape better experiences.</h2>
          <p className="section-subtitle">
            From user research to high-fidelity design systems and interactive prototypes.
          </p>
        </div>

        <div className="services-list">
          {servicesData.map((service, idx) => (
            <div
              key={service.num}
              className={`service-row reveal-init ${idx > 0 ? `delay-${idx}` : ''}`}
              onClick={scrollToWork}
            >
              <span className="service-num">{service.num}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-arrow">
                <div className="service-arrow-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
