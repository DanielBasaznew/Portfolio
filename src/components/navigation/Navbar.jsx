import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from '../icons/GithubIcon';
import { NavLinks } from './NavLinks';
import { AvailabilityIndicator } from './AvailabilityIndicator';
import { Container } from '../ui/Container';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll position to apply elevated HUD styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-canvas-base/85 backdrop-blur-md border-b border-border-subtle shadow-hud py-2.5'
          : 'bg-canvas-base/40 backdrop-blur-xs border-b border-transparent py-3.5'
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Left: Monogram / Brand */}
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-sm tracking-wider font-semibold text-content-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded-xs"
          aria-label="Daniel Basaznew - Home"
        >
          <span className="w-7 h-7 flex items-center justify-center rounded-xs bg-surface-elevated border border-border-medium group-hover:border-brand-indigo/50 transition-colors text-xs text-brand-indigo font-bold">
            DB
          </span>
          <span className="tracking-widest hidden sm:inline-block">
            DANIEL<span className="text-brand-indigo">.</span>B
          </span>
          <span className="text-[10px] text-content-dim font-mono hidden md:inline-block px-1.5 py-0.5 rounded-xs bg-surface-card border border-border-subtle">
            AI.SYS
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav
          role="navigation"
          aria-label="Primary Navigation"
          className="hidden md:flex items-center"
        >
          <NavLinks />
        </nav>

        {/* Right: Availability Status & GitHub */}
        <div className="flex items-center gap-2 sm:gap-3">
          <AvailabilityIndicator
            compact
            className="hidden sm:inline-flex"
            statusText="Available for AI Eng"
          />

          <a
            href="https://github.com/DanielBasaznew"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Daniel Basaznew on GitHub"
            className="p-1.5 rounded-sm text-content-secondary hover:text-content-primary hover:bg-surface-elevated/70 border border-transparent hover:border-border-subtle transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo"
            title="GitHub: DanielBasaznew"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="md:hidden p-1.5 rounded-sm text-content-secondary hover:text-content-primary hover:bg-surface-elevated/70 border border-border-subtle focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="md:hidden fixed top-14 left-0 right-0 bottom-0 bg-canvas-base/98 backdrop-blur-2xl border-t border-border-subtle z-50 overflow-y-auto px-6 py-6 flex flex-col justify-between"
        >
          <div>
            <div className="mb-6 pb-4 border-b border-border-subtle">
              <span className="font-mono text-xs uppercase tracking-widest text-content-muted block mb-3">
                Navigation
              </span>
              <NavLinks vertical onItemClick={() => setMobileMenuOpen(false)} />
            </div>

            <div className="py-2">
              <span className="font-mono text-xs uppercase tracking-widest text-content-muted block mb-3">
                Status
              </span>
              <AvailabilityIndicator
                compact={false}
                statusText="Available for AI Engineering Opportunities"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
            <span className="font-mono text-xs text-content-muted">
              github.com/DanielBasaznew
            </span>
            <a
              href="https://github.com/DanielBasaznew"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 font-mono text-xs text-brand-indigo hover:text-brand-indigo-hover underline-offset-4 hover:underline"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Open GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
