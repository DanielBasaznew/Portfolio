import React from 'react';
import { ExternalLink, Lock, Shield } from 'lucide-react';
import { GithubIcon } from '../../components/icons/GithubIcon';
import { Button } from '../../components/ui/Button';
import { SpotlightCard } from '../../components/ui/SpotlightCard';

/**
 * ProjectCard component
 * Data-dense, editorial case-study card for flagship projects 02-05.
 */
export const ProjectCard = ({ project }) => {
  return (
    <SpotlightCard
      as="article"
      data-cursor="project"
      spotlightColor="indigo"
      aria-labelledby={`project-title-${project.id}`}
      className="h-full"
    >
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-5 py-3 bg-surface-elevated/60 border-b border-border-subtle font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-brand-indigo">{project.index}</span>
          <span className="text-border-medium">/</span>
          <span className="px-2 py-0.5 rounded-xs bg-surface-card border border-border-subtle text-content-secondary uppercase text-[10.5px] tracking-wider font-semibold">
            {project.category}
          </span>
        </div>

        {/* Access Status Pill */}
        <div className="flex items-center gap-1.5 text-[10.5px] font-mono">
          {project.access === 'public' && (
            <span className="inline-flex items-center gap-1 text-brand-emerald">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
              <span>PUBLIC REPO</span>
            </span>
          )}
          {project.access === 'deployed' && (
            <span className="inline-flex items-center gap-1 text-brand-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span>LIVE SYSTEM</span>
            </span>
          )}
          {project.access === 'private' && (
            <span className="inline-flex items-center gap-1 text-content-muted font-medium">
              <Lock className="w-3 h-3 text-content-muted" />
              <span>PRIVATE ASSET</span>
            </span>
          )}
        </div>
      </div>

      {/* Main Body */}
      <div className="p-4 sm:p-5 flex-1 space-y-4">
        <div>
          <h3
            id={`project-title-${project.id}`}
            className="text-lg sm:text-xl font-bold font-sans tracking-tight text-white mb-1.5"
          >
            {project.title}
          </h3>
          <p className="font-sans text-xs sm:text-[13.5px] text-content-secondary leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Problem & System Response Micro-blocks */}
        <div className="space-y-2.5">
          <div className="p-2.5 rounded-sm bg-surface-elevated/40 border border-border-subtle/80">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-0.5">
              PROBLEM
            </span>
            <p className="font-sans text-xs text-content-secondary leading-snug">
              {project.problem}
            </p>
          </div>

          <div className="p-2.5 rounded-sm bg-surface-elevated/40 border border-border-subtle/80">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-indigo font-semibold block mb-0.5">
              SYSTEM RESPONSE
            </span>
            <p className="font-sans text-xs text-content-primary leading-snug">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technology Pills */}
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-content-muted font-semibold block mb-1.5">
            STACK
          </span>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-0.5 rounded-xs bg-surface-elevated border border-border-subtle text-content-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Proof Points */}
        <div className="pt-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-content-muted font-semibold block mb-1.5">
            VERIFIED
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {project.proofPoints.map((pt) => (
              <div
                key={pt.label}
                className="p-1.5 rounded-xs bg-canvas-base/60 border border-border-subtle font-mono text-[10px]"
              >
                <div className="font-semibold text-brand-emerald">{pt.label}</div>
                <div className="text-content-muted truncate">{pt.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-4 sm:px-5 py-3 bg-surface-elevated/40 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2">
        {project.links.github && (
          <Button
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            icon={<GithubIcon className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            View GitHub
          </Button>
        )}

        {project.links.demo && (
          <Button
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            icon={<ExternalLink className="w-3.5 h-3.5" />}
            iconPosition="right"
          >
            Live Demo
          </Button>
        )}

        {project.access === 'private' && (
          <div className="flex items-center gap-1.5 font-mono text-xs text-content-muted">
            <Shield className="w-3.5 h-3.5 text-content-muted" />
            <span>{project.links.statusText}</span>
          </div>
        )}
      </div>
    </SpotlightCard>
  );
};
