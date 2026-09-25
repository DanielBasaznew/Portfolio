import React from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/ui/Container';
import { EXPERIENCES } from '../../data/experience';
import { ExperienceCard } from './ExperienceCard';
import { CareerTransitionCallout } from './CareerTransitionCallout';

export const Experience = () => {
  return (
    <Section id="experience" hasDivider className="overflow-hidden">
      <Container>
        {/* Section Header */}
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

        {/* Vertical Engineering Timeline */}
        <div className="relative mb-14">
          {/* Vertical Circuit Line (Desktop/Tablet) */}
          <div
            className="hidden sm:block absolute left-8 lg:left-12 top-6 bottom-6 w-px bg-gradient-to-b from-brand-indigo via-brand-cyan/40 to-brand-emerald/20"
            aria-hidden="true"
          />

          {/* Timeline Nodes & Cards */}
          <div className="space-y-8 sm:space-y-10">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 lg:gap-12"
              >
                {/* Year Marker & Node on Left */}
                <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 w-full sm:w-20 lg:w-28 font-mono pt-1">
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
                        exp.isCurrent ? 'bg-brand-emerald animate-pulse' : 'bg-content-dim'
                      }`}
                    />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 w-full">
                  <ExperienceCard experience={exp} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Transition Framework Callout */}
        <div>
          <CareerTransitionCallout />
        </div>
      </Container>
    </Section>
  );
};
