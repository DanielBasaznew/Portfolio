import React from 'react';
import { SYSTEM_COMPOSITION_FLOW } from '../../data/skills';
import { ChevronRight, Activity } from 'lucide-react';

/**
 * SystemCompositionFlow component
 * Compact architectural pipeline visualizing how Daniel's 6 technology domains
 * interconnect to form complete, autonomous production systems.
 */
export const SystemCompositionFlow = ({ className = '' }) => {
  return (
    <div
      className={`p-4 sm:p-5 rounded-md bg-surface-card/80 border border-border-medium backdrop-blur-md shadow-card font-mono text-xs select-none ${className}`}
      aria-label="Systems Architecture Request Execution Pipeline"
    >
      {/* Console Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-brand-emerald" />
          <span className="font-semibold text-content-primary tracking-wider text-[11px]">
            SYSTEM COMPOSITION // END-TO-END EXECUTION PATH
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-xs bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-semibold uppercase">
          CONNECTED ARCHITECTURE
        </span>
      </div>

      {/* Pipeline Grid on Desktop, Stepper on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
        {SYSTEM_COMPOSITION_FLOW.map((node, idx) => (
          <div
            key={node.step}
            className="p-3 rounded-sm bg-surface-elevated/50 border border-border-subtle/80 flex flex-col justify-between relative group hover:border-brand-indigo/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-1 text-[10px]">
                <span className="font-bold text-brand-indigo">{node.step}</span>
                <span className="text-content-muted uppercase text-[10px] tracking-wider font-medium">
                  LAYER
                </span>
              </div>

              <div className="font-sans font-semibold text-content-primary text-xs mb-1">
                {node.layer}
              </div>

              <div className="font-mono text-[11px] font-medium text-brand-cyan mb-1.5">
                {node.tech}
              </div>
            </div>

            <div className="font-sans text-[10.5px] text-content-secondary leading-snug pt-1 border-t border-border-subtle/50">
              {node.role}
            </div>

            {/* Desktop Horizontal Arrow to Next Node */}
            {idx < SYSTEM_COMPOSITION_FLOW.length - 1 && (
              <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center pointer-events-none text-border-medium">
                <ChevronRight className="w-3.5 h-3.5 text-border-strong" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Diagnostic Note */}
      <div className="mt-4 pt-2.5 flex items-center justify-between text-[10px] text-content-dim border-t border-border-subtle/60">
        <span>ARCHITECTURE: MODULAR DECOUPLED SERVICES</span>
        <span className="text-content-muted">ZERO DISCONNECTED SILOS</span>
      </div>
    </div>
  );
};
