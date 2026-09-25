import React from 'react';
import { BackgroundSystem } from './components/background/BackgroundSystem';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';
import { Experience } from './sections/Experience/Experience';
import { Container } from './components/ui/Container';
import { GithubIcon } from './components/icons/GithubIcon';
import { Terminal } from 'lucide-react';

export const App = () => {
  return (
    <div className="relative min-h-screen bg-canvas-base text-content-primary selection:bg-brand-indigo/30 selection:text-white">
      {/* Precision Background Grid & Glow System */}
      <BackgroundSystem />

      {/* Global Navigation HUD */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        {/* Step 5: Hero Section with Telemetry HUD */}
        <Hero />

        {/* Step 6: About / Systems Engineering Profile Section */}
        <About />

        {/* Step 7: Featured AI & Full-Stack Projects / Systems Showcase */}
        <Projects />

        {/* Step 8: Technical Skills & Systems Architecture Matrix */}
        <Skills />

        {/* Step 9: Work Experience & Operational Timeline */}
        <Experience />

        {/* 
          Section Anchor Markers:
          Configured for future implementation steps (Step 10)
          so navigation anchors function cleanly without premature fake content.
        */}
        <div id="education" className="scroll-mt-24" />
        <div id="contact" className="scroll-mt-24" />
      </main>

      {/* Technical HUD Footer */}
      <footer className="relative z-10 border-t border-border-subtle bg-canvas-base/85 backdrop-blur-md py-6 mt-12">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-content-muted">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center rounded-xs bg-surface-elevated border border-border-medium text-[10px] text-brand-indigo font-bold">
              DB
            </span>
            <span className="text-content-secondary">Daniel Basaznew</span>
            <span className="text-border-medium">/</span>
            <span>Full Stack AI Engineer</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-content-dim">
              <Terminal className="w-3 h-3 text-brand-emerald" />
              <span>STATUS: PRODUCTION HUD READY</span>
            </span>
            <span className="text-border-medium hidden sm:inline">|</span>
            <a
              href="https://github.com/DanielBasaznew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daniel Basaznew on GitHub"
              className="inline-flex items-center gap-1 text-content-secondary hover:text-content-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default App;
