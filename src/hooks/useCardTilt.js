import { useEffect } from 'react';

export function useCardTilt() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const projectCards = document.querySelectorAll('.project-card');
    const cleanups = [];

    projectCards.forEach(card => {
      let isHovered = false;

      const handleMouseEnter = () => {
        isHovered = true;
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease';
      };

      const handleMouseMove = (e) => {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -2.2;
        const rotateY = ((x - centerX) / centerX) * 2.2;
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
      };

      const handleMouseLeave = () => {
        isHovered = false;
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease';
        card.style.transform = '';
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      cleanups.push(() => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    });

    return () => {
      cleanups.forEach(cleanup => cleanup());
    };
  }, []);
}
