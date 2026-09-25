import React from 'react';
import {
  Brain,
  Code2,
  Database,
  Workflow,
  ShieldCheck,
  Cog,
} from 'lucide-react';

import { SpotlightCard } from '../../components/ui/SpotlightCard';

const DOMAIN_ICONS = {
  'agentic-ai': <Brain className="w-4 h-4 text-brand-indigo" />,
  'full-stack': <Code2 className="w-4 h-4 text-brand-cyan" />,
  'data-backend': <Database className="w-4 h-4 text-brand-emerald" />,
  'automation-ops': <Workflow className="w-4 h-4 text-brand-amber" />,
  'devops-delivery': <ShieldCheck className="w-4 h-4 text-brand-cyan" />,
  'engineering-iot': <Cog className="w-4 h-4 text-brand-indigo" />,
};

/**
 * SkillDomainCard component
 * Data-dense, structured technical card displaying an engineering domain,
 * its architectural role, qualitative capability level, and wrapped technology chips.
 */
export const SkillDomainCard = ({ domain, isFocused, onSelect }) => {
  const icon = DOMAIN_ICONS[domain.id] || <Code2 className="w-4 h-4 text-brand-indigo" />;

  return (
    <SpotlightCard
      as="article"
      onClick={onSelect}
      spotlightColor="indigo"
      contentClassName="p-4 sm:p-5 flex flex-col justify-between h-full"
      className={`cursor-default ${
        isFocused
          ? 'bg-surface-elevated border-brand-indigo shadow-glow-indigo/20'
          : 'border-border-medium'
      }`}
      aria-labelledby={`skill-domain-${domain.id}`}
    >
      <div>
        {/* Card Header Bar */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-border-subtle font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand-indigo">{domain.index}</span>
            <span className="text-border-medium">/</span>
            <span className="text-content-muted uppercase text-[10.5px] tracking-wider font-medium">
              {domain.subtitle}
            </span>
          </div>

          {/* Qualitative Capability Level Badge */}
          <span
            className={`font-mono text-[10px] font-semibold px-2 py-0.5 rounded-xs border tracking-wider uppercase select-none ${domain.levelColor}`}
          >
            {domain.level}
          </span>
        </div>

        {/* Title & Domain Icon */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            id={`skill-domain-${domain.id}`}
            className="text-base sm:text-lg font-bold font-sans tracking-tight text-white flex items-center gap-2"
          >
            <span>{domain.title}</span>
          </h3>
          <span className="p-1 rounded-xs bg-surface-elevated border border-border-subtle shrink-0">
            {icon}
          </span>
        </div>

        {/* Description */}
        <p className="font-sans text-xs sm:text-[13px] text-content-secondary leading-relaxed mb-4">
          {domain.description}
        </p>
      </div>

      {/* Technology Chips */}
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-content-muted font-semibold mb-2">
          VERIFIED TECHNOLOGIES ({domain.skills.length})
        </div>
        <div className="flex flex-wrap gap-1.5">
          {domain.skills.map((skill) => (
            <span
              key={skill}
              data-cursor="skill"
              className="font-mono text-[11px] px-2 py-0.5 rounded-xs bg-surface-elevated/80 border border-border-subtle/80 text-content-primary hover:border-brand-indigo/60 hover:bg-brand-indigo/15 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(99,102,241,0.25)] transition-all duration-150 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
};
