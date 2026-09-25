import React, { useEffect, useRef } from 'react';

/**
 * ScrollProgress Component
 * Precision 2px ambient scroll progress line at top of viewport.
 * 
 * Features:
 * - Hardware-accelerated (scaleX transform with transform-origin: left)
 * - Zero React re-renders on scroll (passive scroll listener + requestAnimationFrame)
 * - Subtle brand gradient (indigo -> cyan -> emerald)
 * - High z-index (z-[60]) floating smoothly above fixed navbar
 * - Automatically hidden on reduced motion if preferred
 */
export const ScrollProgress = () => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    let ticking = false;

    const updateProgress = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? Math.min(Math.max(scrollY / scrollHeight, 0), 1) : 0;

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none overflow-hidden bg-transparent"
      aria-hidden="true"
    >
      <div
        ref={progressBarRef}
        className="w-full h-full bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald opacity-90 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
        style={{
          transformOrigin: 'left center',
          transform: 'scaleX(0)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};
