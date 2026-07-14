/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { SKILLS } from '../data';
import { 
  Award, 
  TrendingUp, 
  Briefcase, 
  Users, 
  FileSpreadsheet,
  BrainCircuit,
  Terminal,
  Languages,
  Users2
} from 'lucide-react';

// Map skill names to visual icons for extra aesthetic polish
const getSkillIcon = (name: string) => {
  const normalized = name.toLowerCase();
  if (normalized.includes('microsoft office')) return FileSpreadsheet;
  if (normalized.includes('critical thinking')) return BrainCircuit;
  if (normalized.includes('coding')) return Terminal;
  if (normalized.includes('cross culture')) return Languages;
  if (normalized.includes('teamwork')) return Users2;
  return Award;
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'analytical' | 'business' | 'interpersonal'>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Award },
    { id: 'analytical', label: 'Analytical Tools', icon: TrendingUp },
    { id: 'business', label: 'Business & Operations', icon: Briefcase },
    { id: 'interpersonal', label: 'Interpersonal Strengths', icon: Users },
  ] as const;

  // Filter skills based on tab selection
  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      return selectedCategory === 'all' || skill.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="space-y-10">
      {/* Header Info */}
      <div className="space-y-2 text-left">
        <h3 className="text-lg font-mono font-semibold text-zinc-800 flex items-center gap-2">
          <span className="text-pink-600">//</span> Interactive Skill Matrix
        </h3>
        <p className="text-xs text-zinc-500 font-mono">
          Explore my core capabilities, proficiency metrics, and technical sub-skills tailored for analytical and economist roles.
        </p>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-5">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer shadow-xs border ${
                  isActive
                    ? 'bg-pink-600 border-pink-600 text-white font-semibold'
                    : 'bg-white border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:border-zinc-300'
                }`}
              >
                <Icon size={13} />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Showcase Grid */}
      {filteredSkills.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-xl border border-dashed border-zinc-300 text-zinc-500 font-mono text-xs">
          No matching skills found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => {
            const SkillIcon = getSkillIcon(skill.name);
            
            return (
              <div
                key={skill.name}
                className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xs text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600">
                        <SkillIcon size={18} />
                      </div>
                      <h4 className="text-base font-sans font-extrabold text-zinc-900 leading-tight">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-500 font-mono">
                      {skill.category}
                    </span>
                  </div>

                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-sans">
                    {skill.description}
                  </p>

                  {/* Subskills chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100">
                    {skill.subskills.map((sub, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-100 text-[10.5px] font-mono text-zinc-600 font-medium"
                      >
                        <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-zinc-100">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-zinc-400 font-medium">Expertise Level</span>
                    <span className="text-pink-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-pink-600 rounded-full transition-all duration-750 ease-out"  
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
