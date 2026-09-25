import React from 'react';
import { GraduationCap, Calendar, Award, Sparkles } from 'lucide-react';

/**
 * EducationCard component
 * Data-dense, structured card for verified academic credentials.
 */
export const EducationCard = ({ edu }) => {
  return (
    <article
      className={`rounded-md p-4 sm:p-6 transition-all duration-200 border ${
        edu.isCurrent
          ? 'bg-surface-card/95 border-brand-indigo/40 shadow-card hover:border-brand-indigo/60'
          : 'bg-surface-card/80 border-border-medium hover:border-border-strong hover:bg-surface-card'
      }`}
      aria-labelledby={`edu-title-${edu.id}`}
    >
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border-subtle font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-brand-indigo">{edu.index}</span>
          <span className="text-border-medium">/</span>
          <span className="text-content-dim uppercase text-[10.5px] tracking-wider">
            {edu.program}
          </span>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-1.5 text-[10.5px] font-mono">
          {edu.isCurrent ? (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-semibold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
              <span>{edu.status}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-content-dim uppercase">
              <span>{edu.status}</span>
            </span>
          )}
        </div>
      </div>

      {/* Degree Title & Institution */}
      <div className="mb-3">
        <h3
          id={`edu-title-${edu.id}`}
          className="text-lg sm:text-xl font-bold font-sans tracking-tight text-white mb-1"
        >
          {edu.degree}
        </h3>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs text-content-secondary">
          <div className="flex items-center gap-1.5 text-content-primary font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{edu.institution}</span>
          </div>

          <div className="flex items-center gap-1 text-content-dim">
            <Calendar className="w-3.5 h-3.5" />
            <span>{edu.period}</span>
          </div>
        </div>
      </div>

      {/* Distinction / Merit Badge */}
      <div className="mb-3">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-xs bg-surface-elevated border border-border-medium text-brand-cyan">
          <Award className="w-3.5 h-3.5 text-brand-cyan" />
          <span className="font-semibold">{edu.distinction}</span>
        </span>
      </div>

      {/* Verified Academic Metrics */}
      {edu.metrics && edu.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3 pt-2 border-t border-border-subtle/60">
          {edu.metrics.map((m) => (
            <div
              key={m.label}
              className="p-2 rounded-xs bg-canvas-base/60 border border-border-subtle font-mono text-xs"
            >
              <div className="text-[10px] text-content-dim uppercase">{m.label}</div>
              <div className="font-bold text-brand-emerald">{m.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Capstone Highlight (if applicable) */}
      {edu.capstone && (
        <div className="p-2.5 rounded-sm bg-brand-indigo/10 border border-brand-indigo/30 mb-3 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
          <div className="font-mono text-xs">
            <span className="text-brand-indigo font-bold">CAPSTONE PROJECT: </span>
            <span className="text-content-primary">{edu.capstone}</span>
          </div>
        </div>
      )}

      {/* Academic Focus */}
      <p className="font-sans text-xs sm:text-[13px] text-content-secondary leading-relaxed pt-1">
        {edu.focus}
      </p>
    </article>
  );
};
