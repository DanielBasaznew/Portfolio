import React, { useState } from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/ui/Container';
import { SKILL_DOMAINS } from '../../data/skills';
import { SkillDomainCard } from './SkillDomainCard';
import { SystemCompositionFlow } from './SystemCompositionFlow';
import { SkillTicker } from './SkillTicker';
import { Reveal } from '../../components/motion/Reveal';
import { Cpu, ArrowDown } from 'lucide-react';

const FILTER_TABS = [
  { id: 'all', label: 'All Systems (6)' },
  { id: 'agentic-ai', label: 'AI & Agents' },
  { id: 'full-stack', label: 'Full Stack' },
  { id: 'data-backend', label: 'Data & Backend' },
  { id: 'automation-ops', label: 'Automation' },
  { id: 'devops-delivery', label: 'DevOps' },
  { id: 'engineering-iot', label: 'IoT & Systems' },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredDomains =
    activeTab === 'all'
      ? SKILL_DOMAINS
      : SKILL_DOMAINS.filter((d) => d.id === activeTab);

  // Group into Core Systems Engine (Top) and Operations/Infrastructure (Bottom) for the matrix view
  const coreEngine = SKILL_DOMAINS.slice(0, 3);
  const infrastructure = SKILL_DOMAINS.slice(3, 6);

  return (
    <Section id="skills" hasDivider className="overflow-hidden">
      <Container>
        {/* Section Header */}
        <Reveal direction="up" duration={600}>
          <div className="space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-indigo font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
              <span>04 // TECHNICAL ARSENAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-content-primary">
              The stack behind <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald">
                the systems.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-content-secondary max-w-3xl leading-relaxed">
              Technologies organized by the systems they help build — from frontend interfaces and backend services to AI agents, retrieval infrastructure, automation, and deployment.
            </p>
          </div>
        </Reveal>

        {/* Filter Navigation Tabs */}
        <Reveal direction="up" delay={80} duration={600}>
          <div className="flex flex-wrap items-center gap-1.5 mb-6 pb-4 border-b border-border-subtle font-mono text-xs">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo ${
                  activeTab === tab.id
                    ? 'bg-brand-indigo text-white font-semibold shadow-sm'
                    : 'bg-surface-elevated/60 text-content-secondary hover:text-content-primary hover:bg-surface-elevated border border-border-subtle'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Part 5: Moving Technical Toolkit Ribbon */}
        <Reveal direction="none" delay={120} duration={500}>
          <SkillTicker />
        </Reveal>

        {/* Systems Architecture Matrix View */}
        {activeTab === 'all' ? (
          <div className="space-y-6 mb-12">
            {/* Top Tier: Core Systems Engine */}
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-xs text-content-muted">
                <span className="uppercase tracking-widest font-semibold flex items-center gap-1.5 text-brand-indigo">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                  TIER 01 // COGNITIVE ENGINE & APPLICATION RUNTIME
                </span>
                <span className="text-content-muted hidden sm:inline font-medium">
                  CORE & PRODUCTION SYSTEMS
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {coreEngine.map((domain, index) => (
                  <Reveal key={domain.id} direction="up" delay={index * 80} duration={550}>
                    <SkillDomainCard
                      domain={domain}
                      isFocused={false}
                      onSelect={() => setActiveTab(domain.id)}
                    />
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Central Architecture Synthesis Bus */}
            <div className="relative py-2 flex flex-col items-center justify-center">
              <div className="hidden sm:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-brand-indigo/30 via-brand-cyan/40 to-brand-emerald/30 -translate-y-1/2" />
              <div className="relative z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border-medium font-mono text-[10px] text-content-secondary shadow-sm">
                <Cpu className="w-3 h-3 text-brand-cyan" />
                <span className="tracking-wider uppercase">
                  OPERATIONAL & INFRASTRUCTURE INTEGRATION BUS
                </span>
                <ArrowDown className="w-3 h-3 text-brand-indigo animate-bounce" />
              </div>
            </div>

            {/* Bottom Tier: Operations, DevOps & Physical Systems */}
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-xs text-content-muted">
                <span className="uppercase tracking-widest font-semibold flex items-center gap-1.5 text-brand-emerald">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                  TIER 02 // AUTOMATION, DEVOPS & PHYSICAL SYSTEMS
                </span>
                <span className="text-content-muted hidden sm:inline font-medium">
                  ORCHESTRATION & EMBEDDED RIGOR
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {infrastructure.map((domain, index) => (
                  <Reveal key={domain.id} direction="up" delay={index * 80} duration={550}>
                    <SkillDomainCard
                      domain={domain}
                      isFocused={false}
                      onSelect={() => setActiveTab(domain.id)}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Focused Single Domain View */
          <div className="mb-12 max-w-2xl mx-auto">
            {filteredDomains.map((domain) => (
              <Reveal key={domain.id} direction="scale" duration={450}>
                <SkillDomainCard
                  domain={domain}
                  isFocused={true}
                  onSelect={() => {}}
                />
              </Reveal>
            ))}
          </div>
        )}

        {/* System Composition Flow: Interconnected Execution Path */}
        <div className="mt-12">
          <Reveal direction="up" delay={150} duration={600}>
            <SystemCompositionFlow />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};
