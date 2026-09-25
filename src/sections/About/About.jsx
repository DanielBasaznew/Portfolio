import React from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/ui/Container';
import { ConvergenceDiagram } from './ConvergenceDiagram';
import { CareerEvolution } from './CareerEvolution';
import { Reveal } from '../../components/motion/Reveal';
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
    title: 'Agent System Tests',
    detail: 'Regression test coverage for tool-calling agents',
  },
  {
    value: 'A+',
    title: 'AquaSense AI Capstone',
    detail: 'Graduation honors at IBT College Canada',
  },
];

export const About = () => {
  return (
    <Section id="about" hasDivider className="overflow-hidden">
      <Container>
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
                My foundation began in <strong className="text-content-primary font-semibold">Mechanical Engineering</strong> at Adama Science and Technology University (ASTU), graduating with <span className="text-brand-cyan font-mono text-xs px-1.5 py-0.5 rounded-xs bg-surface-elevated border border-border-subtle">Great Distinction</span>. Mechanical systems instill a relentless discipline: respecting physical constraints, debugging complex multivariable dynamics, and designing for structural tolerances before code is even written.
              </p>
              
              <p>
                In the field at <strong className="text-content-primary font-semibold">PKF, Heineken, and Twinkle</strong>, this mindset translated directly into operational bottlenecks. Instead of treating manual audits and reporting as unavoidable overhead, I engineered programmatic pipelines using Python, Pandas, Playwright, and Selenium across <strong className="text-content-primary font-semibold">25+ regional distribution channels</strong>, slashing manual processing time by over <strong className="text-content-primary font-semibold">80%</strong>. Operations became software.
              </p>

              <p>
                Through rigorous software engineering at <strong className="text-content-primary font-semibold">IBT College Canada</strong>, I solidified full-stack architecture — building performant React/Next.js interfaces, streaming APIs, robust schema validations, and CI/CD testing suites. Today, that entire foundation powers production <strong className="text-brand-indigo font-semibold">Agentic AI & LLM Systems</strong>, combining Model Context Protocol (MCP), vector retrieval, and deterministic reliability guardrails.
              </p>
            </div>

            {/* Personal Engineering Statement Card */}
            <div className="p-4 sm:p-5 rounded-md bg-surface-elevated/70 border border-brand-indigo/30 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-brand-indigo uppercase tracking-wider font-semibold">
                <Terminal className="w-3.5 h-3.5 text-brand-indigo" />
                <span>ENGINEERING PHILOSOPHY</span>
              </div>
              <p className="font-sans text-sm sm:text-[14.5px] text-content-primary leading-relaxed italic">
                “Software provides the deterministic execution plane, but AI provides the cognitive reasoning layer. Real systems engineering begins where modular architecture, verifiable telemetry, and operational resilience converge.”
              </p>
            </div>

            {/* Compact Proof Points Grid */}
            <div className="pt-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PROOF_POINTS.map((pt) => (
                  <div
                    key={pt.title}
                    className="p-3 rounded-sm bg-surface-card/60 border border-border-subtle/80 hover:border-border-medium transition-colors"
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
                  </div>
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
