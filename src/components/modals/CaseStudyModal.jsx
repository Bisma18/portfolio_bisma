import React, { useEffect } from 'react';
import { caseStudyDetails } from '../../data/projectsData';

export default function CaseStudyModal({ projectId, isOpen, onClose }) {
  const data = projectId ? caseStudyDetails[projectId] : null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'open' : ''}`}
      id="caseStudyModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalProjectTitle"
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) {
          onClose();
        }
      }}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="project-number" id="modalProjectNum">
              {data.id < 10 ? `0${data.id}` : data.id}
            </span>
            <span className="project-category" id="modalProjectCategory">
              {data.category}
            </span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            id="modalCloseBtn"
            onClick={onClose}
            aria-label="Close case study modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <h3
            className="section-title"
            id="modalProjectTitle"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '24px' }}
          >
            {data.title}
          </h3>

          <div className="modal-meta-grid">
            <div className="modal-meta-item">
              <span>Role</span>
              <strong id="modalRole">{data.role}</strong>
            </div>
            <div className="modal-meta-item">
              <span>Timeline</span>
              <strong id="modalTimeline">{data.timeline}</strong>
            </div>
            <div className="modal-meta-item">
              <span>Tools</span>
              <strong id="modalTools">{data.tools}</strong>
            </div>
            <div className="modal-meta-item">
              <span>Client</span>
              <strong id="modalClient">{data.client}</strong>
            </div>
          </div>

          <h4 className="modal-section-title">Project Overview</h4>
          <p className="modal-text" id="modalOverview">{data.overview}</p>

          <h4 className="modal-section-title">Design Challenge</h4>
          <p className="modal-text" id="modalChallenge">{data.challenge}</p>

          <h4 className="modal-section-title">Key UX Solutions</h4>
          <div className="modal-highlights-grid" id="modalSolutionsGrid">
            {(data.solutions || []).map((sol, idx) => (
              <div key={idx} className="modal-highlight-box">
                <h5>{sol.title}</h5>
                <p>{sol.desc}</p>
              </div>
            ))}
          </div>

          <h4 className="modal-section-title">Key Features &amp; Deliverables</h4>
          <ul className="timeline-duties" id="modalFeaturesList" style={{ marginTop: '16px' }}>
            {(data.keyFeatures || []).map((feat, idx) => (
              <li key={idx} className="duty-item">
                <span className="duty-bullet"></span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
