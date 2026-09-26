import React from 'react';

/**
 * AtmosphericGradients Component
 * Subtle, hardware-accelerated localized circular/radial atmospheric gradient system.
 * 
 * Features:
 * - Provides ambient lighting and spatial depth across major page zones and section transitions
 * - Calibrated strictly to portfolio design tokens (brand cyan, indigo, emerald)
 * - Toned for dark technical HUD atmosphere without obvious geometric circles
 * - 100% pointer-events-none, hardware-accelerated, zero script execution overhead
 * - Stays behind content (z-0 behind z-10 main content layer)
 * - overflow-hidden prevents any horizontal or vertical scroll spill
 * - Scaled responsiveness: subtle on mobile, expanded atmospheric depth on desktop
 */
export const AtmosphericGradients = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Hero Atmospheric Atmosphere (Cyan & Indigo ambient glow) */}
      <div
        className="absolute top-[1.5%] left-[8%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full opacity-[0.05] sm:opacity-[0.08] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, #6366f1 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[4%] right-[6%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full opacity-[0.045] sm:opacity-[0.07] blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 65%)',
        }}
      />

      {/* 2. Hero -> About Section Transition Glow */}
      <div
        className="absolute top-[11%] left-[25%] w-[550px] sm:w-[700px] h-[450px] rounded-full opacity-[0.035] sm:opacity-[0.055] blur-[110px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #38bdf8 45%, transparent 70%)',
        }}
      />

      {/* 3. About Section (Subtle Indigo Glow & Matrix Depth) */}
      <div
        className="absolute top-[17%] right-[8%] w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full opacity-[0.05] sm:opacity-[0.08] blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #38bdf8 35%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[22%] left-[6%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full opacity-[0.035] sm:opacity-[0.055] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, transparent 65%)',
        }}
      />

      {/* 4. About -> Projects Transition Glow */}
      <div
        className="absolute top-[28%] left-[20%] w-[550px] sm:w-[700px] h-[400px] rounded-full opacity-[0.03] sm:opacity-[0.05] blur-[110px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #10b981 50%, transparent 70%)',
        }}
      />

      {/* 5. Projects Section (Depth Behind Flagship & Secondary Systems) */}
      <div
        className="absolute top-[35%] right-[10%] w-[650px] sm:w-[880px] h-[650px] sm:h-[880px] rounded-full opacity-[0.05] sm:opacity-[0.075] blur-[150px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #38bdf8 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[43%] left-[7%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full opacity-[0.04] sm:opacity-[0.06] blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, #10b981 40%, transparent 70%)',
        }}
      />

      {/* 6. Projects -> Skills Transition Glow */}
      <div
        className="absolute top-[50%] right-[22%] w-[500px] sm:w-[680px] h-[400px] rounded-full opacity-[0.035] sm:opacity-[0.05] blur-[110px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 65%)',
        }}
      />

      {/* 7. Skills Section (Technical Matrix Ambient Atmosphere) */}
      <div
        className="absolute top-[56%] left-[10%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full opacity-[0.05] sm:opacity-[0.08] blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #38bdf8 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[62%] right-[8%] w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full opacity-[0.035] sm:opacity-[0.055] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, transparent 65%)',
        }}
      />

      {/* 8. Skills -> Experience Transition & Timeline Depth */}
      <div
        className="absolute top-[70%] left-[8%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full opacity-[0.04] sm:opacity-[0.065] blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #10b981 0%, #6366f1 45%, transparent 70%)',
        }}
      />

      {/* 9. Experience -> Education Transition Glow */}
      <div
        className="absolute top-[80%] right-[18%] w-[500px] sm:w-[680px] h-[400px] rounded-full opacity-[0.03] sm:opacity-[0.05] blur-[110px]"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, transparent 65%)',
        }}
      />

      {/* 10. Education Section Depth */}
      <div
        className="absolute top-[86%] left-[14%] w-[550px] sm:w-[720px] h-[550px] sm:h-[720px] rounded-full opacity-[0.04] sm:opacity-[0.06] blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, #6366f1 40%, transparent 70%)',
        }}
      />

      {/* 11. Contact Section Atmosphere */}
      <div
        className="absolute top-[94%] left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] h-[550px] sm:h-[700px] rounded-full opacity-[0.05] sm:opacity-[0.08] blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #38bdf8 35%, transparent 70%)',
        }}
      />
    </div>
  );
};
