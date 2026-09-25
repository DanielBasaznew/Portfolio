import React from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/ui/Container';
import { PROJECTS } from '../../data/projects';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { ProjectCard } from './ProjectCard';
import { SecondaryProjectCard } from './SecondaryProjectCard';

export const Projects = () => {
  const flagship = PROJECTS.find((p) => p.featured);
  const coreProjects = PROJECTS.filter((p) => !p.featured && !p.secondary);
  const secondary = PROJECTS.find((p) => p.secondary);

  return (
    <Section id="projects" hasDivider className="overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-indigo font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
            <span>03 // FEATURED SYSTEMS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-content-primary">
            Systems built to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald">
              solve real problems.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-content-secondary max-w-3xl leading-relaxed">
            Production-oriented case studies spanning autonomous Agentic AI & Model Context Protocol (MCP), full-stack geospatial marketplaces, enterprise operational automation, and predictive IoT telemetry.
          </p>
        </div>

        {/* 1. Flagship Featured Case Study (Project 01) */}
        {flagship && (
          <div className="mb-10">
            <FeaturedProjectCard project={flagship} />
          </div>
        )}

        {/* 2. Editorial Case Study Grid (Projects 02 - 05) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {coreProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* 3. Secondary Research / Speech AI Highlight (Project 06) */}
        {secondary && (
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-content-muted">
              <span>SPECIALIZED RESEARCH & ADAPTATION</span>
              <span className="text-content-dim">LOW-RESOURCE ASR</span>
            </div>
            <SecondaryProjectCard project={secondary} />
          </div>
        )}
      </Container>
    </Section>
  );
};
