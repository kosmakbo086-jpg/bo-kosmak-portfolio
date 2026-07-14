/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WORK_EXPERIENCE } from '../data';
import { Briefcase, Calendar, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Experience() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>('exp1');

  const toggleJob = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <div className="space-y-10">
      <div className="space-y-2 text-left">
        <h3 className="text-lg font-mono font-semibold text-zinc-800 flex items-center gap-2">
          <span className="text-pink-600">//</span> Career Journey
        </h3>
        <p className="text-xs text-zinc-500 font-mono">
          Interactive vertical chronicle of professional experience. Click individual cards to expand key accomplishments.
        </p>
      </div>

      <div className="relative border-l border-zinc-200 ml-4 pl-6 md:pl-8 space-y-12 py-2">
        {WORK_EXPERIENCE.map((exp, index) => {
          const isExpanded = expandedJobId === exp.id;
          return (
            <div key={exp.id} className="relative group">
              {/* Timeline dot */}
              <div className={`absolute -left-[31px] md:-left-[39px] p-1.5 rounded-full border-2 transition-all duration-300 ${
                isExpanded 
                  ? 'bg-pink-600 border-pink-600 text-white scale-110 shadow-lg shadow-pink-500/20' 
                  : 'bg-white border-zinc-200 text-zinc-400 group-hover:border-zinc-300 shadow-xs'
              }`}>
                <Briefcase size={12} />
              </div>

              {/* Job Card */}
              <div 
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer text-left shadow-xs ${
                  isExpanded 
                    ? 'border-pink-500/30 bg-white shadow-md shadow-pink-100/20' 
                    : 'border-zinc-200 bg-white hover:border-zinc-300'
                }`}
                onClick={() => toggleJob(exp.id)}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h4 className="text-zinc-900 font-sans font-bold text-lg tracking-tight">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-pink-600">
                        @ {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                      <Calendar size={12} className="text-zinc-400" />
                      {exp.period}
                    </div>
                  </div>
                  <button className="text-zinc-400 hover:text-zinc-600 p-1 rounded-lg hover:bg-zinc-100 transition-all">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>

                <p className="mt-4 text-zinc-600 text-sm font-sans leading-relaxed">
                  {exp.description}
                </p>

                {/* Expanded Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-zinc-100 mt-6 space-y-4">
                        <h5 className="text-xs font-mono text-zinc-400 tracking-wider uppercase">Key Achievements:</h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex gap-2 text-zinc-600 text-xs font-sans leading-relaxed">
                              <Star size={12} className="text-pink-500 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-4 space-y-2">
                          <h5 className="text-xs font-mono text-zinc-400 tracking-wider uppercase">Applied Technologies:</h5>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, i) => (
                              <span 
                                key={i}
                                className="px-2.5 py-1 text-[10px] font-mono text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-md"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
