"use client";

import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { education, certifications } from '../data/profile';

export const Education = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="education" className="py-12 md:py-20 px-6 md:px-20 bg-[#11141a]">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3 justify-center">
          <GraduationCap className="text-emerald-500" /> {t.sections.edu}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Faculdade */}
          {education.map((edu, idx) => (
            <div key={idx} className="bg-[#0b0c10] border border-white/5 p-6 rounded-2xl flex gap-4 h-full items-start">
              <BookOpen className="text-emerald-500 shrink-0" size={28} />
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">{edu.school}</h3>
                <p className="text-slate-400 font-medium text-sm mt-1">{lang === 'pt' ? edu.degree.pt : edu.degree.en}</p>
                <span className="text-xs font-mono text-slate-500 block mt-1">{edu.period}</span>
              </div>
            </div>
          ))}

          {/* Lista de Certificados */}
          <div className="bg-[#0b0c10] border border-white/5 p-6 rounded-2xl h-full">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="text-emerald-500 mt-0.5 min-w-[15px]">✓</span> 
                  <span className="leading-tight">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
