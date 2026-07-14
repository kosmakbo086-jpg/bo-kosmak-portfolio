/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MapPin, ExternalLink, FileText, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { motion } from 'motion/react';
import boPortrait from '../assets/images/IMG_4968.jpeg';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: 'profile', label: 'Profile', icon: FileText },
    { id: 'skills', label: 'Skill Matrix', icon: FileText },
    { id: 'experience', label: 'Experience', icon: FileText },
    { id: 'education', label: 'Education', icon: FileText },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              {/* Note: The portrait image path matches the generated image location! */}
              <img
                src={boPortrait}
                alt="Bo Kosmak"
                className="relative w-16 h-16 rounded-full object-cover border border-zinc-200 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-4.5 h-4.5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center" title="Active & Available">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
              </span>
            </div>
            <div className="text-left">
              <h1 id="bo-name-header" className="text-2xl font-sans font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono text-pink-600 font-medium">{PERSONAL_INFO.title}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-zinc-500 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-zinc-400" /> {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={12} className="text-zinc-400" /> {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={12} className="text-zinc-400" /> {PERSONAL_INFO.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Social and Quick Contacts */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-center">
            <a
              id="portfolio-btn"
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-lg bg-pink-50 border border-pink-100 text-pink-600 hover:bg-pink-100/80 transition-all shadow-xs"
            >
              <span>Call: {PERSONAL_INFO.phone}</span>
              <Phone size={12} />
            </a>
          </div>
        </div>

        {/* Tab navigation bar */}
        <nav className="flex flex-wrap gap-1 mt-6 border-t border-zinc-100 pt-4 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
                className={`relative px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'text-pink-600'
                    : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-pink-50/80 border border-pink-100/80 rounded-lg -z-10 shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-pink-600' : 'bg-zinc-300'}`}></span>
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
