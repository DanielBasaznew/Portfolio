import React from 'react';
import { Container } from '../ui/Container';
import { GithubIcon } from '../icons/GithubIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { Mail, Terminal, ArrowUp } from 'lucide-react';

const FOOTER_NAV = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      role="contentinfo"
      className="relative z-10 border-t border-border-medium bg-canvas-base/95 backdrop-blur-md py-10 mt-16 font-mono text-xs"
    >
      <Container className="space-y-8">
        {/* Top Tier: Monogram & Navigation Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-border-subtle">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-xs bg-surface-elevated border border-border-medium text-xs text-brand-indigo font-bold">
                DB
              </span>
              <span className="font-bold text-white text-sm tracking-wider">
                DANIEL<span className="text-brand-indigo">.</span>B
              </span>
              <span className="text-[10px] text-content-dim px-1.5 py-0.2 rounded-xs bg-surface-card border border-border-subtle">
                AI.SYS
              </span>
            </div>
            <p className="text-content-secondary text-xs font-sans">
              Full Stack AI Engineer · Architecting production-grade AI systems, full-stack applications, and enterprise automation.
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
              {FOOTER_NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-2 py-1 text-content-secondary hover:text-content-primary hover:bg-surface-elevated rounded-xs uppercase text-[11px] tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Middle Tier: Metadata & External Profiles */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-content-dim text-[11px]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-content-secondary">
              <Terminal className="w-3 h-3 text-brand-emerald" />
              <span>STACK: REACT 19 · JAVASCRIPT · TAILWIND · MCP</span>
            </span>
            <span className="text-border-medium hidden sm:inline">|</span>
            <span>HOSTED ON VERCEL EDGE</span>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/DanielBasaznew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daniel Basaznew on GitHub"
              className="inline-flex items-center gap-1.5 text-content-secondary hover:text-content-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/daniel-basaznew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daniel Basaznew on LinkedIn"
              className="inline-flex items-center gap-1.5 text-content-secondary hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:basaznewdaniel@gmail.com"
              aria-label="Send email to Daniel Basaznew"
              className="inline-flex items-center gap-1.5 text-content-secondary hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="p-1 rounded-xs bg-surface-elevated text-content-dim hover:text-content-primary border border-border-subtle transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-4 border-t border-border-subtle/50 text-[10.5px] text-content-dim flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © 2026 Daniel Basaznew. All rights reserved.
          </div>
          <div className="text-content-dim">
            ENGINEERING SYSTEMS, NOT JUST SOFTWARE.
          </div>
        </div>
      </Container>
    </footer>
  );
};
