import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Activity,
  Cpu,
  ShieldCheck,
  Database,
  Radio,
  Play,
  Pause,
} from 'lucide-react';

const INITIAL_TRACES = [
  { id: 1, time: '12:41:03', type: 'MCP', event: 'tool request: execute_db_query', status: 'OK', color: 'text-brand-cyan' },
  { id: 2, time: '12:41:04', type: 'RAG', event: 'chromadb vector retrieval [top_k=5]', status: 'OK', color: 'text-brand-indigo' },
  { id: 3, time: '12:41:04', type: 'AGENT', event: 'tool execution + schema verification', status: 'PASS', color: 'text-brand-emerald' },
  { id: 4, time: '12:41:05', type: 'OBSERVE', event: 'langfuse trace recorded [240ms | 412 tok]', status: '200', color: 'text-brand-amber' },
  { id: 5, time: '12:41:06', type: 'GUARD', event: 'circuit breaker check: 0 anomalies', status: 'PASS', color: 'text-brand-emerald' },
  { id: 6, time: '12:41:07', type: 'OUTPUT', event: 'streaming verified tokens to client', status: 'DONE', color: 'text-brand-cyan' },
];

export const TelemetryHUD = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const hudRef = useRef(null);

  // Cycling trace stream animation (respects user control and prefers-reduced-motion)
  useEffect(() => {
    if (!isPlaying) return;

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % INITIAL_TRACES.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = hudRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--hud-x', `${x}px`);
    el.style.setProperty('--hud-y', `${y}px`);
    el.style.setProperty('--hud-opacity', '1');

    // Subtle 3D tilt: max ±1.5 deg
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;
    el.style.setProperty('--hud-rotate-y', `${(normX * 1.5).toFixed(2)}deg`);
    el.style.setProperty('--hud-rotate-x', `${(-normY * 1.5).toFixed(2)}deg`);
  };

  const handleMouseLeave = () => {
    const el = hudRef.current;
    if (!el) return;
    el.style.setProperty('--hud-opacity', '0');
    el.style.setProperty('--hud-rotate-y', '0deg');
    el.style.setProperty('--hud-rotate-x', '0deg');
  };

  return (
    <div
      ref={hudRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: 'perspective(1000px) rotateX(var(--hud-rotate-x, 0deg)) rotateY(var(--hud-rotate-y, 0deg))',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
      }}
      className={`relative rounded-md border border-border-medium bg-surface-card/90 backdrop-blur-md shadow-card overflow-hidden font-mono text-xs select-none hover:border-brand-indigo/50 hover:shadow-card-hover ${className}`}
      aria-label="Engineering Architecture Telemetry Console"
    >
      {/* Holographic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity: 'var(--hud-opacity, 0)',
          background: 'radial-gradient(380px circle at var(--hud-x, 50%) var(--hud-y, 50%), rgba(56, 189, 248, 0.08), transparent 75%)',
          willChange: 'opacity',
        }}
        aria-hidden="true"
      />

      {/* Console Top Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-surface-elevated/70 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          {/* Decorative Terminal Dots */}
          <div className="flex items-center gap-1.5 mr-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-border-strong/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-border-strong/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-border-strong/60" />
          </div>
          <div className="flex items-center gap-1.5 text-content-primary font-semibold tracking-wider text-[11px]">
            <Terminal className="w-3.5 h-3.5 text-brand-indigo" />
            <span>AI ENGINE RUNTIME SYSTEM</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-[10px] tracking-widest font-semibold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
            SIMULATION ONLINE
          </span>
        </div>
      </div>

      {/* Main HUD Body */}
      <div className="p-3.5 sm:p-4 space-y-3">
        {/* Row 1: Protocol & Agent Runtime */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Protocol Panel */}
          <div className="p-2.5 rounded-sm bg-surface-elevated/40 border border-border-subtle/80 hover:border-border-medium transition-colors">
            <div className="flex items-center justify-between text-content-muted text-[10px] uppercase tracking-wider mb-1.5">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-brand-cyan" />
                PROTOCOL INTERFACE
              </span>
              <span className="text-brand-emerald font-semibold">CONNECTED</span>
            </div>
            <div className="font-semibold text-content-primary text-[11px] mb-1">
              MCP STDIO TRANSPORT
            </div>
            <div className="text-[10px] text-content-secondary flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 rounded-xs bg-surface-card border border-border-subtle text-content-muted">
                tools: 8 active
              </span>
              <span className="px-1.5 py-0.5 rounded-xs bg-surface-card border border-border-subtle text-content-muted">
                resources: stdio
              </span>
            </div>
          </div>

          {/* Agent Panel */}
          <div className="p-2.5 rounded-sm bg-surface-elevated/40 border border-border-subtle/80 hover:border-border-medium transition-colors">
            <div className="flex items-center justify-between text-content-muted text-[10px] uppercase tracking-wider mb-1.5">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-brand-indigo" />
                AGENT EXECUTION
              </span>
              <span className="text-brand-indigo font-semibold">DYNAMIC</span>
            </div>
            <div className="font-semibold text-content-primary text-[11px] mb-1">
              AUTONOMOUS RUNTIME
            </div>
            <div className="text-[10px] text-content-secondary flex flex-wrap gap-1">
              <span className="px-1.5 py-0.2 rounded-xs bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo">
                TOOL CALLING
              </span>
              <span className="px-1.5 py-0.2 rounded-xs bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                MEMORY
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Vector Memory, Reliability & Observability */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {/* Vector Memory */}
          <div className="p-2.5 rounded-sm bg-surface-elevated/40 border border-border-subtle/80 hover:border-border-medium transition-colors">
            <div className="flex items-center gap-1 text-content-muted text-[10px] uppercase tracking-wider mb-1">
              <Database className="w-3 h-3 text-brand-indigo" />
              <span>MEMORY</span>
            </div>
            <div className="text-[11px] font-semibold text-content-primary">ChromaDB</div>
            <div className="text-[10px] text-brand-emerald">Semantic Ready</div>
          </div>

          {/* Reliability */}
          <div className="p-2.5 rounded-sm bg-surface-elevated/40 border border-border-subtle/80 hover:border-border-medium transition-colors">
            <div className="flex items-center gap-1 text-content-muted text-[10px] uppercase tracking-wider mb-1">
              <ShieldCheck className="w-3 h-3 text-brand-emerald" />
              <span>RELIABILITY</span>
            </div>
            <div className="text-[11px] font-semibold text-content-primary">Guardrails</div>
            <div className="text-[10px] text-content-secondary">Circuit Breakers</div>
          </div>

          {/* Observability */}
          <div className="p-2.5 rounded-sm bg-surface-elevated/40 border border-border-subtle/80 hover:border-border-medium transition-colors">
            <div className="flex items-center gap-1 text-content-muted text-[10px] uppercase tracking-wider mb-1">
              <Activity className="w-3 h-3 text-brand-amber" />
              <span>OBSERVABILITY</span>
            </div>
            <div className="text-[11px] font-semibold text-content-primary">Langfuse</div>
            <div className="text-[10px] text-content-secondary">240ms · 412 tok</div>
          </div>
        </div>

        {/* Trace Stream Section */}
        <div className="pt-2 border-t border-border-subtle">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-content-muted font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                SIMULATED EVENT LOG
              </span>
              <span className="text-[10px] text-content-muted font-normal">
                (illustrative telemetry demo)
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause telemetry animation' : 'Resume telemetry animation'}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-xs text-[10px] text-content-muted hover:text-content-primary bg-surface-elevated border border-border-subtle hover:border-border-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-2.5 h-2.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-2.5 h-2.5" />
                  <span>Play</span>
                </>
              )}
            </button>
          </div>

          {/* Event Stream Terminal Window */}
          <div className="rounded-sm bg-canvas-base/80 border border-border-subtle p-2 space-y-1 overflow-hidden">
            {INITIAL_TRACES.map((trace, idx) => {
              const isCurrent = idx === activeStep;
              return (
                <div
                  key={trace.id}
                  className={`flex items-center justify-between text-[10.5px] py-1 px-2 rounded-xs transition-colors duration-200 ${
                    isCurrent
                      ? 'bg-surface-elevated/80 text-content-primary border-l-2 border-brand-indigo'
                      : 'text-content-muted hover:text-content-secondary'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-content-muted shrink-0 font-medium">[{trace.time}]</span>
                    <span className={`font-semibold shrink-0 ${trace.color}`}>
                      {trace.type}
                    </span>
                    <span className="truncate">{trace.event}</span>
                  </div>
                  <span
                    className={`shrink-0 ml-2 font-semibold ${
                      trace.status === 'OK' || trace.status === 'PASS' || trace.status === 'DONE'
                        ? 'text-brand-emerald'
                        : 'text-content-secondary'
                    }`}
                  >
                    {trace.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Diagnostic Bar */}
        <div className="pt-2 flex items-center justify-between text-[10px] text-content-muted border-t border-border-subtle/50">
          <div className="flex items-center gap-3">
            <span>ARCH: AGENTIC-RAG</span>
            <span className="hidden sm:inline">STACK: FASTAPI · REACT</span>
          </div>
          <div className="flex items-center gap-1.5 text-content-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
            <span>INTEGRITY 100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
