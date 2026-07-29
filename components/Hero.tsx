"use client";

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-[85vh] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto py-12 md:py-0">
      <div className="space-y-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-mono border border-cyan-500/20 w-fit">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
          {t.available}
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
          {t.role} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Dev Full Stack & Scrum Master</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
          {t.about}
        </p>

        <div className="flex gap-4 pt-4">
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1c2128] rounded-xl hover:bg-[#0077b5] hover:text-white transition-all border border-white/10 group">
            <Linkedin size={24} />
          </a>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1c2128] rounded-xl hover:bg-white hover:text-black transition-all border border-white/10">
            <Github size={24} />
          </a>
          <a href={profile.social.email} className="p-3 bg-[#1c2128] rounded-xl hover:bg-green-600 hover:text-white transition-all border border-white/10">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
