/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PERSONAL_INFO } from '../data';
import { BarChart2, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import boPortrait from '../assets/images/IMG_4968.jpeg';

export default function About() {
  const highlights = [
    {
      icon: BarChart2,
      title: 'Data Analysis & Modeling',
      desc: 'Skilled in interpreting complex datasets, identifying key market trends, and utilizing quantitative methods to back data-driven decision making.',
    },
    {
      icon: TrendingUp,
      title: 'Economic & Market Research',
      desc: 'Deep interest in studying digital markets, analyzing fintech innovations, and understanding the evolving landscapes of modern e-commerce.',
    },
    {
      icon: ShieldCheck,
      title: 'Auditing & Risk Assessment',
      desc: 'Strong foundation in structural auditing, assessing risk, and ensuring compliance with financial and operational best practices.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Intro Hero banner */}
      <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 md:p-10 shadow-sm text-left">
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-zinc-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-xs font-mono text-pink-600">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span>
              Current Focus: E-Commerce, Fintech & Data-Driven Decision Making
            </div>
            
            <h2 id="tagline-hero" className="text-3xl md:text-5xl font-sans font-black text-zinc-900 tracking-tight leading-none">
              {PERSONAL_INFO.tagline}
            </h2>
            
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              {PERSONAL_INFO.bio}
            </p>
          </div>
          
          <div className="md:col-span-4 flex justify-center">
            <div className="relative group w-48 h-48 sm:w-56 sm:h-56">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-35 transition duration-500"></div>
              <img
                src={boPortrait}
                alt="Bo Kosmak"
                className="relative w-full h-full rounded-2xl object-cover border border-zinc-200 shadow-md transition duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach Grid */}
      <section className="space-y-6 text-left">
        <h3 className="text-lg font-mono font-semibold text-zinc-800 flex items-center gap-2">
          <span className="text-pink-600">//</span> Core Strengths & Philosophies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  <div className="p-2.5 w-fit rounded-lg bg-pink-50 border border-pink-100 text-pink-600">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-zinc-900 font-sans font-bold text-base tracking-tight">{item.title}</h4>
                  <p className="text-zinc-600 text-xs font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
