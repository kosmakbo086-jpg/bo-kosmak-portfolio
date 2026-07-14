/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EDUCATION } from '../data';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-2">
        <h3 className="text-lg font-mono font-semibold text-zinc-800 flex items-center gap-2">
          <span className="text-pink-600">//</span> Education
        </h3>
        <p className="text-xs text-zinc-500 font-mono">
          Academic foundation in engineering, design, and analysis.
        </p>
      </div>

      <div className="space-y-6">
        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-4 md:items-start shadow-xs"
          >
            <div className="p-3 w-fit rounded-xl bg-pink-50 border border-pink-100 text-pink-600 self-start">
              <GraduationCap size={24} />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-zinc-900 font-sans font-bold text-base tracking-tight">{edu.degree}</h4>
                <span className="text-xs font-mono font-medium text-pink-600 px-2.5 py-1 rounded-full bg-pink-50 border border-pink-100 w-fit">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm font-mono text-zinc-500">{edu.school}</p>
              <p className="text-zinc-500 text-xs leading-relaxed font-sans">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
