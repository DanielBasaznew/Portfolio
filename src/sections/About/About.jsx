import React, { useRef } from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/ui/Container';
import { ConvergenceDiagram } from './ConvergenceDiagram';
import { CareerEvolution } from './CareerEvolution';
import { Reveal } from '../../components/motion/Reveal';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { Terminal } from 'lucide-react';

const PROOF_POINTS = [
  {
    value: '80%+',
    title: 'Workload Reduction',
    detail: 'Automated data & reporting operations at Twinkle',
  },
  {
    value: '25+',
    title: 'Channels Automated',
    detail: 'Multi-market operational pipelines at PKF',
  },
  {
    value: '42+',
    title: 'Unit & Integration',
    detail: 'Automated test suites passing across agent systems',
  },
  {
    value: 'A+',
    title: 'AquaSense AI Capstone',
    detail: 'Final Year Project — ASTU Mechanical Engineering',
  },
];

export const About = () => {
  const aboutRef = useRef(null);

  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = aboutRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--about-x', `${x}px`);
    el.style.setProperty('--about-y', `${y}px`);
    el.style.setProperty('--about-opacity', '1');
  };

  const handleMouseLeave = () => {
    const el = aboutRef.current;
    if (!el) return;
    el.style.setProperty('--about-opacity', '0');
  };

  return (
    <Section
      id="about"
      ref={aboutRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      hasDivider
      className="overflow-hidden"
    >
      {/* Subtle localized atmospheric indigo glow behind About narrative & matrix */}
      <div
        className="pointer-events-none absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)] blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Ambient Cursor-Reactive Spotlight Layer across About */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 overflow-hidden"
        style={{
          opacity: 'var(--about-opacity, 0)',
          background: 'radial-gradient(650px circle at var(--about-x, 50%) var(--about-y, 50%), rgba(99, 102, 241, 0.065), rgba(56, 189, 248, 0.025) 45%, transparent 70%)',
          willChange: 'opacity',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <Reveal direction="up" duration={600}>
          <div className="space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-indigo font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
              <span>02 // SYSTEMS ENGINEERING PROFILE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-content-primary">
              Engineering systems, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald">
                not just software.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-content-secondary max-w-3xl leading-relaxed">
              From thermodynamic constraints and mechanical rigor to enterprise automation and full-stack autonomous AI systems — how multidisciplinary engineering disciplines converged into a unified engineering identity.
            </p>
          </div>
        </Reveal>

        {/* Two-Column Grid: Left Narrative + Right Convergence Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-12">
          {/* Left Column: Core Narrative & Philosophy */}
          <Reveal direction="up" delay={80} duration={600} className="lg:col-span-6 space-y-6">
            {/* Story Block */}
            <div className="space-y-4 text-sm sm:text-base text-content-secondary font-sans leading-relaxed">
              <p>
                My foundation began in <strong className="text-content-primary font-semibold">Mechanical Engineering</strong> at Adama Science and Technology University (ASTU), graduating with <span className="text-brand-cyan font-mono text-xs px-1.5 py-0.5 rounded-xs bg-surface-elevated border border-border-subtle">Great Distinction</span>, pursued alongside a concurrent degree in <strong className="text-content-primary font-semibold">Marketing Management</strong> at Harambee University. Mechanical systems instilled relentless physical and multivariable systems rigor, while marketing management grounded technical architecture in customer satisfaction and commercial ROI.
              </p>
              
              <p>
                While still studying Mechanical Engineering, I became intensely driven by programming, machine learning, and artificial intelligence—independently completing formal specializations in <strong className="text-content-primary font-semibold">Machine Learning, Deep Learning, Generative AI, and Python</strong>, including Andrew Ng’s DeepLearning.AI curricula. I applied this directly in engineering projects and internships: developing the <strong className="text-brand-indigo font-semibold">AquaSense AI</strong> precision irrigation capstone (A+), completing a machine learning internship at CodSoft, and engineering automated audit pipelines across <strong className="text-content-primary font-semibold">25+ regional distribution channels</strong> at PKF, slashing manual processing time by over <strong className="text-content-primary font-semibold">80%</strong>.
              </p>

              <p>
                After graduating from Mechanical Engineering, I joined <strong className="text-content-primary font-semibold">IBT College Canada</strong> to synthesize this foundation with modern full-stack development—mastering React, Next.js, backend APIs, relational and vector databases, automated QA testing, and CI/CD pipelines. Today, that entire progression converges into production <strong className="text-brand-indigo font-semibold">Agentic AI & Full-Stack Systems</strong>, integrating Model Context Protocol (MCP), vector retrieval, and deterministic reliability guardrails.
              </p>
            </div>

            {/* Personal Engineering Statement Card (Cursor-Reactive SpotlightCard) */}
            <SpotlightCard
              spotlightColor="indigo"
              contentClassName="p-4 sm:p-5"
              className="rounded-md bg-surface-elevated/70 border-brand-indigo/30 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-brand-indigo uppercase tracking-wider font-semibold">
                <Terminal className="w-3.5 h-3.5 text-brand-indigo" />
                <span>ENGINEERING PHILOSOPHY</span>
              </div>
              <p className="font-sans text-sm sm:text-[14.5px] text-content-primary leading-relaxed italic">
                “Software provides the deterministic execution plane, but AI provides the cognitive reasoning layer. Real systems engineering begins where modular architecture, verifiable telemetry, and operational resilience converge.”
              </p>
            </SpotlightCard>

            {/* Compact Proof Points Grid (Cursor-Reactive SpotlightCards) */}
            <div className="pt-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PROOF_POINTS.map((pt) => (
                  <SpotlightCard
                    key={pt.title}
                    spotlightColor="emerald"
                    contentClassName="p-3"
                    className="rounded-sm bg-surface-card border-border-subtle"
                  >
                    <div className="font-mono text-xl sm:text-2xl font-bold text-brand-emerald tracking-tight mb-0.5">
                      {pt.value}
                    </div>
                    <div className="font-sans text-xs font-semibold text-content-primary leading-tight mb-1">
                      {pt.title}
                    </div>
                    <div className="font-mono text-[10px] text-content-muted leading-tight font-medium">
                      {pt.detail}
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Visual Convergence Diagram */}
          <Reveal direction="up" delay={120} duration={600} className="lg:col-span-6 w-full">
            <ConvergenceDiagram />
          </Reveal>
        </div>

        {/* Full-Width Progression Rail: Systems Evolution */}
        <Reveal direction="up" delay={140} duration={600} className="mt-8">
          <CareerEvolution />
        </Reveal>
      </Container>
    </Section>
  );
};

