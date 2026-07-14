/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import { FileText } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('profile');

  // Dynamically update the active tab as sections scroll into view
  useEffect(() => {
    const sections = ['profile', 'skills', 'experience', 'education'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -65% 0px', // Matches the upper middle area of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-zinc-800 flex flex-col font-sans selection:bg-pink-500/20 selection:text-pink-800 scroll-smooth">
      {/* Background radial overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Navigation / Header */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-16">
          
          {/* Profile Section */}
          <section id="profile" className="scroll-mt-28">
            <About />
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-28 pt-8 border-t border-zinc-200">
            <Skills />
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-28 pt-8 border-t border-zinc-200">
            <Experience />
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-28 pt-8 border-t border-zinc-200">
            <Education />
          </section>

        </main>

        {/* Sticky System/Brand Footer */}
        <footer className="border-t border-zinc-200 bg-white/60 backdrop-blur-md py-6 mt-12 text-center text-xs text-zinc-500 font-mono">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p>© {new Date().getFullYear()} Bo Kosmak. Built with high-performance React & Google GenAI SDK.</p>
            <p className="flex items-center gap-1.5 justify-center">
              <FileText size={12} className="text-pink-600" />
              <span>Verified Port 3000 Ingress Routing</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
