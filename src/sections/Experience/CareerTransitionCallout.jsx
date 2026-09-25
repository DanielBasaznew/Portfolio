import React from 'react';
import { ChevronRight, Workflow } from 'lucide-react';

const TRANSITIONS = [
  {
    step: '01',
    layer: 'PHYSICAL SYSTEMS',
    domain: 'Mechanical & Industrial Operations',
    role: 'Established fundamental engineering discipline, physical tolerances, and multivariable root-cause diagnostics.',
    tagColor: 'text-brand-indigo',
    borderColor: 'border-brand-indigo/30',
  },
  {
    step: '02',
    layer: 'DIGITAL AUTOMATION',
    domain: 'Field Audit Operations',
    role: 'Exposed manual operational bottlenecks, driving the creation of programmatic data pipelines and 80%+ time savings.',
    tagColor: 'text-brand-cyan',
    borderColor: 'border-brand-cyan/30',
  },
  {
    step: '03',
    layer: 'FULL-STACK SOFTWARE',
    domain: 'Modern Web & Streaming APIs',
    role: 'Provided the deterministic execution plane, relational schema architecture, and automated CI/CD testing.',
    tagColor: 'text-brand-emerald',
    borderColor: 'border-brand-emerald/30',
  },
  {
    step: '04',
    layer: 'INTELLIGENT SYSTEMS',
    domain: 'Agentic AI & Model Context Protocol',
    role: 'Introduced the autonomous cognitive reasoning layer, dynamic tool discovery, and runtime telemetry guardrails.',
    tagColor: 'text-brand-amber',
    borderColor: 'border-brand-amber/30',
    highlight: true,
  },
];

/**
 * CareerTransitionCallout component
 * Compact architectural callout demonstrating the progression:
 * PHYSICAL SYSTEMS → DIGITAL SYSTEMS → FULL-STACK → INTELLIGENT SYSTEMS
 */
export const CareerTransitionCallout = ({ className = '' }) => {
  return (
    <div
      className={`p-5 sm:p-6 rounded-md bg-surface-card/90 border border-border-medium backdrop-blur-md shadow-card font-mono text-xs select-none ${className}`}
      aria-label="Systems Engineering Evolution Framework"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <Workflow className="w-3.5 h-3.5 text-brand-indigo" />
          <span className="font-semibold text-content-primary tracking-wider text-[11px]">
            SYSTEM TRANSITION // PHYSICAL → DIGITAL → INTELLIGENT
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-xs bg-brand-indigo/10 border border-brand-indigo/30 text-brand-indigo font-semibold uppercase">
          PROGRESSIVE ARCHITECTURE
        </span>
      </div>

      {/* 4-Stage Transition Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
        {TRANSITIONS.map((stage, idx) => (
          <div
            key={stage.step}
            className={`p-3.5 rounded-sm bg-surface-elevated/50 border ${stage.borderColor} flex flex-col justify-between relative group hover:border-brand-indigo/50 transition-colors ${
              stage.highlight ? 'bg-brand-indigo/5' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5 text-[10px]">
                <span className={`font-bold ${stage.tagColor}`}>{stage.step}</span>
                <span className="text-content-muted uppercase text-[10px] tracking-wider font-medium">
                  LAYER
                </span>
              </div>

              <div className="font-sans font-bold text-white text-xs sm:text-sm mb-1">
                {stage.layer}
              </div>

              <div className="font-mono text-[11px] text-content-muted mb-2 font-medium">
                {stage.domain}
              </div>
            </div>

            <p className="font-sans text-[11px] text-content-secondary leading-relaxed pt-2 border-t border-border-subtle/50">
              {stage.role}
            </p>

            {/* Desktop Transition Arrow */}
            {idx < TRANSITIONS.length - 1 && (
              <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center pointer-events-none text-border-medium">
                <ChevronRight className="w-3.5 h-3.5 text-border-strong" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
