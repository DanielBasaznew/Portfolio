import React from 'react';
import {
  Terminal,
  Activity,
  Cpu,
  Database,
  Radio,
  ShieldCheck,
  Workflow,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from '../../components/icons/GithubIcon';
import { Button } from '../../components/ui/Button';

/**
 * FeaturedProjectCard component
 * Heroic two-column case-study card for Flagship Project 01: AI Engineering Assistant
 * with an interactive architectural topology visualization.
 */
export const FeaturedProjectCard = ({ project }) => {
  return (
    <article
      data-cursor="project"
      className="relative rounded-md bg-surface-card/90 border border-brand-indigo/30 backdrop-blur-md shadow-card overflow-hidden group hover:border-brand-indigo/50 transition-all duration-200"
      aria-labelledby="featured-project-title"
    >
      {/* Top Banner Stripe */}
      <div className="h-1 bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald" />

      {/* Card Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 bg-surface-elevated/70 border-b border-border-subtle font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-brand-indigo text-sm">
            {project.index} // FLAGSHIP SYSTEM
          </span>
          <span className="text-border-medium">|</span>
          <span className="px-2 py-0.5 rounded-xs bg-brand-indigo/10 border border-brand-indigo/30 text-brand-indigo font-semibold text-[11px] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-brand-emerald font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
          <span>PRODUCTION-ORIENTED ARCHITECTURE</span>
        </div>
      </div>

      {/* Main Grid: 2 Columns on Desktop */}
      <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Case Study Breakdown & Actions (Sticky on Desktop) */}
        <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-28 self-start">
          <div>
            <h3
              id="featured-project-title"
              className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-white mb-2"
            >
              {project.title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-content-secondary leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="space-y-4">
            <div className="p-3.5 rounded-sm bg-surface-elevated/50 border border-border-subtle/80">
              <div className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-widest text-brand-cyan font-semibold mb-1">
                <span>01 // PROBLEM</span>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-content-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-3.5 rounded-sm bg-surface-elevated/50 border border-brand-indigo/30">
              <div className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-widest text-brand-indigo font-semibold mb-1">
                <span>02 // SYSTEM RESPONSE</span>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-content-primary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technology Stack Pills */}
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-widest text-content-muted font-semibold mb-2">
              STACK & DEPENDENCIES
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded-xs bg-surface-elevated/70 border border-border-subtle text-content-primary hover:border-brand-indigo/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Proof Metrics */}
          <div className="pt-2">
            <div className="font-mono text-[10.5px] uppercase tracking-widest text-content-muted font-semibold mb-2">
              VERIFIED PROOF POINTS
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {project.proofPoints.map((pt) => (
                <div
                  key={pt.label}
                  className="p-2.5 rounded-sm bg-canvas-base/60 border border-border-subtle flex flex-col justify-between"
                >
                  <div className="font-mono text-xs font-bold text-brand-emerald">
                    {pt.label}
                  </div>
                  <div className="font-mono text-[10.5px] text-content-muted mt-0.5 leading-snug">
                    {pt.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.links.github && (
              <Button
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={<GithubIcon className="w-4 h-4" />}
                iconPosition="left"
              >
                View GitHub Repository
              </Button>
            )}
          </div>
        </div>

        {/* Right Column: Abstract Architecture Topology Console */}
        <div className="lg:col-span-6 w-full">
          <div
            className="p-4 sm:p-5 rounded-md bg-canvas-base/90 border border-border-medium font-mono text-xs space-y-4 shadow-sm select-none"
            aria-label="Agent Runtime Architecture Topology"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-brand-indigo" />
                <span className="font-semibold text-content-primary tracking-wider text-[11px]">
                  SYSTEM_TOPOLOGY // MCP_AGENT_RUNTIME
                </span>
              </div>
              <span className="text-[10px] text-content-muted font-medium">
                SPEC: MCP-STDIO-v1
              </span>
            </div>

            {/* Architecture Node Diagram */}
            <div className="space-y-3">
              {/* Level 1: Client Ingestion & Reasoning */}
              <div className="p-3 rounded-sm bg-surface-elevated/70 border border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-cyan" />
                  <div>
                    <div className="font-semibold text-content-primary text-[11.5px]">
                      AGENT REASONING CORE
                    </div>
                    <div className="text-[10px] text-content-muted">
                      Gemini API · CrewAI Tool Router
                    </div>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded-xs bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-[10px] font-semibold">
                  AUTONOMOUS
                </span>
              </div>

              {/* Connecting Down Arrow */}
              <div className="flex items-center justify-center -my-1 text-content-muted text-[10px]">
                <span>↓ STDIO PROTOCOL RPC</span>
              </div>

              {/* Level 2: MCP Central Transport Bus */}
              <div className="p-3 rounded-sm bg-brand-indigo/10 border border-brand-indigo/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-brand-indigo animate-pulse" />
                  <div>
                    <div className="font-semibold text-white text-[11.5px]">
                      MODEL CONTEXT PROTOCOL (MCP BUS)
                    </div>
                    <div className="text-[10px] text-content-secondary">
                      Standardized Tool Discovery & Stdio Pipe
                    </div>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded-xs bg-brand-indigo/20 border border-brand-indigo/40 text-brand-indigo text-[10px] font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Level 3: Dual Execution Wings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Retrieval Wing */}
                <div className="p-2.5 rounded-sm bg-surface-elevated/50 border border-border-subtle">
                  <div className="flex items-center gap-1.5 text-content-muted text-[10px] uppercase font-semibold mb-1">
                    <Database className="w-3 h-3 text-brand-indigo" />
                    <span>SEMANTIC MEMORY</span>
                  </div>
                  <div className="font-semibold text-content-primary text-[11px]">
                    ChromaDB Vector Store
                  </div>
                  <div className="text-[10px] text-content-muted">
                    SentenceTransformers · PyMuPDF
                  </div>
                </div>

                {/* Execution Wing */}
                <div className="p-2.5 rounded-sm bg-surface-elevated/50 border border-border-subtle">
                  <div className="flex items-center gap-1.5 text-content-muted text-[10px] uppercase font-semibold mb-1">
                    <Workflow className="w-3 h-3 text-brand-emerald" />
                    <span>LOCAL TOOLS</span>
                  </div>
                  <div className="font-semibold text-content-primary text-[11px]">
                    SQLite Engine & Code Runner
                  </div>
                  <div className="text-[10px] text-content-muted">
                    Deterministic sandbox boundary
                  </div>
                </div>
              </div>

              {/* Level 4: Observability & Resilience Subsystem */}
              <div className="p-2.5 rounded-sm bg-surface-elevated/40 border border-border-subtle/80 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
                  <span className="text-[10.5px] text-content-secondary">
                    Tenacity Circuit Breakers & Retries
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-brand-amber" />
                  <span className="text-[10.5px] text-content-secondary">
                    Langfuse Tracing (240ms · 412 tok)
                  </span>
                </div>
              </div>
            </div>

            {/* Diagnostic Footer */}
            <div className="pt-2 flex items-center justify-between text-[10px] text-content-muted border-t border-border-subtle/60">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-brand-emerald" />
                <span>42/42 TEST SUITES PASSING</span>
              </div>
              <span>REGRESSION VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
