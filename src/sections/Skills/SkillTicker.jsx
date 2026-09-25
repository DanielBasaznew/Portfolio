import React from 'react';

const HIGHLIGHT_SKILLS = [
  { name: 'Model Context Protocol (MCP)', category: 'AGENT PROTOCOL', color: 'text-brand-indigo' },
  { name: 'CrewAI Multi-Agent', category: 'ORCHESTRATION', color: 'text-brand-cyan' },
  { name: 'RAG Architecture', category: 'RETRIEVAL', color: 'text-brand-emerald' },
  { name: 'React 19 & Next.js', category: 'FRONTEND', color: 'text-brand-cyan' },
  { name: 'Python & FastAPI', category: 'BACKEND', color: 'text-brand-indigo' },
  { name: 'ChromaDB & Vector Search', category: 'MEMORY', color: 'text-brand-emerald' },
  { name: 'Docker & CI/CD', category: 'DEVOPS', color: 'text-brand-cyan' },
  { name: 'n8n & Workflow Automation', category: 'AUTOMATION', color: 'text-brand-amber' },
  { name: 'LangChain & Agent Tools', category: 'AI AGENTS', color: 'text-brand-indigo' },
  { name: 'PostgreSQL & SQLite', category: 'DATABASES', color: 'text-brand-emerald' },
  { name: 'IoT & Edge Firmware', category: 'EMBEDDED', color: 'text-brand-indigo' },
  { name: 'Cursor AI & CodeOps', category: 'ENGINEERING', color: 'text-brand-cyan' },
];

export const SkillTicker = () => {
  // Duplicate array for seamless infinite marquee loop
  const displayItems = [...HIGHLIGHT_SKILLS, ...HIGHLIGHT_SKILLS];

  return (
    <div
      className="relative w-full overflow-hidden border-y border-border-subtle bg-surface-elevated/30 py-3 my-10 backdrop-blur-xs select-none"
      aria-label="Moving Technical Toolkit Marquee"
    >
      {/* Side gradient fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-canvas-base to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-canvas-base to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-6 font-mono text-xs">
        {displayItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            data-cursor="skill"
            className="flex items-center gap-3 shrink-0 px-3 py-1.5 rounded-sm bg-surface-card/60 border border-border-subtle hover:border-brand-indigo/40 hover:bg-surface-elevated transition-all duration-150 group"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')} group-hover:animate-ping`} />
            <span className="font-semibold text-content-primary group-hover:text-white transition-colors">
              {item.name}
            </span>
            <span className="text-[9.5px] px-1.5 py-0.5 rounded-xs bg-canvas-base border border-border-subtle text-content-muted uppercase tracking-wider font-medium">
              {item.category}
            </span>
            <span className="text-border-medium ml-2">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
