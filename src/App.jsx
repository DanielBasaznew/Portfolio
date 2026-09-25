import React from 'react';
import { BackgroundSystem } from './components/background/BackgroundSystem';
import { CustomCursor } from './components/Cursor/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';
import { Experience } from './sections/Experience/Experience';
import { Education } from './sections/Education/Education';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div className="relative min-h-screen bg-canvas-base text-content-primary selection:bg-brand-indigo/30 selection:text-white">
      {/* Precision Background Grid & Glow System */}
      <BackgroundSystem />

      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

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

        {/* Step 10A & 10B: Education & Academic Rigor + Certifications */}
        <Education />

        {/* Step 10C: Contact / Collaboration Terminal */}
        <Contact />
      </main>

      {/* Global Engineering Footer */}
      <Footer />
    </div>
  );
};

export default App;
