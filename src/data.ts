/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkExperience, Project, Skill, Education } from './types';

export const PERSONAL_INFO = {
  name: 'Bo Kosmak',
  title: 'Digital Economics Student & Data Analyst',
  email: 'kosmakbo086@gmail.com',
  phone: '070699611',
  location: 'Phnom Penh, Cambodia',
  website: 'https://bo-kosmak.dev',
  tagline: 'Driving analytical insights to solve real-world challenges in the digital economy.',
  bio: 'Digital Economics student with a strong foundation in economic principles, data analysis, and digital business trends. Skilled in critical thinking and adapting to fast-changing digital markets, with a keen interest in e-commerce, fintech, and data-driven decision-making. Eager to apply analytical skills to real-world business challenges.'
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'exp1',
    role: 'Digital Marketing Intern',
    company: 'Tourism Service Assistant Agency (TSA)',
    period: 'June 2026 - Present',
    description: 'Developing and executing digital marketing strategies to promote tourism services, analyzing campaign engagement metrics, and coordinating online outreach.',
    achievements: [
      'Managed and optimized social media advertising campaigns, increasing digital platform engagement and customer inquiries by 25%.',
      'Conducted digital market research and SEO analysis to design and position competitive travel packages for international demographics.',
      'Designed email marketing templates and digital promotional assets, streamlining client onboarding and customer relations.'
    ],
    skills: ['Digital Marketing', 'Market Research', 'SEO & Analytics', 'Social Media Strategy', 'Cross Culture Communication']
  },
  {
    id: 'exp2',
    role: 'General Assistant',
    company: 'Khmer Design Group',
    period: 'November 2025 - February 2026',
    description: 'Provided operational and administrative support, managing project databases, organizing agency budget reports, and assisting with design client presentations.',
    achievements: [
      'Audited and reorganized project billing ledger databases across 6 months of client engagements, reducing payment tracking discrepancies.',
      'Prepared daily and monthly operational expense reports using Excel to support management cost auditing.',
      'Facilitated team collaboration by organizing design assets and coordinating client schedules for major commercial pitches.'
    ],
    skills: ['Operational Auditing', 'Budget Reports', 'Microsoft Office Advanced', 'Teamwork', 'Data Organization']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Bakong CBDC Adoption Analysis',
    description: 'An econometric research study mapping local retail merchant engagement with the national digital currency.',
    longDescription: 'A quantitative study evaluating the velocity of money, consumer onboarding friction, and transaction volumes for Bakong in central marketplaces. Includes regression charts built in Python to evaluate the relationship between digital payments and sales growth.',
    role: 'Lead Researcher',
    impact: 'Identified a 22% variance in adoption speeds driven by digital literacy levels and transaction fee perceptions.',
    tech: ['Python (Pandas, Statsmodels)', 'Excel VBA', 'Data Visualization', 'Econometrics'],
    visualType: 'graph'
  },
  {
    id: 'proj2',
    title: 'Phnom Penh Food App Pricing Index',
    description: 'An automated web scraper and inflation tracking index monitoring digital grocery prices.',
    longDescription: 'An analytical program that tracks daily pricing fluctuations for common household goods across prominent delivery applications. Provides predictive modeling of micro-level CPI trends.',
    role: 'Solo Developer',
    impact: 'Aggregated over 15,000 distinct daily data points with an automated scraper, highlighting digital price divergence.',
    tech: ['Python', 'BeautifulSoup', 'SQL', 'Microsoft Excel Power BI'],
    visualType: 'canvas'
  }
];

export const SKILLS: Skill[] = [
  {
    name: 'Microsoft Office Advanced',
    level: 95,
    category: 'business',
    description: 'Advanced spreadsheets, automated data processing, Power BI connections, and professional executive slides.',
    subskills: ['Excel Pivot Tables & Power Query', 'VBA Macro Automation', 'Financial & Budget Modeling', 'Word Report Formatting', 'PowerPoint Presentation Design']
  },
  {
    name: 'Critical Thinking',
    level: 92,
    category: 'analytical',
    description: 'Rigorous qualitative and quantitative problem-solving, identifying market patterns, and strategic risk auditing.',
    subskills: ['Risk Assessment & Compliance', 'Scenario Modeling & Game Theory', 'Policy Impact Analysis', 'Data-Driven Inference', 'Hypothesis Testing']
  },
  {
    name: 'Coding',
    level: 85,
    category: 'analytical',
    description: 'Developing automated data cleaning scripts, querying databases, and building basic research web views.',
    subskills: ['Python (Pandas, NumPy)', 'SQL Database Querying', 'R for Statistical Analysis', 'HTML / CSS / JavaScript', 'Git Version Control']
  },
  {
    name: 'Cross Culture Communication',
    level: 94,
    category: 'interpersonal',
    description: 'Fluent bilingual translation of complex analytical findings to diverse, multi-cultural stakeholder environments.',
    subskills: ['Khmer & English Fluency', 'Technical Report Writing', 'Data Storytelling & Briefing', 'Active Listening', 'Intercultural Business Etiquette']
  },
  {
    name: 'Teamwork',
    level: 95,
    category: 'interpersonal',
    description: 'Leading collaborative research, executing group policy projects, and participating in peer-to-peer auditing loops.',
    subskills: ['Collaborative Research Co-authoring', 'Agile Project Tracking', 'Peer Review & Constructive Feedback', 'Conflict Resolution', 'Task Delegation & Coordination']
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Science in Digital Economics',
    school: 'National University of Management, Phnom Penh',
    period: '2025 - Present',
    details: 'GPA: 3.85 / 4.0. Focused on Econometrics, Fintech Innovation, Corporate Finance, and Digital Business Operations. Active leader in the Student Economic Association.'
  },
  {
    degree: 'High School',
    school: 'Pannasastra International School, Phnom Penh',
    period: '2024 - 2025',
    details: 'Graduated with high honors. President of the English Debate Club and active leader in student academic forums.'
  }
];
