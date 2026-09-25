import React from 'react';

export const BackgroundSystem = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-canvas-base"
      aria-hidden="true"
    >
      {/* 40px Precision Technical Coordinate Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at 50% 30%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 40%, transparent 85%)',
        }}
      />

      {/* Atmospheric Top-Right Indigo Glow */}
      <div
        className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
        }}
      />

      {/* Atmospheric Mid-Left Emerald Glow */}
      <div
        className="absolute top-1/2 -left-48 w-[550px] h-[550px] rounded-full opacity-10 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
        }}
      />
    </div>
  );
};
