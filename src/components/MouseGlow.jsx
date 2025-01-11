import React, { useEffect, useRef } from 'react';

const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mainElement = document.querySelector('.glow-capture');
      const glowElement = glowRef.current;

      if (mainElement && glowElement) {
        const rect = mainElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glowElement.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const handleTouchMove = (e) => {
      const mainElement = document.querySelector('.glow-capture');
      const glowElement = glowRef.current;

      if (mainElement && glowElement && e.touches[0]) {
        const rect = mainElement.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;

        glowElement.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const mainElement = document.querySelector('.glow-capture');
    if (mainElement) {
      mainElement.addEventListener('mousemove', handleMouseMove);
      mainElement.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('mousemove', handleMouseMove);
        mainElement.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="absolute pointer-events-none z-50 w-32 h-32 bg-indigo-600 opacity-60 rounded-full blur-3xl transition-transform duration-75"
      style={{ transform: 'translate(-50%, -50%)' }}
    ></div>
  );
};

export default MouseGlow;
