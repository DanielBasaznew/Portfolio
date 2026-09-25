import React from 'react';
import { Cog, Briefcase, Code2, Brain, GitMerge, ArrowDown } from 'lucide-react';

const PILLARS = [
  {
    id: 'p1',
    num: '01',
    title: 'Mechanical Engineering',
    tag: 'PHYSICAL SYSTEMS & RIGOR',
    icon: <Cog className="w-4 h-4 text-brand-indigo" />,
    borderColor: 'border-brand-indigo/30 hover:border-brand-indigo/60',
    accentColor: 'text-brand-indigo',
    bgGlow: 'group-hover:bg-brand-indigo/5',
    concepts: ['Systems thinking', 'Physical systems modeling', 'Engineering discipline', 'CAD & IoT foundations'],
  },
  {
    id: 'p2',
    num: '02',
    title: 'Business & Operations',
    tag: 'OPERATIONAL VALUE',
    icon: <Briefcase className="w-4 h-4 text-brand-cyan" />,
    borderColor: 'border-brand-cyan/30 hover:border-brand-cyan/60',
    accentColor: 'text-brand-cyan',
    bgGlow: 'group-hover:bg-brand-cyan/5',
    concepts: ['Process automation', 'Workflow optimization', 'Stakeholder communication', 'Business ROI focus'],
  },
  {
    id: 'p3',
    num: '03',
    title: 'Software Engineering',
    tag: 'ROBUST ARCHITECTURE',
    icon: <Code2 className="w-4 h-4 text-brand-emerald" />,
    borderColor: 'border-brand-emerald/30 hover:border-brand-emerald/60',
    accentColor: 'text-brand-emerald',
    bgGlow: 'group-hover:bg-brand-emerald/5',
    concepts: ['React & Next.js full stack', 'High-throughput APIs', 'Databases (SQL/NoSQL)', 'Automated CI/CD & QA'],
  },
  {
    id: 'p4',
    num: '04',
    title: 'AI Engineering',
    tag: 'COGNITIVE SYSTEMS',
    icon: <Brain className="w-4 h-4 text-brand-amber" />,
    borderColor: 'border-brand-amber/30 hover:border-brand-amber/60',
    accentColor: 'text-brand-amber',
    bgGlow: 'group-hover:bg-brand-amber/5',
    concepts: ['Agentic AI & tool calling', 'Model Context Protocol (MCP)', 'RAG & Vector stores (ChromaDB)', 'Langfuse observability'],
  },
];

/**
 * Visual Architectural Convergence Model
 * Represents the convergence of Daniel's 4 core engineering foundations
 * into Full Stack AI Engineering.
 */
export const ConvergenceDiagram = ({ className = '' }) => {
  return (
    <div
      className={`relative p-4 sm:p-6 rounded-md bg-surface-card/90 border border-border-medium backdrop-blur-md shadow-card font-mono select-none ${className}`}
      aria-label="Systems Engineering Convergence Architecture"
    >
      {/* Console Top Header */}
      <div className="flex items-center justify-between pb-3 mb-5 border-b border-border-subtle text-xs">
        <div className="flex items-center gap-2">
          <GitMerge className="w-4 h-4 text-brand-indigo" />
          <span className="font-semibold text-content-primary tracking-wider text-[11px]">
            CONVERGENCE_MATRIX // ARCHITECTURE
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-xs bg-brand-indigo/10 border border-brand-indigo/30 text-brand-indigo font-semibold uppercase">
          4 FOUNDATIONS → 1 DISCIPLINE
        </span>
      </div>

      {/* Grid of the 4 Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className={`group p-3 rounded-sm bg-surface-elevated/50 border ${pillar.borderColor} ${pillar.bgGlow} transition-all duration-200`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`text-[10px] font-bold ${pillar.accentColor}`}>
                PILLAR {pillar.num}
              </span>
              <span className="p-1 rounded-xs bg-surface-card border border-border-subtle">
                {pillar.icon}
              </span>
            </div>

            <div className="font-sans font-semibold text-content-primary text-xs sm:text-sm tracking-tight mb-1">
              {pillar.title}
            </div>

            <div className="text-[9.5px] uppercase tracking-wider text-content-dim mb-2">
              {pillar.tag}
            </div>

            <ul className="space-y-1 text-[10.5px] text-content-secondary">
              {pillar.concepts.map((concept) => (
                <li key={concept} className="flex items-start gap-1.5 leading-snug">
                  <span className="text-content-dim text-[10px] leading-tight">•</span>
                  <span>{concept}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Connecting Convergence Bus & Junction */}
      <div className="relative py-2 flex flex-col items-center justify-center">
        {/* Subtle Horizontal Circuit Line on larger screens */}
        <div className="hidden sm:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-brand-indigo/30 via-brand-cyan/40 to-brand-emerald/30 -translate-y-1/2" />
        
        {/* Central Pulse Junction Node */}
        <div className="relative z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border-medium shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-indigo opacity-75 duration-1000" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-indigo" />
          </span>
          <span className="text-[10px] font-mono text-content-secondary tracking-wider uppercase flex items-center gap-1">
            <span>SYNTHESIS BUS</span>
            <ArrowDown className="w-3 h-3 text-brand-indigo animate-bounce" />
          </span>
        </div>
      </div>

      {/* Final Emphasized Destination Node */}
      <div className="mt-3 p-4 rounded-sm bg-gradient-to-b from-surface-elevated to-canvas-base border border-brand-indigo/40 shadow-glow-indigo/10 relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] text-brand-indigo tracking-widest font-semibold uppercase mb-0.5">
              <span>TARGET ARCHITECTURAL CONVERGENCE</span>
            </div>
            <div className="font-sans text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <span>Full Stack AI Engineer</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-[10.5px] font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
            <span>PRODUCTION READY</span>
          </div>
        </div>

        <p className="font-sans text-xs text-content-secondary mt-2 leading-relaxed">
          Bridging mechanical systems discipline, enterprise operational workflows, and modern cloud/web architectures to deliver autonomous, observable AI systems.
        </p>
      </div>
    </div>
  );
};
