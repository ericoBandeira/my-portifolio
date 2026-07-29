"use client";

import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { experiences } from '../data/profile';
import { getImagePath } from '../lib/utils';

export const Experience = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="py-12 md:py-20 px-4 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 flex items-center gap-3 px-2">
        <Briefcase className="text-purple-500" /> {t.sections.exp}
      </h2>

      {/* Container da Linha Vertical */}
      <div className="relative space-y-8">
        {/* A Linha em si:
            Mobile: Fica fixa na esquerda (left-8 = 2rem = 32px)
            Desktop: Fica fixa no centro (left-1/2)
        */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-700 to-transparent left-8 md:left-1/2 md:-ml-px"></div>

        {experiences.map((xp, index) => (
          <div key={index} className="relative flex flex-col md:flex-row items-start md:justify-between group">
            
            {/* Ícone Central (Bolinha) 
                Mobile: left-8 (32px) para bater com a linha
                Desktop: left-1/2 (centro) para bater com a linha
                translate-x-1/2 negativo para centralizar a bolinha de 40px exatamente no ponto
            */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#0b0c10] bg-slate-800 group-hover:bg-cyan-500 transition-colors shadow-[0_0_0_8px_#0b0c10] z-10 mt-1.5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            {/* Espaçador para layout alternado no Desktop */}
            <div className="hidden md:block w-[calc(50%-2.5rem)]" />

            {/* Card de Conteúdo 
                Mobile: ml-20 (80px) para fugir da bolinha que está em 32px + largura dela
                Desktop: Largura de 50% menos um espacinho
            */}
            <div className={`
              w-[calc(100%-5rem)] ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] 
              bg-[#161b22] p-5 md:p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all shadow-xl
              ${index % 2 === 0 ? 'md:order-first md:mr-auto' : 'md:order-last md:ml-auto'}
            `}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg p-1 overflow-hidden flex items-center justify-center flex-shrink-0">
                  {xp.logo ? (
                    <img 
                      src={getImagePath(xp.logo)} 
                      alt={xp.company} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  ) : (
                    <Briefcase className="text-black" size={24} />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg leading-tight">{xp.company}</h3>
                  <span className="text-[10px] md:text-xs text-cyan-400 font-mono border border-cyan-500/20 px-2 py-0.5 rounded">
                    {lang === 'pt' ? xp.period.pt : xp.period.en}
                  </span>
                </div>
              </div>
              
              <h4 className="text-sm md:text-md font-medium text-slate-200 mb-2">
                {lang === 'pt' ? xp.role.pt : xp.role.en}
              </h4>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-4">
                {lang === 'pt' ? xp.description.pt : xp.description.en}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {xp.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider text-slate-500">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
