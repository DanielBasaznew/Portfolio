import React from 'react';
import { Mic } from 'lucide-react';
import { GithubIcon } from '../../components/icons/GithubIcon';
import { Button } from '../../components/ui/Button';

/**
 * SecondaryProjectCard component
 * Compact technical highlight card for Project 06: Whisper Speech Fine-Tuning
 */
export const SecondaryProjectCard = ({ project }) => {
  return (
    <article
      className="p-4 sm:p-5 rounded-md bg-surface-card/70 border border-border-subtle hover:border-border-medium transition-all duration-200 shadow-sm"
      aria-labelledby={`secondary-project-${project.id}`}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="font-bold text-brand-indigo">{project.index}</span>
            <span className="text-border-medium">/</span>
            <span className="px-2 py-0.5 rounded-xs bg-surface-elevated border border-border-subtle text-brand-cyan uppercase text-[10px] font-semibold tracking-wider flex items-center gap-1">
              <Mic className="w-3 h-3" />
              <span>{project.category} // RESEARCH & ADAPTATION</span>
            </span>
          </div>

          <h3
            id={`secondary-project-${project.id}`}
            className="text-base sm:text-lg font-bold font-sans tracking-tight text-white"
          >
            {project.title}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-content-secondary max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-0.5 rounded-xs bg-surface-elevated/80 border border-border-subtle text-content-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end pt-2 lg:pt-0 border-t lg:border-t-0 border-border-subtle">
          <div className="font-mono text-[10.5px] text-brand-emerald hidden sm:block">
            DOMAIN ADAPTATION
          </div>
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
              View Repository
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
