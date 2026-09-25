import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor component
 * High-performance, hardware-accelerated interactive cursor for desktop environments.
 * 
 * Features:
 * - Desktop only: Automatically disabled on mobile/touch/coarse devices
 * - Accessibility: Disabled when prefers-reduced-motion is active
 * - High Performance: Zero React state re-renders on mousemove (pure requestAnimationFrame + translate3d)
 * - Interactive States:
 *   - Default: precision central dot + subtle trailing ring
 *   - Hover (links/buttons): expanded ring with soft focus glow
 *   - Project Card: expanded badge with 'VIEW' telemetry prompt
 *   - External Link: expanded badge with 'VISIT ↗' indicator
 */
export const CustomCursor = () => {
  const [isEnabled, setIsEnabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasFinePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return Boolean(hasFinePointer && !prefersReducedMotion);
  });

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  // Mutable animation state (no React re-renders)
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isVisible = useRef(false);
  const currentMode = useRef('default'); // 'default' | 'hover' | 'project' | 'external'
  const prevMode = useRef('default');

  useEffect(() => {
    // 1. Listen for device or accessibility preference changes
    const finePointerMedia = window.matchMedia('(pointer: fine) and (hover: hover)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapability = () => {
      setIsEnabled(finePointerMedia.matches && !motionMedia.matches);
    };

    finePointerMedia.addEventListener('change', updateCapability);
    motionMedia.addEventListener('change', updateCapability);

    if (!isEnabled) {
      return () => {
        finePointerMedia.removeEventListener('change', updateCapability);
        motionMedia.removeEventListener('change', updateCapability);
      };
    }

    // 2. Track mouse position
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    // 3. Detect hover targets via delegated mouseover
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      const projectEl = target.closest('[data-cursor="project"]');
      if (projectEl) {
        currentMode.current = 'project';
        return;
      }

      const externalEl = target.closest('[data-cursor="external"], a[target="_blank"]');
      if (externalEl) {
        currentMode.current = 'external';
        return;
      }

      const interactiveEl = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="pointer"]'
      );
      if (interactiveEl) {
        currentMode.current = 'hover';
        return;
      }

      currentMode.current = 'default';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    // 4. Animation Frame Loop (60-120fps smooth lerp)
    let animationFrameId;

    const render = () => {
      // Direct central dot tracking
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Smooth outer ring lag / lerp
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      ringPos.current.x += dx * 0.18;
      ringPos.current.y += dy * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;

        // Update styling only when mode changes
        if (currentMode.current !== prevMode.current) {
          prevMode.current = currentMode.current;
          const mode = currentMode.current;

          if (mode === 'project') {
            ringRef.current.style.width = '60px';
            ringRef.current.style.height = '60px';
            ringRef.current.style.borderColor = 'rgba(99, 102, 241, 0.7)';
            ringRef.current.style.backgroundColor = 'rgba(99, 102, 241, 0.12)';
            if (labelRef.current) {
              labelRef.current.textContent = 'VIEW';
              labelRef.current.style.opacity = '1';
            }
          } else if (mode === 'external') {
            ringRef.current.style.width = '64px';
            ringRef.current.style.height = '64px';
            ringRef.current.style.borderColor = 'rgba(56, 189, 248, 0.7)';
            ringRef.current.style.backgroundColor = 'rgba(56, 189, 248, 0.12)';
            if (labelRef.current) {
              labelRef.current.textContent = 'VISIT ↗';
              labelRef.current.style.opacity = '1';
            }
          } else if (mode === 'hover') {
            ringRef.current.style.width = '38px';
            ringRef.current.style.height = '38px';
            ringRef.current.style.borderColor = 'rgba(99, 102, 241, 0.5)';
            ringRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
            if (labelRef.current) {
              labelRef.current.textContent = '';
              labelRef.current.style.opacity = '0';
            }
          } else {
            // default
            ringRef.current.style.width = '24px';
            ringRef.current.style.height = '24px';
            ringRef.current.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            ringRef.current.style.backgroundColor = 'transparent';
            if (labelRef.current) {
              labelRef.current.textContent = '';
              labelRef.current.style.opacity = '0';
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      finePointerMedia.removeEventListener('change', updateCapability);
      motionMedia.removeEventListener('change', updateCapability);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* Precision Central Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand-cyan pointer-events-none opacity-0 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
        style={{ willChange: 'transform' }}
      />

      {/* Smooth Trailing Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border border-white/25 pointer-events-none opacity-0 flex items-center justify-center custom-cursor-ring backdrop-blur-[0.5px]"
        style={{
          width: '24px',
          height: '24px',
          willChange: 'transform, width, height',
        }}
      >
        {/* Contextual Telemetry Label */}
        <span
          ref={labelRef}
          className="font-mono text-[9px] font-bold text-white tracking-widest opacity-0 transition-opacity duration-150 select-none"
        />
      </div>
    </div>
  );
};
