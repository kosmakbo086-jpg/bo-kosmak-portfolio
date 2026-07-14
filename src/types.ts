/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  role: string;
  impact: string;
  demoUrl?: string;
  githubUrl?: string;
  visualType: 'grid' | 'canvas' | 'graph' | 'waveform';
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'analytical' | 'business' | 'interpersonal';
  description: string;
  subskills: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}
