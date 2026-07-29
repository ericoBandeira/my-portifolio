"use client";

import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="min-h-[50vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#0b0c10] to-[#000] py-16 md:py-20">
      <div className="text-center max-w-2xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">{t.sections.contact}</h2>
        <p className="text-slate-400 mb-8 md:mb-10 text-base md:text-lg">
          {t.sections.contactSub}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4">
          <a href={profile.social.email} className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-black rounded-2xl font-bold hover:scale-105 transition-transform w-full sm:w-auto">
            <Mail size={20} />
            {t.buttons.email}
          </a>
          
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-[#0077b5] text-white rounded-2xl font-bold hover:scale-105 transition-transform w-full sm:w-auto">
            <Linkedin size={20} />
            {t.buttons.linkedin}
          </a>
          
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-[#24292e] text-white rounded-2xl font-bold hover:scale-105 transition-transform border border-white/20 w-full sm:w-auto">
            <Github size={20} />
            {t.buttons.github}
          </a>
        </div>

        <footer className="mt-16 md:mt-20 pt-10 border-t border-white/5 text-slate-600 text-xs md:text-sm font-mono">
            <p>{profile.name} &copy; 2024. Built with Next.js + Tailwind.</p>
        </footer>
      </div>
    </section>
  );
};
