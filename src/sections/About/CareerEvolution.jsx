import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SpotlightCard } from '../../components/ui/SpotlightCard';

const STAGES = [
  {
    step: '01',
    label: 'Engineering & Business',
    sub: 'ASTU Mechanical Eng (Great Distinction) & Harambee Marketing (Degree)',
  },
  {
    step: '02',
    label: 'AI/ML Self-Development',
    sub: 'DeepLearning.AI (Andrew Ng), Deep Learning & GenAI during engineering',
  },
  {
    step: '03',
    label: 'Practical AI & Automation',
    sub: 'AquaSense AI (ASTU A+), PKF (25+ channels), CodSoft ML',
  },
  {
    step: '04',
    label: 'Full-Stack Engineering',
    sub: 'IBT College Canada: React, Next.js, APIs, Databases, QA & CI/CD',
  },
  {
    step: '05',
    label: 'Agentic AI Systems',
    sub: 'MCP stdio, autonomous tool execution, RAG & Langfuse tracing',
  },
  {
    step: '06',
    label: 'Full Stack AI Engineer',
    sub: 'Autonomous production AI systems & scalable architectures',
    highlight: true,
  },
];

/**
 * CareerEvolution component
 * Compact narrative progression demonstrating Daniel's evolution into Full Stack AI Engineering.
 */
export const CareerEvolution = ({ className = '' }) => {
  return (
    <div
      className={`p-4 sm:p-5 rounded-md bg-surface-card/60 border border-border-subtle ${className}`}
      aria-label="Engineering Career Evolution Sequence"
    >
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-border-subtle/80">
        <span className="font-mono text-xs uppercase tracking-widest text-content-muted flex items-center gap-1.5 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
          SYSTEMS EVOLUTION TIMELINE // CHRONOLOGICAL SYNTHESIS
        </span>
        <span className="font-mono text-[10px] text-content-dim hidden sm:inline">
          PHYSICAL RIGOR → AUTONOMOUS COGNITION
        </span>
      </div>

      {/* Responsive Stages Track (Cursor-reactive SpotlightCards) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {STAGES.map((stage, idx) => (
          <SpotlightCard
            key={stage.step}
            spotlightColor={stage.highlight ? 'indigo' : 'cyan'}
            contentClassName="p-2.5 h-full flex flex-col justify-between"
            className={`rounded-sm transition-all duration-200 ${
              stage.highlight
                ? 'bg-brand-indigo/15 border-brand-indigo/50 shadow-sm'
                : 'bg-surface-elevated/40 border-border-subtle/70'
            }`}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                <span
                  className={`font-bold ${
                    stage.highlight ? 'text-brand-indigo' : 'text-content-dim'
                  }`}
                >
                  {stage.step}
                </span>
                {idx < STAGES.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-border-medium hidden lg:block" />
                )}
              </div>

              <div
                className={`font-sans text-xs font-semibold leading-snug mb-1 ${
                  stage.highlight ? 'text-white' : 'text-content-primary'
                }`}
              >
                {stage.label}
              </div>
            </div>

            <div className="font-mono text-[10px] text-content-dim leading-tight mt-1">
              {stage.sub}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

