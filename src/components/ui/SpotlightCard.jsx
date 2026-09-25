import React, { useRef } from 'react';

const SPOTLIGHT_COLORS = {
  indigo: 'rgba(99, 102, 241, 0.12)',
  cyan: 'rgba(56, 189, 248, 0.12)',
  emerald: 'rgba(16, 185, 129, 0.12)',
  amber: 'rgba(245, 158, 11, 0.12)',
};

const BORDER_HOVER_COLORS = {
  indigo: 'hover:border-brand-indigo/60',
  cyan: 'hover:border-brand-cyan/60',
  emerald: 'hover:border-brand-emerald/60',
  amber: 'hover:border-brand-amber/60',
};

/**
 * SpotlightCard Component
 * High-performance, hardware-accelerated interactive card with a cursor-following radial spotlight.
 * 
 * Features:
 * - Guarantees visual boundary persistence (card NEVER disappears or flattens on hover)
 * - Zero React state re-renders on mousemove (direct CSS variable updates on container ref)
 * - Smooth elevation (-translate-y-1) and luminous border transition
 * - Disabled automatically on touch devices and prefers-reduced-motion environments
 */
export const SpotlightCard = ({
  children,
  as: Component = 'div',
  className = '',
  contentClassName = 'w-full h-full flex flex-col justify-between',
  spotlightColor = 'indigo',
  ...props
}) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--spotlight-x', `${x}px`);
    el.style.setProperty('--spotlight-y', `${y}px`);
    el.style.setProperty('--spotlight-opacity', '1');
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty('--spotlight-opacity', '0');
  };

  const radialColor = SPOTLIGHT_COLORS[spotlightColor] || SPOTLIGHT_COLORS.indigo;
  const borderHoverClass = BORDER_HOVER_COLORS[spotlightColor] || BORDER_HOVER_COLORS.indigo;

  return (
    <Component
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-md bg-surface-card border border-border-medium shadow-card hover:shadow-card-hover ${borderHoverClass} hover:-translate-y-1 transition-all duration-200 overflow-hidden ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity: 'var(--spotlight-opacity, 0)',
          background: `radial-gradient(420px circle at var(--spotlight-x, 0px) var(--spotlight-y, 0px), ${radialColor}, transparent 75%)`,
          willChange: 'opacity',
        }}
        aria-hidden="true"
      />

      {/* Card Content (Relative z-10 so it floats above spotlight) */}
      <div className={`relative z-10 ${contentClassName}`}>
        {children}
      </div>
    </Component>
  );
};
