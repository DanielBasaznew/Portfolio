import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

/**
 * ExperienceCard component
 * Data-dense, editorial timeline card for verified engineering roles.
 */
export const ExperienceCard = ({ experience }) => {
  return (
    <article
      className={`rounded-md p-4 sm:p-6 transition-all duration-200 border ${
        experience.isCurrent
          ? 'bg-surface-card/95 border-brand-indigo/40 shadow-card hover:border-brand-indigo/60'
          : 'bg-surface-card/80 border-border-medium hover:border-border-strong hover:bg-surface-card'
      }`}
      aria-labelledby={`exp-title-${experience.id}`}
    >
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-border-subtle font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-brand-indigo">{experience.index}</span>
          <span className="text-border-medium">/</span>
          <span className="px-2 py-0.5 rounded-xs bg-surface-elevated border border-border-subtle text-content-secondary uppercase text-[10.5px] font-semibold tracking-wider">
            {experience.category}
          </span>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-1.5 text-[10.5px] font-mono">
          {experience.isCurrent ? (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-semibold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
              <span>{experience.statusLabel}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-content-dim uppercase">
              <span>{experience.statusLabel}</span>
            </span>
          )}
        </div>
      </div>

      {/* Role Title & Organization */}
      <div className="mb-4">
        <h3
          id={`exp-title-${experience.id}`}
          className="text-lg sm:text-xl font-bold font-sans tracking-tight text-white mb-1"
        >
          {experience.role}
        </h3>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs text-content-secondary">
          <div className="flex items-center gap-1.5 text-content-primary font-semibold">
            <Building2 className="w-3.5 h-3.5 text-brand-indigo" />
            <span>{experience.organization}</span>
          </div>

          <div className="flex items-center gap-1 text-content-dim">
            <Calendar className="w-3.5 h-3.5" />
            <span>{experience.period}</span>
          </div>

          <div className="flex items-center gap-1 text-content-dim">
            <MapPin className="w-3.5 h-3.5" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Role Summary */}
      <p className="font-sans text-xs sm:text-[13.5px] text-content-secondary leading-relaxed mb-4">
        {experience.summary}
      </p>

      {/* Key Responsibilities */}
      <div className="space-y-1.5 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-content-muted font-semibold block mb-1">
          KEY CONTRIBUTIONS & RESPONSIBILITIES
        </span>
        <ul className="space-y-1.5">
          {experience.responsibilities.map((resp, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs sm:text-[13px] text-content-secondary leading-snug font-sans"
            >
              <span className="font-mono text-brand-cyan text-[10px] leading-tight shrink-0 mt-0.5">
                ▹
              </span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Verified Impact Chips (if available) */}
      {experience.verifiedImpact && experience.verifiedImpact.length > 0 && (
        <div className="pt-2 mb-4 border-t border-border-subtle/60">
          <span className="font-mono text-[10px] uppercase tracking-widest text-content-muted font-semibold block mb-1.5">
            VERIFIED IMPACT
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {experience.verifiedImpact.map((item) => (
              <div
                key={item.label}
                className="p-2 rounded-xs bg-canvas-base/60 border border-border-subtle font-mono text-[10.5px]"
              >
                <div className="font-bold text-brand-emerald">{item.label}</div>
                <div className="text-content-dim text-[9.5px] leading-tight mt-0.5 truncate">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies / Systems Pills */}
      <div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-content-muted font-semibold block mb-1.5">
          TECHNOLOGIES & SYSTEMS
        </span>
        <div className="flex flex-wrap gap-1">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-0.5 rounded-xs bg-surface-elevated border border-border-subtle text-content-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
