import React, { useEffect, useRef } from 'react';

/**
 * Enhanced Technical Background System
 * Provides an authentic engineering blueprint canvas:
 * - Precision dual-frequency grid (minor 32px, major 128px) with subtle scroll parallax
 * - Subtle noise grain texture overlay
 * - Atmospheric indigo / cyan / emerald glow vignettes with depth parallax
 * - Decorative mathematical AI formulas and engineering fragments (ambient floating + parallax)
 * - Faint coordinate ticks and measurement axes
 * 
 * Performance & A11y:
 * - 100% pointer-events-none & z-0 (stays behind content)
 * - Pure CSS animations with prefers-reduced-motion bypass
 * - Low opacity (0.02 - 0.08) ensuring zero impact on text legibility
 * - Hardware-accelerated translate3d transforms driven via requestAnimationFrame
 */
export const BackgroundSystem = () => {
  const gridRef = useRef(null);
  const glowsRef = useRef(null);
  const formulasRef = useRef(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    let ticking = false;

    const updateParallax = () => {
      // Only run parallax on desktop/tablet viewports
      if (window.innerWidth < 768) {
        ticking = false;
        return;
      }

      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(0, ${scrollY * 0.035}px, 0)`;
      }
      if (glowsRef.current) {
        glowsRef.current.style.transform = `translate3d(0, ${scrollY * 0.015}px, 0)`;
      }
      if (formulasRef.current) {
        formulasRef.current.style.transform = `translate3d(0, ${-scrollY * 0.02}px, 0)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-canvas-base"
      aria-hidden="true"
    >
      {/* 1. Fine SVG Noise Grain Texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="technical-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#technical-noise)" />
      </svg>

      {/* 2. Parallax Grid System */}
      <div ref={gridRef} className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
        {/* Minor Precision Grid (32px) */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Major Blueprint Grid (128px) with Radial Vignette */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '128px 128px',
            maskImage: 'radial-gradient(circle at 50% 40%, black 50%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 50%, transparent 90%)',
          }}
        />
      </div>

      {/* 3. Atmospheric Vignette Glows (with gentle scroll parallax) */}
      <div ref={glowsRef} className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
        {/* Top-Right Electric Indigo Glow */}
        <div
          className="absolute -top-36 -right-36 w-[700px] h-[700px] rounded-full opacity-[0.14] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          }}
        />

        {/* Mid-Left Cyan Glow */}
        <div
          className="absolute top-[35%] -left-48 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[140px]"
          style={{
            background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
          }}
        />

        {/* Lower-Right Emerald Glow */}
        <div
          className="absolute top-[70%] -right-48 w-[550px] h-[550px] rounded-full opacity-[0.07] blur-[130px]"
          style={{
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
          }}
        />
      </div>

      {/* 4. Faint Engineering Measurement Axes & Coordinate Marks */}
      <div className="absolute top-20 left-4 font-mono text-[9px] text-content-dim/30 tracking-widest hidden md:block">
        [SYS_COORD // 0x00_INIT]
      </div>
      <div className="absolute top-20 right-4 font-mono text-[9px] text-content-dim/30 tracking-widest hidden md:block">
        [GRID_REF // 32×32_PX]
      </div>
      <div className="absolute top-[45%] left-4 font-mono text-[9px] text-content-dim/30 tracking-widest hidden lg:block rotate-90 origin-left">
        AXIS_LATITUDE_Y
      </div>
      <div className="absolute top-[75%] right-4 font-mono text-[9px] text-content-dim/30 tracking-widest hidden lg:block -rotate-90 origin-right">
        PRECISION_BOUND_1240PX
      </div>

      {/* Subtle Blueprint Crosshair Markers (+) */}
      <span className="absolute top-[128px] left-[128px] font-mono text-xs text-brand-indigo/20 hidden lg:inline">
        +
      </span>
      <span className="absolute top-[384px] right-[256px] font-mono text-xs text-brand-cyan/20 hidden lg:inline">
        +
      </span>
      <span className="absolute top-[640px] left-[256px] font-mono text-xs text-brand-emerald/20 hidden lg:inline">
        +
      </span>

      {/* 5. Subtle Glowing Blueprint Nodes */}
      <div className="absolute top-[256px] left-[15%] w-1.5 h-1.5 rounded-full bg-brand-indigo/40 animate-pulse hidden md:block" />
      <div className="absolute top-[512px] right-[18%] w-1.5 h-1.5 rounded-full bg-brand-cyan/30 animate-pulse hidden md:block" />
      <div className="absolute top-[768px] left-[22%] w-1.5 h-1.5 rounded-full bg-brand-emerald/30 animate-pulse hidden md:block" />

      {/* 6. Part 3: Mathematical & Technical AI Architecture Fragments (with reverse parallax) */}
      <div ref={formulasRef} className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
        {/* Top Left: Gradient Descent Optimization */}
        <div className="absolute top-[18%] left-[6%] font-mono text-[11px] text-brand-indigo/[0.08] select-none animate-ambient-slow hidden xl:block">
          <div>∇L(θ)</div>
          <div className="text-[10px] text-content-dim/20">θt+1 = θt − η∇L(θt)</div>
        </div>

        {/* Top Right: Scaled Dot-Product Attention */}
        <div className="absolute top-[28%] right-[7%] font-mono text-[11px] text-brand-cyan/[0.08] select-none animate-ambient-reverse hidden xl:block text-right">
          <div>Attention(Q, K, V)</div>
          <div className="text-[10px] text-content-dim/20">softmax(QKᵀ / √d) · V</div>
        </div>

        {/* Mid Left: RAG Pipeline Spec */}
        <div className="absolute top-[52%] left-[5%] font-mono text-[10px] text-brand-emerald/[0.08] select-none animate-ambient-reverse hidden 2xl:block">
          <div>RAG_PIPELINE</div>
          <div className="text-[9px] text-content-dim/20">RETRIEVE → RERANK → GENERATE</div>
        </div>

        {/* Mid Right: Vector Cosine Similarity */}
        <div className="absolute top-[62%] right-[6%] font-mono text-[10px] text-brand-indigo/[0.08] select-none animate-ambient-slow hidden 2xl:block text-right">
          <div>SIM(u, v) = (u · v) / (||u|| ||v||)</div>
          <div className="text-[9px] text-content-dim/20">VECTOR_SPACE // DIMS: 1536</div>
        </div>

        {/* Lower Left: Autonomous Agent Loop */}
        <div className="absolute top-[82%] left-[7%] font-mono text-[10px] text-brand-cyan/[0.08] select-none animate-ambient-slow hidden xl:block">
          <div>AGENT_LOOP // REASONING</div>
          <div className="text-[9px] text-content-dim/20">OBSERVE → EVALUATE → TOOL_CALL</div>
        </div>

        {/* Lower Right: MCP Protocol Protocol Wire */}
        <div className="absolute top-[88%] right-[8%] font-mono text-[10px] text-brand-emerald/[0.08] select-none animate-ambient-reverse hidden xl:block text-right">
          <div>MCP // PROTOCOL_SPEC_v1.0</div>
          <div className="text-[9px] text-content-dim/20">CLIENT ↔ STDIO ↔ SERVER</div>
        </div>
      </div>
    </div>
  );
};
