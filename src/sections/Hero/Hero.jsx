import React, { useRef } from 'react';
import { ArrowDown, Cpu, Layers, Workflow } from 'lucide-react';
import { GithubIcon } from '../../components/icons/GithubIcon';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { TelemetryHUD } from './TelemetryHUD';

const CAPABILITIES = [
  {
    icon: <Cpu className="w-4 h-4 text-brand-indigo" />,
    title: 'AI Systems',
    desc: 'Agentic AI, MCP, RAG, tool calling, session memory, observability.',
    spotlightColor: 'indigo',
  },
  {
    icon: <Layers className="w-4 h-4 text-brand-cyan" />,
    title: 'Full Stack',
    desc: 'React, Next.js, modern REST & streaming APIs, scalable databases.',
    spotlightColor: 'cyan',
  },
  {
    icon: <Workflow className="w-4 h-4 text-brand-emerald" />,
    title: 'Automation',
    desc: 'Enterprise workflow automation and measurable operational efficiency.',
    spotlightColor: 'emerald',
  },
];

const PROOF_METRICS = [
  {
    value: '80%+',
    label: 'Manual Workload Reduction',
    context: 'Enterprise workflow automation at Twinkle',
  },
  {
    value: '25+',
    label: 'Regional Channels Automated',
    context: 'Multi-market dispatch pipelines at PKF',
  },
  {
    value: '42+',
    label: 'Agent System Tests',
    context: 'Automated evaluation & regression test suites',
  },
];

export const Hero = () => {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = heroRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--hero-x', `${x}px`);
    el.style.setProperty('--hero-y', `${y}px`);
    el.style.setProperty('--hero-opacity', '1');

    // Subtle magnetic tilt for decorative accents (-1 to 1 normalized, 3-4px max)
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;
    el.style.setProperty('--hero-tilt-x', `${(normX * 4).toFixed(1)}px`);
    el.style.setProperty('--hero-tilt-y', `${(normY * 4).toFixed(1)}px`);
  };

  const handleMouseLeave = () => {
    const el = heroRef.current;
    if (!el) return;
    el.style.setProperty('--hero-opacity', '0');
    el.style.setProperty('--hero-tilt-x', '0px');
    el.style.setProperty('--hero-tilt-y', '0px');
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Introduction & Architecture Overview"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Subtle radial ambient glow behind hero headline */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-indigo/8 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 w-[450px] h-[450px] bg-brand-emerald/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Ambient Cursor-Reactive Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 overflow-hidden"
        style={{
          opacity: 'var(--hero-opacity, 0)',
          background: 'radial-gradient(650px circle at var(--hero-x, 50%) var(--hero-y, 40%), rgba(99, 102, 241, 0.08), rgba(56, 189, 248, 0.035) 40%, transparent 70%)',
          willChange: 'opacity',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Main Hero Grid: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Identity & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* System Status Micro-Label */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated/80 border border-border-subtle font-mono text-xs tracking-wider text-content-secondary select-none transition-transform duration-200 ease-out"
              style={{
                transform: 'translate3d(calc(var(--hero-tilt-x, 0px) * 0.25), calc(var(--hero-tilt-y, 0px) * 0.25), 0)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span>SYSTEM STATUS / AI ENGINEERING</span>
              <span className="text-content-dim font-mono">v2.5</span>
            </div>

            {/* Primary Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-content-primary leading-[1.08] font-sans">
                Full Stack <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald">
                  AI Engineer
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-content-secondary font-sans leading-relaxed max-w-2xl font-normal">
                Architecting production-grade AI systems, full-stack applications, and enterprise automation.
              </p>
            </div>

            {/* Three Major Engineering Pillars (Cursor-reactive SpotlightCards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {CAPABILITIES.map((cap) => (
                <SpotlightCard
                  key={cap.title}
                  spotlightColor={cap.spotlightColor}
                  contentClassName="p-3"
                  className="rounded-sm bg-surface-card border-border-subtle"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="p-1 rounded-xs bg-surface-elevated border border-border-subtle group-hover:border-border-medium transition-colors">
                      {cap.icon}
                    </span>
                    <span className="font-sans font-semibold text-content-primary text-sm">
                      {cap.title}
                    </span>
                  </div>
                  <p className="text-xs text-content-secondary leading-snug">
                    {cap.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                icon={<ArrowDown className="w-4 h-4" />}
                iconPosition="right"
                className="font-medium"
              >
                View Projects
              </Button>
              <Button
                href="https://github.com/DanielBasaznew"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                icon={<GithubIcon className="w-4 h-4" />}
                iconPosition="left"
              >
                GitHub Profile
              </Button>
            </div>

            {/* Proof Metrics Row */}
            <div className="pt-6 border-t border-border-subtle/70">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PROOF_METRICS.map((metric) => (
                  <div key={metric.label} className="space-y-0.5">
                    <div className="font-mono text-2xl font-bold text-content-primary tracking-tight text-brand-cyan">
                      {metric.value}
                    </div>
                    <div className="font-sans font-medium text-xs text-content-primary leading-tight">
                      {metric.label}
                    </div>
                    <div className="font-mono text-[10.5px] text-content-dim leading-tight">
                      {metric.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Telemetry HUD */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Subtle visual accent markers responding slightly to cursor */}
              <div
                className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-brand-indigo/40 pointer-events-none hidden sm:block transition-transform duration-200 ease-out"
                style={{
                  transform: 'translate3d(calc(var(--hero-tilt-x, 0px) * 0.7), calc(var(--hero-tilt-y, 0px) * 0.7), 0)',
                }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-brand-emerald/40 pointer-events-none hidden sm:block transition-transform duration-200 ease-out"
                style={{
                  transform: 'translate3d(calc(var(--hero-tilt-x, 0px) * -0.7), calc(var(--hero-tilt-y, 0px) * -0.7), 0)',
                }}
                aria-hidden="true"
              />

              <TelemetryHUD />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

