import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutIntro from './components/AboutIntro';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Toolkit from './components/Toolkit';
import Experience from './components/Experience';
import Philosophy from './components/Philosophy';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import Toast from './components/Toast';

import CaseStudyModal from './components/modals/CaseStudyModal';
import ContactModal from './components/modals/ContactModal';
import ResumeModal from './components/modals/ResumeModal';

import { useScrollSpy } from './hooks/useScrollSpy';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useCardTilt } from './hooks/useCardTilt';

export default function App() {
  const activeSection = useScrollSpy(['work', 'services', 'process', 'toolkit', 'experience', 'philosophy', 'contact']);
  useScrollReveal();
  useCardTilt();

  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('UI/UX Design');
  const [toast, setToast] = useState({ isVisible: false, message: '' });

  const showToast = (message) => {
    setToast({ isVisible: true, message });
    setTimeout(() => {
      setToast({ isVisible: false, message: '' });
    }, 3200);
  };

  const handleCopyEmail = (email = 'bismahbhat007@gmail.com') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    } else {
      showToast(`Email: ${email}`);
    }
  };

  const handleOpenCaseStudy = (id) => {
    setActiveCaseStudyId(id);
  };

  const handleCloseCaseStudy = () => {
    setActiveCaseStudyId(null);
  };

  const handleOpenContact = (service = 'UI/UX Design') => {
    setSelectedService(service);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="app-root">
      <Navbar
        activeSection={activeSection}
        onOpenResume={handleOpenResume}
        onOpenContact={() => handleOpenContact('UI/UX Design')}
      />

      <main>
        <Hero onOpenResume={handleOpenResume} />
        <AboutIntro />
        <Projects onOpenCaseStudy={handleOpenCaseStudy} />
        <Services />
        <Process />
        <Toolkit />
        <Experience />
        <Philosophy />
        <ContactCTA
          onOpenContact={() => handleOpenContact('UI/UX Design')}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      <Footer onOpenContact={() => handleOpenContact('UI/UX Design')} />

      {/* Modals */}
      <CaseStudyModal
        projectId={activeCaseStudyId}
        isOpen={!!activeCaseStudyId}
        onClose={handleCloseCaseStudy}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        selectedService={selectedService}
        onServiceChange={setSelectedService}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
      />
    </div>
  );
}
