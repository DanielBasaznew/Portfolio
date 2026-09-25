import React from 'react';
import { BackgroundSystem } from './components/background/BackgroundSystem';
import { Container } from './components/ui/Container';
import { Section } from './components/layout/Section';
import { Badge } from './components/ui/Badge';
import { Button } from './components/ui/Button';
import { Terminal, ShieldCheck, Cpu, ArrowRight, ExternalLink } from 'lucide-react';

export const App = () => {
  return (
    <div className="relative min-h-screen bg-canvas-base text-content-primary selection:bg-brand-indigo/30 selection:text-white">
      {/* Precision Background System */}
      <BackgroundSystem />

      {/* Main Development Shell */}
      <main className="relative z-10 flex min-h-screen flex-col justify-between">
        {/* Top Minimal HUD Status Bar */}
        <header className="border-b border-border-subtle bg-canvas-base/80 backdrop-blur-md">
          <Container className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-brand-indigo/40 bg-brand-indigo/10 font-mono text-sm font-semibold tracking-wider text-brand-indigo">
                DB
              </span>
              <div className="hidden sm:block">
                <div className="font-sans text-sm font-medium text-content-primary">
                  Daniel Basaznew
                </div>
                <div className="font-mono text-xs text-content-muted">
                  Full Stack AI Engineer
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="emerald" dot>
                FOUNDATION ACTIVE
              </Badge>
              <Badge variant="indigo" className="hidden sm:inline-flex">
                STEP 04 / 10
              </Badge>
            </div>
          </Container>
        </header>

        {/* Center Foundation Showcase */}
        <Section className="flex-1 flex items-center justify-center">
          <Container className="max-w-3xl text-center">
            {/* System Status Pill */}
            <div className="mb-6 flex justify-center">
              <Badge variant="default" className="gap-2 border-border-medium bg-surface-elevated/80 py-1 px-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-indigo animate-pulse" />
                <span className="text-content-secondary">PORTFOLIO DESIGN SYSTEM & TOKENS SCAFFOLD</span>
              </Badge>
            </div>

            {/* Title & Role */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              Daniel Basaznew
            </h1>
            <p className="font-mono text-base sm:text-lg text-brand-indigo font-medium tracking-wide mb-6">
              Full Stack AI Engineer
            </p>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-content-secondary max-w-xl mx-auto leading-relaxed mb-8">
              React + JavaScript foundation initialized with design tokens, typography,
              and atmospheric background. Ready for Step 5 component and section implementation.
            </p>

            {/* Foundation Spec Verification Card */}
            <div className="p-6 mb-8 rounded-md border border-border-subtle bg-surface-card/90 shadow-card text-left max-w-xl mx-auto">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-subtle">
                <div className="flex items-center gap-2 font-mono text-xs text-content-muted">
                  <Terminal className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>SYSTEM_DIAGNOSTICS</span>
                </div>
                <span className="font-mono text-xs text-brand-emerald">STATUS: NOMINAL</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-content-muted flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-content-dim" /> Core Framework:
                  </span>
                  <span className="text-content-primary">Vite 8 · React 19 (JavaScript)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-content-muted flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-content-dim" /> Styling Engine:
                  </span>
                  <span className="text-content-primary">Tailwind CSS + CSS Custom Tokens</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-content-muted">Display Font:</span>
                  <span className="text-content-primary font-sans font-medium">Space Grotesk</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-content-muted">Telemetry Font:</span>
                  <span className="text-brand-indigo font-mono">JetBrains Mono</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Demonstration */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  window.open('https://github.com/DanielBasaznew/Portfolio', '_blank');
                }}
              >
                GitHub Repository
              </Button>
              <Button
                variant="secondary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
                onClick={() => {
                  window.open('https://linkedin.com/in/daniel-basaznew', '_blank');
                }}
              >
                LinkedIn Profile
              </Button>
            </div>
          </Container>
        </Section>

        {/* Bottom Metadata Bar */}
        <footer className="border-t border-border-subtle py-4 bg-canvas-base/80 backdrop-blur-md">
          <Container className="flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-content-muted">
            <div>© 2026 Daniel Basaznew · Portfolio Build Step 4</div>
            <div className="flex items-center gap-3">
              <span>CANVAS: #07090E</span>
              <span className="text-border-medium">|</span>
              <span className="text-brand-indigo">INDIGO: #6366F1</span>
              <span className="text-border-medium">|</span>
              <span className="text-brand-emerald">MINT: #10B981</span>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
};

export default App;
