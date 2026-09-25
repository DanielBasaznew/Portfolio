import React, { useState } from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { GithubIcon } from '../../components/icons/GithubIcon';
import { LinkedinIcon } from '../../components/icons/LinkedinIcon';
import {
  Mail,
  Phone,
  MapPin,
  Terminal,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'basaznewdaniel@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" hasDivider className="overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-indigo font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
            <span>07 // CONNECTION TERMINAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-content-primary">
            Let's build something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald">
              intelligent.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-content-secondary max-w-3xl leading-relaxed">
            Open to engineering opportunities, AI systems work, full-stack development, automation projects, and technically ambitious collaborations.
          </p>
        </div>

        {/* Main Terminal Hub Box */}
        <div className="rounded-md bg-surface-card/90 border border-brand-indigo/30 backdrop-blur-md shadow-card overflow-hidden mb-8">
          {/* Terminal Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 bg-surface-elevated/70 border-b border-border-subtle font-mono text-xs">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-brand-indigo" />
              <span className="font-semibold text-content-primary tracking-wider text-[11px]">
                COMM_INTERFACE // ACTIVE_DIRECT_CHANNELS
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-[10px] font-semibold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                STATUS: OPEN TO TECHNICAL COLLABORATION
              </span>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Direct Email Card */}
            <div className="p-4 rounded-sm bg-surface-elevated/50 border border-border-subtle/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-content-dim font-mono text-xs mb-2">
                  <Mail className="w-3.5 h-3.5 text-brand-indigo" />
                  <span className="uppercase tracking-wider">PRIMARY EMAIL</span>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-xs text-content-primary hover:text-brand-indigo transition-colors break-all font-semibold"
                >
                  {email}
                </a>
              </div>

              <div className="pt-3 mt-3 border-t border-border-subtle/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-content-secondary hover:text-content-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-brand-emerald" />
                      <span className="text-brand-emerald">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-content-dim" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-[11px] text-brand-indigo hover:text-brand-indigo-hover underline-offset-2 hover:underline"
                >
                  Send ↗
                </a>
              </div>
            </div>

            {/* 2. Direct Phone Card */}
            <div className="p-4 rounded-sm bg-surface-elevated/50 border border-border-subtle/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-content-dim font-mono text-xs mb-2">
                  <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                  <span className="uppercase tracking-wider">DIRECT PHONE</span>
                </div>
                <div className="space-y-1">
                  <div>
                    <a
                      href="tel:+251942997107"
                      className="font-mono text-xs text-content-primary hover:text-brand-cyan transition-colors"
                    >
                      +251 942 997 107
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+251913608855"
                      className="font-mono text-xs text-content-primary hover:text-brand-cyan transition-colors"
                    >
                      +251 913 608 855
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-border-subtle/60 font-mono text-[11px] text-content-dim">
                Voice & WhatsApp
              </div>
            </div>

            {/* 3. GitHub Profile */}
            <div className="p-4 rounded-sm bg-surface-elevated/50 border border-border-subtle/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-content-dim font-mono text-xs mb-2">
                  <GithubIcon className="w-3.5 h-3.5 text-white" />
                  <span className="uppercase tracking-wider">GITHUB PROFILE</span>
                </div>
                <div className="font-mono text-xs text-content-primary font-semibold">
                  DanielBasaznew
                </div>
                <div className="font-mono text-[11px] text-content-dim mt-0.5">
                  Public repositories & code
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-border-subtle/60">
                <a
                  href="https://github.com/DanielBasaznew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-brand-indigo hover:text-brand-indigo-hover underline-offset-2 hover:underline"
                >
                  <span>github.com/DanielBasaznew</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* 4. LinkedIn Profile */}
            <div className="p-4 rounded-sm bg-surface-elevated/50 border border-border-subtle/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-content-dim font-mono text-xs mb-2">
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span className="uppercase tracking-wider">LINKEDIN NETWORK</span>
                </div>
                <div className="font-mono text-xs text-content-primary font-semibold">
                  daniel-basaznew
                </div>
                <div className="font-mono text-[11px] text-content-dim mt-0.5">
                  Professional connection & posts
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-border-subtle/60">
                <a
                  href="https://www.linkedin.com/in/daniel-basaznew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-brand-cyan hover:text-brand-cyan transition-colors underline-offset-2 hover:underline"
                >
                  <span>linkedin.com/in/daniel-basaznew</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="p-4 sm:p-6 bg-surface-elevated/60 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-content-secondary">
              <MapPin className="w-3.5 h-3.5 text-brand-indigo" />
              <span>Based in Addis Ababa, Ethiopia · Available for Remote & Global Relocation</span>
            </div>

            <div className="flex items-center gap-3">
              <Button
                href={`mailto:${email}`}
                variant="primary"
                size="md"
                icon={<Mail className="w-4 h-4" />}
                iconPosition="left"
              >
                Initiate Conversation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
