import React from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/ui/Container';
import { EDUCATION } from '../../data/education';
import { EducationCard } from './EducationCard';
import { CertificationRegistry } from './CertificationRegistry';

export const Education = () => {
  return (
    <Section id="education" hasDivider className="overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-indigo font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
            <span>06 // ACADEMIC RIGOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-content-primary">
            Engineering discipline. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald">
              Business context. AI specialization.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-content-secondary max-w-3xl leading-relaxed">
            The multidisciplinary academic foundations shaping a production Full Stack AI Engineer — combining physical systems rigor, strategic business context, and postgraduate artificial intelligence.
          </p>
        </div>

        {/* 1. Academic Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {EDUCATION.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </div>

        {/* 2. Technical Credential Registry */}
        <div>
          <CertificationRegistry />
        </div>
      </Container>
    </Section>
  );
};
