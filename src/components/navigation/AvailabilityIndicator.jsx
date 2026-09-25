import React from 'react';

/**
 * Reusable AvailabilityIndicator component
 * Displays Daniel's current availability status for AI Engineering opportunities
 * with a subtle pulsing emerald indicator dot.
 */
export const AvailabilityIndicator = ({
  className = '',
  compact = false,
  showText = true,
  statusText = 'Available for AI Engineering Opportunities',
}) => {
  return (
    <div
      role="status"
      aria-label={statusText}
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-elevated/80 border border-border-subtle backdrop-blur-xs select-none ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75 duration-1000" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald" />
      </span>

      {showText && (
        <span
          className={`font-mono text-[11px] leading-none tracking-wide text-content-secondary ${
            compact ? 'hidden md:inline-block' : 'inline-block'
          }`}
        >
          {statusText}
        </span>
      )}
    </div>
  );
};
