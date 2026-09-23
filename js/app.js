/* ===================================================
   MAIN APPLICATION LOGIC & FRAMER SCROLL DYNAMICS
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar on Scroll
  const navbar = document.getElementById('mainNavbar');
  
  function handleScroll() {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Nav Drawer Toggle
  const mobileToggleBtn = document.getElementById('mobileNavToggle');
  const mobileCloseBtn = document.getElementById('mobileNavClose');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    mobileOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  mobileToggleBtn?.addEventListener('click', openMobileNav);
  mobileCloseBtn?.addEventListener('click', closeMobileNav);
  
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // 3. Scroll Reveal with IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-init');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Active Nav Link on Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // 5. Interactive Service Rows Navigation Trigger
  const serviceRows = document.querySelectorAll('.service-row');
  serviceRows.forEach(row => {
    row.addEventListener('click', () => {
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 6. Subtle 3D Card Perspective Tilt for Fine Pointers
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      let isHovered = false;

      card.addEventListener('mouseenter', () => {
        isHovered = true;
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease';
      });

      card.addEventListener('mousemove', (e) => {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -2.2;
        const rotateY = ((x - centerX) / centerX) * 2.2;
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        isHovered = false;
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease';
        card.style.transform = '';
      });
    });
  }
});
