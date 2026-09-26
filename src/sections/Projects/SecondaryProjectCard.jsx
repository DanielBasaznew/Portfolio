import React from 'react';
import { Mic, FileSpreadsheet } from 'lucide-react';
import { GithubIcon } from '../../components/icons/GithubIcon';
import { Button } from '../../components/ui/Button';
import { SpotlightCard } from '../../components/ui/SpotlightCard';

/**
 * SecondaryProjectCard component
 * Compact technical highlight card for exploratory research and operational automation
 */
export const SecondaryProjectCard = ({ project }) => {
  return (
    <SpotlightCard
      as="article"
      data-cursor="project"
      spotlightColor="cyan"
      className="h-full"
      contentClassName="p-4 sm:p-5 h-full"
      aria-labelledby={`secondary-project-${project.id}`}
    >
      <div className="flex flex-col justify-between h-full gap-4">
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="font-bold text-brand-indigo">{project.index}</span>
            <span className="text-border-medium">/</span>
            <span className="px-2 py-0.5 rounded-xs bg-surface-elevated border border-border-subtle text-brand-cyan uppercase text-[10px] font-semibold tracking-wider flex items-center gap-1.5">
              {project.id === 'whisper-amharic-shewa' ? (
                <Mic className="w-3 h-3 text-brand-cyan" />
              ) : (
                <FileSpreadsheet className="w-3 h-3 text-brand-cyan" />
              )}
              <span>{project.category}</span>
            </span>
          </div>

          <h3
            id={`secondary-project-${project.id}`}
            className="text-base sm:text-lg font-bold font-sans tracking-tight text-white"
          >
            {project.title}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed">
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

        <div className="shrink-0 flex items-center justify-between gap-3 pt-3 border-t border-border-subtle">
          <div className="font-mono text-[10.5px] text-brand-emerald">
            {project.id === 'whisper-amharic-shewa' ? 'DOMAIN ADAPTATION' : 'WORKFLOW AUTOMATION'}
          </div>
          {project.links?.github ? (
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
          ) : (
            <span className="font-mono text-[10.5px] text-content-muted px-2.5 py-1 rounded-xs bg-surface-elevated border border-border-subtle">
              Internal Pipeline
            </span>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
};
