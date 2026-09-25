import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor Component
 * Layered, velocity-responsive interactive cursor designed for engineering HUD aesthetics.
 * 
 * Features:
 * - Fluid movement with velocity-based dynamic stretch & rotational inertia
 * - Contextual modes:
 *   - Project Cards: expands to 72px with 'EXPLORE' / 'VIEW SYSTEM' label
 *   - Skills & Tech: expands to 54px with 'TECH' label
 *   - External Links: expands to 68px with 'VISIT ↗' label
 *   - Buttons: expands to 46px with magnetic focus & cyan glow
 *   - Navigation Links: expands to 34px with indigo accent
 * - Zero React re-renders on mousemove (pure requestAnimationFrame + translate3d on DOM refs)
 * - Automatically disabled on touch screens and prefers-reduced-motion
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
  const hudCrossRef = useRef(null);

  // Position and physics coordinates (no React state updates)
  const targetPos = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  
  // Velocity and dynamics
  const speed = useRef(0);
  const angle = useRef(0);
  const isVisible = useRef(false);

  // Mode management: 'default' | 'button' | 'link' | 'project' | 'external' | 'skill'
  const currentMode = useRef('default');
  const prevMode = useRef('default');

  useEffect(() => {
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

    const handleMouseMove = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        dotPos.current.x = e.clientX;
        dotPos.current.y = e.clientY;
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

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      // 1. External link detection (priority over container)
      const externalEl = target.closest('[data-cursor="external"], a[target="_blank"]');
      if (externalEl) {
        currentMode.current = 'external';
        return;
      }

      // 2. Button detection (priority over container)
      const buttonEl = target.closest('button, [data-cursor="button"], .btn-primary, [role="button"]');
      if (buttonEl) {
        currentMode.current = 'button';
        return;
      }

      // 3. Skill Domain or technology badge detection
      const skillEl = target.closest('[data-cursor="skill"], .skill-chip');
      if (skillEl) {
        currentMode.current = 'skill';
        return;
      }

      // 4. Project Card detection
      const projectEl = target.closest('[data-cursor="project"], #projects article');
      if (projectEl) {
        currentMode.current = 'project';
        return;
      }

      // 5. Standard navigation & text links, inputs
      const linkEl = target.closest('a, input, textarea, select');
      if (linkEl) {
        currentMode.current = 'link';
        return;
      }

      currentMode.current = 'default';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    let animationFrameId;

    const render = () => {
      // 1. Calculate velocity & directional angle
      const vx = targetPos.current.x - prevMousePos.current.x;
      const vy = targetPos.current.y - prevMousePos.current.y;
      prevMousePos.current.x = targetPos.current.x;
      prevMousePos.current.y = targetPos.current.y;

      const rawSpeed = Math.hypot(vx, vy);
      speed.current += (rawSpeed - speed.current) * 0.15;

      if (rawSpeed > 1) {
        const rawAngle = Math.atan2(vy, vx) * (180 / Math.PI);
        angle.current = rawAngle;
      }

      // 2. Responsive central dot interpolation
      dotPos.current.x += (targetPos.current.x - dotPos.current.x) * 0.45;
      dotPos.current.y += (targetPos.current.y - dotPos.current.y) * 0.45;

      // 3. Fluid trailing ring interpolation
      ringPos.current.x += (targetPos.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (targetPos.current.y - ringPos.current.y) * 0.16;

      // 4. Update Dot Transform
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // 5. Update Ring Transform with subtle velocity stretch in default mode
      if (ringRef.current) {
        const mode = currentMode.current;
        let transformStr = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;

        if (mode === 'default') {
          // Stretch along velocity vector
          const stretch = Math.min(speed.current * 0.0035, 0.35);
          const squeeze = Math.min(speed.current * 0.0018, 0.2);
          transformStr += ` rotate(${angle.current}deg) scale(${1 + stretch}, ${1 - squeeze})`;
        } else {
          // Keep label modes level and non-deformed
          transformStr += ` scale(1, 1)`;
        }

        ringRef.current.style.transform = transformStr;

        // 6. Handle mode styling updates
        if (currentMode.current !== prevMode.current) {
          prevMode.current = currentMode.current;

          if (mode === 'project') {
            ringRef.current.style.width = '76px';
            ringRef.current.style.height = '76px';
            ringRef.current.style.borderColor = 'rgba(99, 102, 241, 0.85)';
            ringRef.current.style.backgroundColor = 'rgba(99, 102, 241, 0.16)';
            ringRef.current.style.boxShadow = '0 0 25px rgba(99, 102, 241, 0.35)';
            if (dotRef.current) dotRef.current.style.opacity = '0.3';
            if (labelRef.current) {
              labelRef.current.textContent = 'EXPLORE';
              labelRef.current.style.opacity = '1';
            }
            if (hudCrossRef.current) hudCrossRef.current.style.opacity = '0.7';
          } else if (mode === 'external') {
            ringRef.current.style.width = '72px';
            ringRef.current.style.height = '72px';
            ringRef.current.style.borderColor = 'rgba(56, 189, 248, 0.85)';
            ringRef.current.style.backgroundColor = 'rgba(56, 189, 248, 0.16)';
            ringRef.current.style.boxShadow = '0 0 25px rgba(56, 189, 248, 0.35)';
            if (dotRef.current) dotRef.current.style.opacity = '0.3';
            if (labelRef.current) {
              labelRef.current.textContent = 'VISIT ↗';
              labelRef.current.style.opacity = '1';
            }
            if (hudCrossRef.current) hudCrossRef.current.style.opacity = '0';
          } else if (mode === 'skill') {
            ringRef.current.style.width = '56px';
            ringRef.current.style.height = '56px';
            ringRef.current.style.borderColor = 'rgba(16, 185, 129, 0.85)';
            ringRef.current.style.backgroundColor = 'rgba(16, 185, 129, 0.16)';
            ringRef.current.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.35)';
            if (dotRef.current) dotRef.current.style.opacity = '0.3';
            if (labelRef.current) {
              labelRef.current.textContent = 'TECH';
              labelRef.current.style.opacity = '1';
            }
            if (hudCrossRef.current) hudCrossRef.current.style.opacity = '0';
          } else if (mode === 'button') {
            ringRef.current.style.width = '48px';
            ringRef.current.style.height = '48px';
            ringRef.current.style.borderColor = 'rgba(56, 189, 248, 0.75)';
            ringRef.current.style.backgroundColor = 'rgba(56, 189, 248, 0.12)';
            ringRef.current.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.25)';
            if (dotRef.current) dotRef.current.style.opacity = '1';
            if (labelRef.current) {
              labelRef.current.textContent = '';
              labelRef.current.style.opacity = '0';
            }
            if (hudCrossRef.current) hudCrossRef.current.style.opacity = '0';
          } else if (mode === 'link') {
            ringRef.current.style.width = '38px';
            ringRef.current.style.height = '38px';
            ringRef.current.style.borderColor = 'rgba(56, 189, 248, 0.75)';
            ringRef.current.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
            ringRef.current.style.boxShadow = '0 0 18px rgba(56, 189, 248, 0.35)';
            if (dotRef.current) dotRef.current.style.opacity = '1';
            if (labelRef.current) {
              labelRef.current.textContent = '';
              labelRef.current.style.opacity = '0';
            }
            if (hudCrossRef.current) hudCrossRef.current.style.opacity = '0';
          } else {
            // default mode
            ringRef.current.style.width = '26px';
            ringRef.current.style.height = '26px';
            ringRef.current.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            ringRef.current.style.backgroundColor = 'transparent';
            ringRef.current.style.boxShadow = '0 0 10px rgba(56, 189, 248, 0.15)';
            if (dotRef.current) dotRef.current.style.opacity = '1';
            if (labelRef.current) {
              labelRef.current.textContent = '';
              labelRef.current.style.opacity = '0';
            }
            if (hudCrossRef.current) hudCrossRef.current.style.opacity = '0';
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
      className="fixed inset-0 pointer-events-none z-[70] overflow-hidden"
      aria-hidden="true"
    >
      {/* Precision Central Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand-cyan pointer-events-none opacity-0 shadow-[0_0_10px_rgba(56,189,248,0.9)] transition-opacity duration-150"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Dynamic Trailing Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border border-white/35 pointer-events-none opacity-0 flex items-center justify-center custom-cursor-ring backdrop-blur-[1px]"
        style={{
          width: '26px',
          height: '26px',
          willChange: 'transform, width, height, border-color, background-color',
        }}
      >
        {/* Subtle HUD Crosshair overlay for Project Cards */}
        <div
          ref={hudCrossRef}
          className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-200 flex items-center justify-center"
        >
          <span className="absolute top-1 text-[8px] text-brand-indigo font-mono leading-none">+</span>
          <span className="absolute bottom-1 text-[8px] text-brand-indigo font-mono leading-none">+</span>
        </div>

        {/* Contextual Telemetry Label */}
        <span
          ref={labelRef}
          className="font-mono text-[9px] font-bold text-white tracking-widest opacity-0 transition-opacity duration-150 select-none text-center"
        />
      </div>
    </div>
  );
};
