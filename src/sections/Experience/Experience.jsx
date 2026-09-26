import React, { useState, useEffect } from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/ui/Container';
import { EXPERIENCES } from '../../data/experience';
import { ExperienceCard } from './ExperienceCard';
import { CareerTransitionCallout } from './CareerTransitionCallout';
import { Reveal } from '../../components/motion/Reveal';
import { Milestone, Clock, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  const [activeExpId, setActiveExpId] = useState(EXPERIENCES[0]?.id || '');

  // Track active experience card via IntersectionObserver on desktop
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const observers = [];
    EXPERIENCES.forEach((exp) => {
      const el = document.getElementById(`exp-${exp.id}`);
      if (el) {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveExpId(exp.id);
            }
          },
          {
            threshold: 0.35,
            rootMargin: '-10% 0px -40% 0px',
          }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <Section id="experience" hasDivider className="overflow-hidden">
      <Container>
        {/* Section Header */}
        <Reveal direction="up" duration={600}>
          <div className="space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-indigo font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
              <span>05 // PRODUCTION TRACK RECORD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-content-primary">
              Engineering experience <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald">
                in the real world.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-content-secondary max-w-3xl leading-relaxed">
              A production track record spanning industrial operations and mechanical systems to enterprise workflow automation, full-stack software development, and production AI engineering.
            </p>
          </div>
        </Reveal>

        {/* Desktop Sticky Layout Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start mb-16">
          {/* Left Column: Desktop Sticky Observatory Console */}
          <aside
            aria-label="Career Milestones Observatory"
            className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4 self-start font-mono text-xs"
          >
            <div className="p-5 rounded-md bg-surface-card/90 border border-border-medium backdrop-blur-md shadow-card">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-subtle">
                <div className="flex items-center gap-2 text-content-primary font-semibold text-[11px] tracking-wider">
                  <Milestone className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>TIMELINE OBSERVATORY</span>
                </div>
                <span className="text-[10px] text-brand-emerald px-1.5 py-0.5 rounded-xs bg-brand-emerald/10 border border-brand-emerald/30 font-semibold">
                  CHRONOLOGICAL
                </span>
              </div>

              {/* Milestones Stepper */}
              <div className="space-y-3 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border-subtle">
                {EXPERIENCES.map((exp) => {
                  const isActive = activeExpId === exp.id;
                  return (
                    <div
                      key={`nav-${exp.id}`}
                      className={`relative pl-6 transition-all duration-200 ${
                        isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'
                      }`}
                    >
                      {/* Active indicator node */}
                      <span
                        className={`absolute left-0.5 top-1.5 w-3 h-3 rounded-full border transition-all duration-200 flex items-center justify-center bg-canvas-base ${
                          isActive
                            ? 'border-brand-indigo shadow-[0_0_8px_rgba(99,102,241,0.6)]'
                            : 'border-border-medium'
                        }`}
                      >
                        <span
                          className={`w-1 h-1 rounded-full ${
                            isActive ? 'bg-brand-indigo animate-pulse' : 'bg-content-muted'
                          }`}
                        />
                      </span>

                      <div className="text-[11px] font-bold text-brand-cyan">
                        {exp.isCurrent
                          ? `${exp.startYear} · Present`
                          : exp.period.includes('—')
                          ? `${exp.startYear} · ${exp.period.split('—')[1]?.trim()}`
                          : exp.period.includes('–')
                          ? `${exp.startYear} · ${exp.period.split('–')[1]?.trim()}`
                          : exp.period}
                      </div>
                      <div className="font-sans text-xs font-semibold text-content-primary line-clamp-1">
                        {exp.organization}
                      </div>
                      <div className="text-[10px] text-content-muted line-clamp-1">
                        {exp.role}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary Diagnostic */}
              <div className="mt-5 pt-3 border-t border-border-subtle flex items-center justify-between text-[10px] text-content-muted">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-brand-cyan" />
                  <span>2021 – PRESENT</span>
                </span>
                <span className="flex items-center gap-1 text-brand-emerald font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>PRODUCTION VERIFIED</span>
                </span>
              </div>
            </div>
          </aside>

          {/* Right Column: Scrolling Experience Timeline Cards */}
          <div className="lg:col-span-8 w-full relative">
            {/* Vertical Circuit Line (Desktop/Tablet) */}
            <div
              className="hidden sm:block absolute left-8 lg:left-10 top-6 bottom-6 w-px bg-gradient-to-b from-brand-indigo via-brand-cyan/40 to-brand-emerald/20"
              aria-hidden="true"
            />

            {/* Timeline Nodes & Cards */}
            <div className="space-y-8 sm:space-y-10">
              {EXPERIENCES.map((exp, idx) => (
                <Reveal
                  key={exp.id}
                  direction="up"
                  delay={idx * 60}
                  duration={550}
                  id={`exp-${exp.id}`}
                  className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 lg:gap-10 scroll-mt-28"
                >
                  {/* Year Marker & Node on Left */}
                  <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 w-full sm:w-20 lg:w-24 font-mono pt-1">
                    <span className="text-xs font-bold text-brand-cyan sm:text-right">
                      {exp.startYear}
                    </span>

                    {/* Junction Node on Rail */}
                    <div
                      className={`relative z-10 w-4 h-4 rounded-full border flex items-center justify-center bg-canvas-base ${
                        exp.isCurrent
                          ? 'border-brand-emerald shadow-glow-emerald/30'
                          : 'border-border-strong'
                      }`}
                      aria-hidden="true"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          exp.isCurrent ? 'bg-brand-emerald animate-pulse' : 'bg-content-muted'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 w-full">
                    <ExperienceCard experience={exp} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Career Transition Framework Callout */}
        <Reveal direction="up" delay={100} duration={600}>
          <CareerTransitionCallout />
        </Reveal>
      </Container>
    </Section>
  );
};
