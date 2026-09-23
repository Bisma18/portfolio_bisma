import React from 'react';
import { projectsData } from '../data/projectsData';

export default function Projects({ onOpenCaseStudy }) {
  return (
    <section className="section work-section" id="work">
      <div className="container">

        <div className="section-header reveal-init">
          <span className="section-label">
            <span className="dot"></span>
            MY WORK
          </span>
          <h2 className="section-title">Selected projects I've designed.</h2>
          <p className="section-subtitle">
            A collection of digital products and experiences across marketplaces, consultation, education, productivity
            and responsive web.
          </p>
        </div>

        <div className="projects-container">
          {projectsData.map((project) => {
            if (project.isStatic) {
              return (
                <article key={project.id} className="project-card reveal-init">
                  <div className="project-info">
                    <div className="project-header-meta">
                      <span className="project-number">{project.number}</span>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <p className="new-button">
                      <span>View Case Study</span>
                      <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </p>
                  </div>

                  <div className="project-mockup-wrap project-mockup-static">
                    <img src={project.image} alt={`${project.title} UI Mockup`} loading="lazy" />
                  </div>
                </article>
              );
            }

            return (
              <article
                key={project.id}
                className={`project-card ${project.isReverse ? 'reverse-layout' : ''} reveal-init`}
                data-project-id={project.id}
              >
                <div className="project-info">
                  <div className="project-header-meta">
                    <span className="project-number">{project.number}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary view-case-study-btn"
                    onClick={() => onOpenCaseStudy(project.id)}
                    aria-label={`View ${project.title} Case Study`}
                  >
                    <span>View Case Study</span>
                    <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

                <div
                  className="project-mockup-wrap"
                  onClick={() => onOpenCaseStudy(project.id)}
                >
                  <img src={project.image} alt={`${project.title} UI Mockup`} loading="lazy" />
                  <div className="project-mockup-overlay">
                    <span className="mockup-zoom-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      Explore Case Study
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
