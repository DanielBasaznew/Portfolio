import React from 'react';
import { CERTIFICATIONS } from '../../data/certifications';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

/**
 * CertificationRegistry component
 * High-density technical registry of verified credentials and specializations.
 */
export const CertificationRegistry = ({ className = '' }) => {
  return (
    <div
      className={`rounded-md p-4 sm:p-6 bg-surface-card/90 border border-border-medium backdrop-blur-md shadow-card ${className}`}
      aria-label="Verified Technical Credentials Registry"
    >
      {/* Registry Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-6 border-b border-border-subtle font-mono text-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-emerald" />
          <span className="font-semibold text-content-primary tracking-wider text-[11px]">
            CREDENTIAL REGISTRY // VERIFIED TECHNICAL SPECIALIZATIONS ({CERTIFICATIONS.length})
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-xs bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-semibold uppercase">
          INDUSTRY ACCREDITED
        </span>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="p-3 rounded-sm bg-surface-elevated/50 border border-border-subtle/80 hover:border-brand-indigo/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] mb-1.5">
                <span className="font-bold text-brand-indigo">{cert.index}</span>
                <span className="px-1.5 py-0.5 rounded-xs bg-surface-card border border-border-subtle text-content-dim uppercase text-[9px] font-semibold">
                  {cert.category}
                </span>
              </div>

              <div className="font-sans font-semibold text-content-primary text-xs sm:text-[13px] leading-snug mb-1">
                {cert.title}
              </div>

              <div className="font-mono text-[11px] text-content-secondary mb-2">
                {cert.issuer}
                <span className="text-border-medium mx-1">·</span>
                <span className="text-content-dim">{cert.platform}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-border-subtle/50 flex items-center justify-between font-mono text-[10px]">
              {cert.credentialId ? (
                <span className="text-brand-cyan truncate">
                  ID: {cert.credentialId}
                </span>
              ) : (
                <span className="text-content-dim">CREDENTIAL VERIFIED</span>
              )}
              <span className="inline-flex items-center gap-1 text-brand-emerald font-semibold shrink-0">
                <CheckCircle2 className="w-3 h-3" />
                <span>VERIFIED</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
